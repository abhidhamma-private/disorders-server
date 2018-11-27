import { Resolvers } from '../../../types/resolvers';
import { GetPlansResponse } from '../../../types/graph';
import Plan from '../../../entities/Plan';

const resolvers: Resolvers = {
  Query: {
    GetPlans: async (_, __, { req }): Promise<GetPlansResponse> => {
      console.log('#########');
      console.log(req);
      console.log('#########');

      const plan = await Plan.find({ relations: ['user'] });
      try {
        if (!plan) {
          return {
            ok: false,
            error: 'Plan이 없습니다.',
            plan: null,
          };
        }
        return {
          ok: true,
          error: null,
          plan: plan,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          plan: null,
        };
      }
    },
  },
};
export default resolvers;
