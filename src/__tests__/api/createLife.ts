import { gql, ApolloError } from '@apollo/client';
import { ObjectId } from 'mongodb';
import { getDatabaseContext } from '../../server/database';
import {
    composeHandlers,
    loadFixtures,
    setupDatabase,
    cleanDatabase,
    setupWebService,
    getApolloClient,
    setupEmptyBucket,
} from '../helpers';
import fixtures from './authenticate.fixture.json';

const mutation = gql`
    mutation test($body: InputLife!) {
        createLife(body: $body) {
            id
        }
    }
`;

const webService = setupWebService();

beforeEach(composeHandlers(setupEmptyBucket, setupDatabase, loadFixtures(fixtures), webService.initialize));

afterEach(composeHandlers(cleanDatabase, webService.cleanUp));

test('Create life work should throw error for missing any field', async () => {
    const { client } = getApolloClient(webService.url);
    const variables = {
        body: {
            firstName: 'Unit',
            lastName: 'Test',
            title: 'Best Friend',
            birthday: '2022-01-23T15:16:41.624Z',
            hobbies: ['Playing cricket'],
        },
    };
    const promise = client.mutate({ mutation, variables });
    await expect(promise).rejects.toBeInstanceOf(ApolloError);
    const error: ApolloError = await promise.catch(error => error);
    expect(error.graphQLErrors).toMatchSnapshot();
});

test('Create topic work successfully with all mandatory fields', async () => {
    const { client } = getApolloClient(webService.url);
    const variables = {
        body: {
            firstName: 'Unit',
            lastName: 'Test',
            title: 'Best Friend',
            birthday: '2022-01-23T15:16:41.624Z',
            hobbies: ['Playing cricket'],
            description: 'Just test description ....',
        },
    };
    const { data } = await client.mutate({ mutation, variables });
    expect(data.createLife).not.toBeNull();
    expect(data.createLife.id).not.toBeNull();
    const { collections } = await getDatabaseContext();
    const life = await collections.lives.findOne({ _id: new ObjectId(data.createLife.id) });
    expect(life).not.toBeNull();
    expect(life.title).toEqual(variables.body.title);
    expect(life.firstName).toEqual(variables.body.firstName);
    expect(life.lastName).toEqual(variables.body.lastName);
    expect(life.birthday.toISOString()).toEqual(variables.body.birthday);
    expect(life.hobbies.length).toEqual(variables.body.hobbies.length);
    expect(life.description).toEqual(variables.body.description);
});
