import { ObjectId } from 'mongodb';
import { getDatabaseContext, Life } from '../../../database';
import { GraphQLMutationResolvers } from '../definitions';

const mutation: GraphQLMutationResolvers['createLife'] = async (
    root,
    { firstName, lastName, title, birthday, hobbies, description }
) => {
    const { collections } = await getDatabaseContext();

    const lifeId = new ObjectId();

    const document: Life = {
        _id: lifeId,
        title,
        firstName,
        lastName,
        description,
        hobbies,
        birthday,
    };

    await collections.lives.insertOne(document);

    return document;
};

export default mutation;
