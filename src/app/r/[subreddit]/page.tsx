"use client";

import PostRenderer from "@/components/post-renderer";
import { TypographyP } from "@/components/typography/typography-p";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { Post } from "@/types";
import { AlertCircleIcon } from "lucide-react";
import { use } from "react";

export default function SubredditPage({
  params,
}: {
  params: Promise<{ subreddit: string }>;
}) {
  const { subreddit } = use(params);

  const { data, loading, error, after, fetchNextPage } = useFetch<Post>(
    `/r/${subreddit}.json`,
    {
      limit: 100,
      sr_detail: true,
      nsfw: true,
      debounceDelay: 300,
    },
  );

  return (
    <div className="mt-4">
      {error.length > 0 && (
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>{error}</AlertTitle>
          <AlertDescription>
            <TypographyP>Please try again later.</TypographyP>
          </AlertDescription>
        </Alert>
      )}

      <div className="w-full columns-3 break-inside-avoid max-w-[1480px] mx-auto px-4">
        {data.map((post: Post) => (
          <PostRenderer key={post.data.id} post={post} />
        ))}
      </div>

      {loading && (
        <div className="flex justify-center items-center h-16 my-6">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-accent-foreground">
          </div>
        </div>
      )}

      {after.length > 0 && !loading && (
        <Button
          className="cursor-pointer my-6 relative left-1/2 -translate-x-1/2"
          onClick={() => fetchNextPage()}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </Button>
      )}
    </div>
  );
}
