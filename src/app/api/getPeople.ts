import { RandomUserResponse } from "@/types/randomUser.type";
import { appConfig, appConfigLeaders } from "@/utils/config";

const { baseUrl } = appConfig;
const { baseUrlLead } = appConfigLeaders;

export const getPeople = async (): Promise<RandomUserResponse> => {
  const res = await fetch(baseUrl, { next: { revalidate: 3600 } });

  return res.json();
};
export const getLeaders = async (): Promise<RandomUserResponse> => {
  const resLead = await fetch(baseUrlLead, {
    next: { revalidate: 3600 },
  });

  return resLead.json();
};
