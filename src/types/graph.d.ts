export const typeDefs = ["type AddPlanResponse {\n  ok: Boolean!\n  error: String\n}\n\ninput detailPlan {\n  planName: String\n  startTime: String\n  endTime: String\n  allDay: Boolean\n}\n\ninput user {\n  userId: Int\n}\n\ntype Mutation {\n  AddPlan(thumbnail: String!, title: String, content: String, text: String, image: String, detailPlans: [detailPlan], user: user): AddPlanResponse!\n  SignUp(nickName: String!, password: String!, avatar: String!): SignUpResponse\n}\n\ntype GetPlanResponse {\n  ok: Boolean!\n  error: String\n  plan: Plan\n}\n\ntype Query {\n  GetPlan(planId: Int!): GetPlanResponse!\n  GetPlans: GetPlansResponse!\n  SignIn(nickName: String!, password: String!): SignInResponse\n}\n\ntype GetPlansResponse {\n  ok: Boolean!\n  error: String\n  plan: [Plan]\n}\n\ntype DetailPlan {\n  detailPlanId: Int\n  planName: String\n  startTime: String\n  endTime: String\n  allDay: Boolean\n}\n\ntype Plan {\n  planId: Int\n  thumbnail: String\n  title: String\n  content: String\n  text: String\n  image: String\n  createdAt: String\n  updatedAt: String\n  detailPlans: [DetailPlan]\n  user: User\n}\n\ntype User {\n  userId: Int\n  plans: [Plan]\n  nickName: String\n  password: String\n  avatar: String\n  createdAt: String\n  updatedAt: String\n}\n\ntype SignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype SignUpResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n"];
/* tslint:disable */

export interface Query {
  GetPlan: GetPlanResponse;
  GetPlans: GetPlansResponse;
  SignIn: SignInResponse | null;
}

export interface GetPlanQueryArgs {
  planId: number;
}

export interface SignInQueryArgs {
  nickName: string;
  password: string;
}

export interface GetPlanResponse {
  ok: boolean;
  error: string | null;
  plan: Plan | null;
}

export interface Plan {
  planId: number | null;
  thumbnail: string | null;
  title: string | null;
  content: string | null;
  text: string | null;
  image: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  detailPlans: Array<DetailPlan> | null;
  user: User | null;
}

export interface DetailPlan {
  detailPlanId: number | null;
  planName: string | null;
  startTime: string | null;
  endTime: string | null;
  allDay: boolean | null;
}

export interface User {
  userId: number | null;
  plans: Array<Plan> | null;
  nickName: string | null;
  password: string | null;
  avatar: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface GetPlansResponse {
  ok: boolean;
  error: string | null;
  plan: Array<Plan> | null;
}

export interface SignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface Mutation {
  AddPlan: AddPlanResponse;
  SignUp: SignUpResponse | null;
}

export interface AddPlanMutationArgs {
  thumbnail: string;
  title: string | null;
  content: string | null;
  text: string | null;
  image: string | null;
  detailPlans: Array<detailPlan> | null;
  user: user | null;
}

export interface SignUpMutationArgs {
  nickName: string;
  password: string;
  avatar: string;
}

export interface detailPlan {
  planName: string | null;
  startTime: string | null;
  endTime: string | null;
  allDay: boolean | null;
}

export interface user {
  userId: number | null;
}

export interface AddPlanResponse {
  ok: boolean;
  error: string | null;
}

export interface SignUpResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}
