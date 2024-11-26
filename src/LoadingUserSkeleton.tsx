import React from "react";

const LoadingUserSkeleton: React.FC = () => {
  return (
    <div className="flex mt-4 mb-4">
      <div className="animate-pulse space-y-4">
        <div className="h-12 w-12 rounded-full bg-gray-300" />
      </div>
      <div className="ml-4 mt-4">
        <div className="h-4 bg-gray-300 rounded w-24" />
      </div>
    </div>
  );
};

export default LoadingUserSkeleton;
