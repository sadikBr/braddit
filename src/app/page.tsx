import PostRenderer from "@/components/post-renderer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Post, RedditListing } from "@/types";
import { AlertCircleIcon } from "lucide-react";
import { headers } from "next/headers";

export default async function Home() {
  const headersList = await headers();

  const host = headersList.get("x-forwarded-host") || headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";

  const baseUrl = `${protocol}://${host}`;

  let data: RedditListing;

  try {

    const response = await fetch(`${baseUrl}/api/r/aww`);

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
    <div>
      <div className="w-full columns-1 md:columns-2 xl:columns-3 max-w-[1480px] mx-auto mt-22 px-4">
        {data.data.children.map((post: Post) => (
          <PostRenderer key={post.data.id} post={post} />
        ))}
      </div>
    </div>
  );
}
