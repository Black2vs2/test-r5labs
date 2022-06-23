import { useState, useEffect } from "react";

export const useInfiniteScroll = (callback: () => void) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  const handleScroll = () => {
    console.log(
      "scroll",
      window.innerHeight + document.documentElement.scrollTop,
      document.documentElement.offsetHeight
    );
    if (
      Math.floor(window.innerHeight + document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  };

  return [isFetching, setIsFetching] as const;
};
