export const typeDefs = ["type AddDetailPlanResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  AddDetailPlan(planName: String!, startTime: String!, endTime: String!, text: String!, image: String!, planId: Int!, comment: String!): AddDetailPlanResponse!\n  AddPlan(thumbnail: String!, writer: String, title: String, avatar: String, content: String, text: String, image: String, detailPlans: [detailPlans]): AddPlanResponse!\n}\n\ntype Query {\n  sayBye: String!\n  sayHello(name: String!): SayHelloResponse!\n  GetPlan(planId: Int!): GetPlanResponse!\n  GetPlans: GetPlansResponse!\n}\n\ntype SayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype AddPlanResponse {\n  ok: Boolean!\n  error: String\n}\n\ninput detailPlans {\n  detailPlanId: Int!\n  planName: String!\n  startTime: String!\n  endTime: String!\n  comment: String!\n  planId: Int!\n  text: String!\n  image: String!\n}\n\ntype GetPlanResponse {\n  ok: Boolean!\n  error: String\n  plan: Plan\n}\n\ntype GetPlansResponse {\n  ok: Boolean!\n  error: String\n  plan: [Plan]\n}\n\ntype DetailPlan {\n  detailPlanId: Int!\n  planName: String!\n  successCheck: Boolean!\n  startTime: String!\n  endTime: String!\n  comment: String!\n  text: String!\n  image: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Plan {\n  planId: Int!\n  thumbnail: String!\n  writer: String\n  title: String\n  avatar: String\n  content: String\n  text: String\n  image: String\n  createdAt: String!\n  updatedAt: String\n  detailPlans: [DetailPlan]\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHello: SayHelloResponse;
  GetPlan: GetPlanResponse;
  GetPlans: GetPlansResponse;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface GetPlanQueryArgs {
  planId: number;
}

export interface SayHelloResponse {
  text: string;
  error: boolean;
}

export interface GetPlanResponse {
  ok: boolean;
  error: string | null;
  plan: Plan | null;
}

export interface Plan {
  planId: number;
  thumbnail: string;
  writer: string | null;
  title: string | null;
  avatar: string | null;
  content: string | null;
  text: string | null;
  image: string | null;
  createdAt: string;
  updatedAt: string | null;
  detailPlans: Array<DetailPlan> | null;
}

export interface DetailPlan {
  detailPlanId: number;
  planName: string;
  successCheck: boolean;
  startTime: string;
  endTime: string;
  comment: string;
  text: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetPlansResponse {
  ok: boolean;
  error: string | null;
  plan: Array<Plan> | null;
}

export interface Mutation {
  AddDetailPlan: AddDetailPlanResponse;
  AddPlan: AddPlanResponse;
}

export interface AddDetailPlanMutationArgs {
  planName: string;
  startTime: string;
  endTime: string;
  text: string;
  image: string;
  planId: number;
  comment: string;
}

export interface AddPlanMutationArgs {
  thumbnail: string;
  writer: string | null;
  title: string | null;
  avatar: string | null;
  content: string | null;
  text: string | null;
  image: string | null;
  detailPlans: Array<detailPlans> | null;
}

export interface AddDetailPlanResponse {
  ok: boolean;
  error: string | null;
}

export interface detailPlans {
  detailPlanId: number;
  planName: string;
  startTime: string;
  endTime: string;
  comment: string;
  planId: number;
  text: string;
  image: string;
}

export interface AddPlanResponse {
  ok: boolean;
  error: string | null;
}
