import { useQuery } from "@tanstack/react-query";
import { fetchRandomUser } from "../utils/api";

export const useRandomUser = (index: number) => {
  return useQuery(["randomUser", index], () => fetchRandomUser(index), {
    keepPreviousData: true,
  });
};
