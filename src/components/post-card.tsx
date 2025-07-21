import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate, formatNumber } from "@/lib/utils";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

export default function PostCard({
  post,
  children,
}: {
  post: Post;
  children: React.ReactNode;
}) {
  const subredditImageUrl =
    post.data.sr_detail.community_icon?.split("?")[0] ||
    post.data.sr_detail.header_img ||
    post.data.sr_detail.icon_img;

  return (
    <Card className="w-full h-fit mb-2">
      <CardHeader>
        <CardDescription className="flex items-center gap-2 mb-2">
          <Link
            className="flex items-center gap-2 hover:underline"
            href={`/r/${post.data.subreddit}`}
          >
            {subredditImageUrl && (
              <div className="w-6 aspect-square rounded-full overflow-hidden">
                <Image
                  src={subredditImageUrl}
                  alt="Subreddit Profile Image"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain bg-white"
                />
              </div>
            )}
            <div className="text-xs font-bold">
              {post.data.subreddit_name_prefixed}
            </div>
          </Link>

          <div>&#x2022;</div>

          <Link className="hover:underline" href={`/u/${post.data.author}`}>
            <div className="text-xs">u/{post.data.author}</div>
          </Link>

          <div>&#x2022;</div>

          <div className="text-xs">
            {formatDate(post.data.created_utc * 1000)}
          </div>
        </CardDescription>
        <CardTitle>{post.data.title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaArrowUp className="cursor-pointer" size={16} />
          <span className="text-xs font-bold">
            {formatNumber(post.data.ups)}
          </span>
          <FaArrowDown className="cursor-pointer" size={16} />
        </div>
        <Link
          className="hover:underline"
          href={`https://www.reddit.com${post.data.permalink}`}
        >
          <div className="text-sm font-bold">
            {formatNumber(post.data.num_comments)} comments
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
}
