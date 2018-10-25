import { Resolvers } from '../../../types/resolvers';
import { GetPlanResponse, GetPlanQueryArgs } from '../../../types/graph';
import Plan from '../../../entities/Plan';

const resolvers: Resolvers = {
  Query: {
    GetPlan: async (
      _,
      args: GetPlanQueryArgs,
      { req }
    ): Promise<GetPlanResponse> => {
      try {
        const plan = await Plan.findOne(
          { planId: args.planId },
          { relations: ['detailPlans'] }
        );
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
          plan,
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
