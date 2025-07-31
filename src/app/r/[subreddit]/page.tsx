import PostRenderer from "@/components/post-renderer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Post, RedditListing } from "@/types";
import { AlertCircleIcon } from "lucide-react";

export default async function SubredditPage({
  params,
}: {
  params: Promise<{ subreddit: string }>;
}) {
  const { subreddit } = await (params);

  const response = await fetch(`http://localhost:3000/api/r/${subreddit}`);

  if (!response.ok) {
    return (
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Error fetching subreddit</AlertTitle>
        <AlertDescription>
          Please try again later or check the subreddit name.
        </AlertDescription>
      </Alert>
    );
  }

  const data: RedditListing = await response.json();

  return (
    <div className="mt-4">
      <div className="w-full columns-1 md:columns-2 xl:columns-3 break-inside-avoid max-w-[1480px] mx-auto mt-22 px-4">
        {data.data.children.map((post: Post) => (
          <PostRenderer key={post.data.id} post={post} />
        ))}
      </div>

      {/* TODO: Implement Pagination */}
    </div>
  );
}
