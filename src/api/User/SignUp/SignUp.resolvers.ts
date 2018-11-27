import { Resolvers } from '../../../types/resolvers';
import User from '../../../entities/User';
import { SignUpMutationArgs } from 'src/types/graph';

const resolvers: Resolvers = {
  Mutation: {
    SignUp: async (_, args: SignUpMutationArgs, { req }): Promise<any> => {
      try {
        const user = await User.create({
          ...args,
        })
          .save()
          .then(user => user);

        console.log('user');
        console.log(user);

        if (!User) {
          return {
            ok: false,
            error: '잘못된 입력값',
            uesr: null,
          };
        }

        return {
          ok: true,
          error: null,
          user: user,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          user: null,
        };
      }
    },
  },
};
export default resolvers;
