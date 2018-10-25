import { Resolvers } from '../../../types/resolvers';
import { GetPlansResponse } from '../../../types/graph';
import Plan from '../../../entities/Plan';

const resolvers: Resolvers = {
  Query: {
    GetPlans: async (_): Promise<GetPlansResponse> => {
      const plan = await Plan.find();
      try {
        if (!plan) {
          return {
            ok: false,
            error: '아이디와 일치하는 Plan이 없습니다.',
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
