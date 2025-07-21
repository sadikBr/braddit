"use client";

import NavBar from "@/components/nav-bar";
import PostRenderer from "@/components/post-renderer";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { Post } from "@/types";
import { useState } from "react";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("/");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: posts,
    after,
    loading,
    fetchNextPage,
  } = useFetch<Post>(`${selectedValue}.json`);

  return (
    <div>
      <NavBar
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="grid-container gap-4 w-full max-w-[1480px] mx-auto mt-22 px-4">
        {posts.map((post) => (
          <PostRenderer key={post.data.id} post={post} />
        ))}
      </div>

      {after.length > 0 && (
        <Button
          className="cursor-pointer my-6 relative left-1/2 -translate-x-0.5"
          onClick={() => fetchNextPage()}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </Button>
      )}
    </div>
  );
}
