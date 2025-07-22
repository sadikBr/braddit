import { Post } from "@/types";
import axios, { isAxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";

const baseRequest = axios.create({
  baseURL: "https://www.reddit.com",
  timeout: 20000,
});

export default function useFetch<T>(
  endpoint: string,
  options: {
    limit: number;
    sr_detail: boolean;
    debounceDelay: number;
    nsfw: boolean;
  } = {
    limit: 100,
    sr_detail: false,
    debounceDelay: 300,
    nsfw: false,
  },
) {
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
            sr_detail: options.sr_detail,
            limit: options.limit,
            include_over_18: options.nsfw,
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
        if (isAxiosError(error)) {
          if (error.response) {
            setError(
              `Server Error: ${error.response.status} - ${error.response.data.message || "Unknown error"}`,
            );
          } else if (error.request) {
            setError("Network Error: No response received");
          } else {
            setError("Unknown Error");
          }
        } else {
          setError("Unknown Error");
        }
      } finally {
        setLoading(false);
      }
    },
    [endpoint, options.limit, options.sr_detail],
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setData([]);
      setAfter("");
      fetchData();
    }, options.debounceDelay);

    return () => clearTimeout(timeout);
  }, [fetchData, options.debounceDelay]);

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
