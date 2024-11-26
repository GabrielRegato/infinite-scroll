import React, { useState, useEffect } from "react";
import { useCatFacts } from "./hooks/useCatFacts";
import LoadingSkeleton from "./LoadingSkeleton";
import CatFactItem from "./CatFactItem";
import InfiniteScroll from "./InfiniteScroll";
import { fetchRandomUser } from "./utils/api";
import { User } from "./interfaces/user.interface";

const CatFacts: React.FC = () => {
  const [loadingUser, setLoadingUser] = useState(false);
  const [page, setPage] = useState(1);
  const [facts, setFacts] = useState<String[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [lastPage, setLastPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const { data, isLoading, isError } = useCatFacts(page);
  const loadingTimes = 4;

  // Function to fill up the data about each user for each cat fact
  const handleUserData = async (records: any) => {
    setLoadingUser(true);
    const userDataArray: User[] = [];
    for (const [index, item] of records.entries()) {
      const userData = await fetchRandomUser(index); // Use index here
      userDataArray.push(userData);
    }
    if (userDataArray?.length > 0) {
      setUsers((prev) => [...prev, ...userDataArray]);
      setLoadingUser(false);
    }
  };

  // useEffect to handle data updates and initial fetch
  useEffect(() => {
    if (data && data?.records?.length > 0 && !isLoading) {
      handleUserData(data?.records);
      setFacts((prev) => [...prev, ...data.records]);
      setLastPage(data.last_page || 0);
    }
  }, [data, isLoading]);

  // Load more function to get data once we are at the end of the page
  const loadMore = () => {
    if (!isFetching && page < lastPage) {
      setIsFetching(true);
      setPage((prev) => prev + 1);
    }
  };

  // useEffect to reset fetching state after data is received
  useEffect(() => {
    if (data && data?.records?.length > 0 && !isLoading) {
      setIsFetching(false);
    }
  }, [data, isLoading]);

  // useEffect to handle initial fetch on component mount
  useEffect(() => {
    if (page === 1) {
      setIsFetching(true);
    }
  }, [page]);

  if (isLoading) {
    return (
      <div>
        {Array.from({ length: loadingTimes }).map((_, index) => (
          <LoadingSkeleton key={index} />
        ))}
      </div>
    );
  }
  if (isError) return <div>Error fetching cat facts.</div>;

  return (
    <InfiniteScroll loadMore={loadMore} hasMore={page < lastPage}>
      <div className="space-y-4">
        {facts.map((fact: string, index: number) => (
          <CatFactItem
            key={index}
            fact={fact}
            index={index}
            user={users?.[index]}
            loadingUser={loadingUser}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default CatFacts;
