"use client";

import NavBar from "@/components/nav-bar";
import PostRenderer from "@/components/post-renderer";
import { TypographyP } from "@/components/typography/typography-p";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { Post } from "@/types";
import { AlertCircleIcon } from "lucide-react";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("/");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: posts,
    after,
    loading,
    error,
    fetchNextPage,
  } = useFetch<Post>(`${selectedValue}.json`, {
    sr_detail: true,
    debounceDelay: 300,
    limit: 100,
    nsfw: true,
  });

  return (
    <div>
      <NavBar
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {error.length > 0 && (
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>{error}</AlertTitle>
          <AlertDescription>
            <TypographyP>Please try again later.</TypographyP>
          </AlertDescription>
        </Alert>
      )}

      <div className="w-full max-w-[1480px] mx-auto mt-22 px-4">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}
        >
          <Masonry>
            {posts.map((post) => (
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
