import React, { useEffect, useRef } from "react";
import { InfiniteScrollProps } from "./interfaces/InfiniteScroll.interface";

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  loadMore,
  hasMore,
  children,
}) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      {
        root: null,
        threshold: 1.0,
      }
    );

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [lastElementRef, hasMore, loadMore]);

  return (
    <div>
      {children}
      <div ref={lastElementRef} className="h-10"></div>
    </div>
  );
};

export default InfiniteScroll;
