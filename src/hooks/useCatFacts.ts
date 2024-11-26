import { useQuery } from "@tanstack/react-query";
import { fetchCatFacts } from "../utils/api";

export const useCatFacts = (page: number) => {
  return useQuery(["catFacts", page], () => fetchCatFacts(page), {
    keepPreviousData: true,
  });
};
