import { getDatabaseContext } from '../../../database';
import { GraphQLQueryResolvers } from '../definitions';

const query: GraphQLQueryResolvers['listLives'] = async root => {
    const { collections } = await getDatabaseContext();

    return collections.lives
        .find(
            {},
            {
                projection: {
                    id: '$_id',
                    firstName: 1,
                    lastName: 1,
                    fullName: { $concat: ['$firstName', ' ', '$lastName'] },
                    description: 1,
                    birthday: 1,
                    hobbies: 1,
                    title: 1,
                },
            }
        )
        .toArray();
};
export default query;
