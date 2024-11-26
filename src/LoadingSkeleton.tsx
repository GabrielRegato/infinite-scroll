import React from "react";

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="p-4 border rounded shadow m-6">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
