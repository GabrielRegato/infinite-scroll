/*
Note: I tried to implement this customized hook to make just one call to the API of cat facts
and once we got the data, call immediately the random user API, but I faced an error with it
for that reason i didnt implement it for the moment, and I didnt want to take more innecesary time
for delivery, but I'll make it work.
*/
import { useCatFacts } from "./useCatFacts";
import { useRandomUser } from "./useRandomUser";

export const useCatFactsWithUsers = (page: number) => {
  let usersData = [];
  const { data: catFactsData, isLoading, isError } = useCatFacts(page);
  if (catFactsData?.records && catFactsData?.records.length > 0) {
    const usersQueries = Array.from(
      { length: catFactsData?.records.length },
      (_, index) => useRandomUser(index)
    );
    if (usersQueries?.length > 0) {
      usersData = catFactsData?.records?.map((fact: string, index: number) => {
        return {
          fact: fact,
          user: usersQueries[index]?.data,
        };
      });
    }
  }
  return {
    data: {
      records: usersData,
      current_page: catFactsData?.current_page,
      last_page: catFactsData?.last_page,
    },
    isLoading,
    isError,
  };
};
