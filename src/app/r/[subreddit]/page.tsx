import PostRenderer from "@/components/post-renderer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Post, RedditListing } from "@/types";
import { AlertCircleIcon } from "lucide-react";

export default async function SubredditPage({
  params,
}: {
  params: Promise<{ subreddit: string }>;
}) {
  const baseUrl = process.env.VERCEL_ENV === "production" ? "https://braddit.vercel.app" : "http://localhost:3000";

  const { subreddit } = await (params);
  let data: RedditListing;

  try {

    const response = await fetch(`${baseUrl}/api/r/${subreddit}`, {
      cache: 'no-cache'
    });

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

    data = await response.json();

  } catch (_error) {

    return (
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Error fetching subreddit</AlertTitle>
        <AlertDescription>
          An unexpected error occurred. Please try again later.
        </AlertDescription>
      </Alert>
    );

  }

  return (
    <div className="mt-4">
      <div className="w-full columns-1 md:columns-2 xl:columns-3 break-inside-avoid max-w-[1480px] mx-auto mt-22 px-4">
        {data.data.children.map((post: Post) => (
          <PostRenderer key={post.data.id} post={post} />
        ))}
      </div>
    </div>
  );
}
