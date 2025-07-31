import NavBar from "@/components/nav-bar";
import PostRenderer from "@/components/post-renderer";
import { TypographyP } from "@/components/typography/typography-p";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Post, RedditListing } from "@/types";
import { AlertCircleIcon } from "lucide-react";

export default async function Home() {

  const response = await fetch("http://localhost:3000/api/r/aww");

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
    <div>
      <div className="w-full columns-1 md:columns-2 xl:columns-3 max-w-[1480px] mx-auto mt-22 px-4">
        {data.data.children.map((post: Post) => (
          <PostRenderer key={post.data.id} post={post} />
        ))}
      </div>

      {/* TODO: Implement Pagination */}
    </div>
  );
}
