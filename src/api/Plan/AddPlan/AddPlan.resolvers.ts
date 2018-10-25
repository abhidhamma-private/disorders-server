import { Resolvers } from '../../../types/resolvers';

import moment from 'moment';
import DetailPlan from '../../../entities/DetailPlan';
import Plan from '../../../entities/Plan';
const resolvers: Resolvers = {
  Mutation: {
    AddPlan: async (_, args, { req }): Promise<any> => {
      const date = new Date();

      console.log(moment(date).format('YYYYMMDDHHMM'));

      try {
        await Plan.create({ ...args }).save();

        args.detailPlans.map(detailPlan =>
          DetailPlan.create(detailPlan).save()
        );
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
