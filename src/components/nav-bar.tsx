"use client";

import { ThemeToggler } from "@/components/theme/theme-toggler";
import { TypographyH1 } from "./typography/typography-h1";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoHome, IoSearch } from "react-icons/io5";
import { FaArrowUpRightDots, FaBorderAll } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";
import Link from "next/link";
import useFetch from "@/hooks/use-fetch";
import { Subreddit } from "@/types";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";

const NavBar = ({
  selectedValue,
  setSelectedValue,
  searchQuery,
  setSearchQuery,
}: {
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const endpoint = useMemo(
    () => `/search.json?q=${searchQuery}&type=sr`,
    [searchQuery],
  );

  const { data: subreddits, loading } = useFetch<Subreddit>(endpoint, {
    limit: 10,
    sr_detail: false,
    debounceDelay: 120,
    nsfw: true,
  });

  return (
    <div className="fixed top-0 left-0 z-50 w-screen bg-background">
      <div className="flex justify-between items-center w-full px-4 xl:px-0 xl:w-[1480px] mx-auto py-4">
        <div className="flex items-center gap-4">
          <TypographyH1>Braddit</TypographyH1>
          <Select value={selectedValue} onValueChange={setSelectedValue}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a subreddit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="/">
                  <IoHome /> Home
                </SelectItem>
                <SelectItem value="/r/popular">
                  <FaArrowUpRightDots /> Popular
                </SelectItem>
                <SelectItem value="/r/all">
                  <FaBorderAll /> All
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="relative flex flex-1 mx-16">
          <Input
            placeholder="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 100)}
          />
          {isFocused && searchQuery !== "" && (
            <div className="flex flex-col absolute top-12 left-0 w-full bg-background border-2 border-accent rounded-md">
              <Link
                href={`/search?q=${searchQuery}`}
                className="flex items-center w-full p-3 gap-2 hover:bg-accent"
              >
                <IoSearch /> Search for &quot;{searchQuery}&quot;
              </Link>

              {/* Autocomplete results */}
              {loading ? (
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ) : (
                subreddits?.map((subreddit) => {
                  const imageUrl =
                    subreddit.data.community_icon?.split("?")[0] ||
                    subreddit.data.header_img ||
                    subreddit.data.icon_img;

                  return (
                    <Link
                      key={subreddit.data.id}
                      href={`/${subreddit.data.display_name_prefixed}`}
                      className="flex items-center w-full p-3 gap-2 hover:bg-accent"
                    >
                      {imageUrl?.length > 0 ? (
                        <Image
                          className="rounded-full w-8 h-8 object-contain"
                          src={imageUrl}
                          alt={subreddit.data.display_name}
                          width={1980}
                          height={1080}
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-300 rounded-full" />
                      )}
                      <div className="flex flex-col justify-center gap-1">
                        <h2 className="text-sm">
                          {subreddit.data.display_name_prefixed}
                        </h2>
                        <p className="text-xs">
                          {subreddit.data.subscribers || "??"} followers
                        </p>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          )}
        </div>

        <ThemeToggler />
      </div>
    </div>
  );
};

export default NavBar;
