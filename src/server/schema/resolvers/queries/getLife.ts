import { getDatabaseContext } from '../../../database';
import { GraphQLQueryResolvers } from '../definitions';

const query: GraphQLQueryResolvers['getLife'] = async (root, { id }) => {
    const { collections } = await getDatabaseContext();

    return collections.lives.findOne(
        { _id: id },
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
    );
};

export default query;
