import jwt from 'jsonwebtoken';

const createJWT = (id: number): string => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.JWT_TOKEN === undefined ? 'error' : process.env.JWT_TOKEN
  );
  return token;
};

export default createJWT;
