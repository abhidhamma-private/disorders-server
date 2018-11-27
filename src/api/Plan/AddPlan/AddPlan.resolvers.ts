import { Resolvers } from '../../../types/resolvers';

import moment from 'moment';
import Plan from '../../../entities/Plan';
import DetailPlan from '../../../entities/DetailPlan';
const resolvers: Resolvers = {
  Mutation: {
    AddPlan: async (_, args, { req }): Promise<any> => {
      const date = new Date();
      console.log(moment(date).format('YYYYMMDDHHMM'));

      try {
        // const detailPlans: DetailPlan = args.detailPlan;
        // const planId =
        await Plan.create({
          ...args,
          userId: args.user.userId,
        })
          .save()
          .then(plan => {
            args.detailPlans.map(detailPlan => {
              DetailPlan.create({ ...detailPlan, plan }).save();
            });
          });

        // await args.detailPlans.map(detailPlan => {
        //   const plan: Plan = req.plan;
        //   detailPlan.planPlanId = planId;
        //   detailPlan.successCheck = false;
        //   console.log(detailPlan);

        //   DetailPlan.create({ ...args, plan }).save();
        //   console.log('갔다');
        // });
        if (!Plan) {
          return {
            ok: false,
            error: '아이디와 일치하는 Plan이 없습니다.',
          };
        }
        return {
          ok: true,
          error: null,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        };
      }
    },
  },
};
export default resolvers;
