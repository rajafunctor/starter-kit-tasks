import { ObjectId } from 'mongodb';
import { getDatabaseContext, Life } from '../../../database';
import { GraphQLMutationResolvers } from '../definitions';

const mutation: GraphQLMutationResolvers['createLife'] = async (root, { body }) => {
    const { collections } = await getDatabaseContext();
    const lifeId = new ObjectId();
    const document: Life = { _id: lifeId, ...body };
    await collections.lives.insertOne(document);

    return document;
};

export default mutation;
