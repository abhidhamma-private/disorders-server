import { Resolvers } from '../../../types/resolvers';
import {
  AddDetailPlanResponse,
  AddDetailPlanMutationArgs,
} from '../../../types/graph';
import DetailPlan from '../../../entities/DetailPlan';
import moment from 'moment';
const resolvers: Resolvers = {
  Mutation: {
    AddDetailPlan: async (
      _,
      args: AddDetailPlanMutationArgs,
      { req }
    ): Promise<AddDetailPlanResponse> => {
      const date = new Date();

      console.log(moment(date).format('YYYYMMDDHHMM'));

      try {
        await DetailPlan.create({ ...args }).save();
        if (!DetailPlan) {
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
