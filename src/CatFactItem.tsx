// src/components/CatFactItem.tsx
import React from "react";
import LoadingUserSkeleton from "./LoadingUserSkeleton";
import { CatFactItemInterface } from "./interfaces/catFactItem.interface";

const CatFactItem: React.FC<CatFactItemInterface> = ({
  fact,
  user,
  loadingUser,
}) => {
  return (
    <div className="p-4 border rounded shadow">
      <p className="text-lg">{fact}</p>
      {loadingUser && <LoadingUserSkeleton />}
      {user && !loadingUser && (
        <div className="flex items-center mt-2">
          <img
            src={user.picture.thumbnail}
            alt={user.name.first}
            className="rounded-full mr-2"
          />
          <span>{`${user.name.first} ${user.name.last}`}</span>
        </div>
      )}
    </div>
  );
};

export default CatFactItem;
