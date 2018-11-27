import { Resolvers } from '../../../types/resolvers';
import User from '../../../entities/User';
import { SignInQueryArgs, SignInResponse } from 'src/types/graph';
import createJWT from '../../../utils/createJWT';
const resolvers: Resolvers = {
  Query: {
    SignIn: async (
      _,
      args: SignInQueryArgs,
      { req }
    ): Promise<SignInResponse> => {
      const { nickName, password } = args;
      try {
        const user = await User.findOne({ nickName });

        if (!user) {
          return {
            ok: false,
            error: '닉네임을 찾을 수 없습니다.',
            token: null,
          };
        }

        const checkPassword = await user.comparePassword(password);
        if (!checkPassword) {
          const token = createJWT(user.userId);
          return {
            ok: true,
            error: null,
            token,
          };
        } else {
          return {
            ok: false,
            error: '비밀번호가 다릅니다..',
            token: null,
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        };
      }
    },
  },
};
export default resolvers;
