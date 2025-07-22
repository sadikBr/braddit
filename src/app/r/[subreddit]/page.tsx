"use client";

import PostRenderer from "@/components/post-renderer";
import { TypographyP } from "@/components/typography/typography-p";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { Post } from "@/types";
import { AlertCircleIcon } from "lucide-react";
import { use } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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

      <div className="w-full max-w-[1480px] mx-auto px-4">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {data.map((post) => (
              <PostRenderer key={post.data.id} post={post} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-16 my-6">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-accent-foreground"></div>
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
