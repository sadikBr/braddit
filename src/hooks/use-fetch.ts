import { Post } from "@/types";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const baseRequest = axios.create({
  baseURL: "https://www.reddit.com",
  timeout: 20000,
});

export default function useFetch<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [after, setAfter] = useState("");

  const fetchData = useCallback(
    async (after = "") => {
      try {
        setLoading(true);
        setError("");
        const response = await baseRequest.get(endpoint, {
          params: {
            after,
            sr_detail: true,
          },
        });
        setData((prevData) => [
          ...prevData,
          ...response.data.data.children.filter(
            (child: Post) => !child.data.is_gallery,
          ),
        ]);
        setAfter(response.data.data.after);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    },
    [endpoint],
  );

  useEffect(() => {
    setData([]);
    setAfter("");
    fetchData();
  }, [fetchData]);

  function fetchNextPage() {
    fetchData(after);
  }

  return {
    data,
    loading,
    error,
    after,
    fetchNextPage,
  };
}
