import { Post } from "@/types";
import PostCard from "./post-card";
import Image from "next/image";

function getPostTypeAndRequiredRenderingAttributes(post: Post) {
  const postAttributes = {
    type: "",
    width: 1980,
    height: 1080,
    alt: post.data.title,
    url: "",
    text: "",
    html: "",
  };

  if (post.data.is_self) {
    postAttributes.type = "text";
    postAttributes.text = post.data.selftext;
  } else if (
    post.data.url_overridden_by_dest?.match(/(\.jpe?g|\.png|\.gifv?)$/g)
  ) {
    postAttributes["type"] = "image";
    postAttributes["url"] = post.data.url_overridden_by_dest;
  } else if (post.data.url.match(/(\.jpe?g|\.png|\.gifv?)$/g)) {
    postAttributes["type"] = "image";
    postAttributes["url"] = post.data.url;
  } else if (post.data.url.match(/(\.mp4|\.webm)$/g)) {
    postAttributes["type"] = "video";
    postAttributes["url"] = post.data.url;
  } else if (
    post.data.post_hint === "hosted:video" ||
    post.data.post_hint === "rich:video" ||
    post.data.domain === "v.redd.it"
  ) {
    postAttributes["type"] = "video";

    const redditVideo =
      post.data.media?.reddit_video || post.data.secure_media?.reddit_video;
    if (redditVideo) {
      postAttributes.url = redditVideo.fallback_url;
    }

    const oembed = post.data.media?.oembed || post.data.secure_media?.oembed;
    if (oembed) {
      postAttributes.html = oembed.html;
    }
  }

  return postAttributes;
}

export default function PostRenderer({ post }: { post: Post }) {
  const extractedAttributes = getPostTypeAndRequiredRenderingAttributes(post);

  return (
    <PostCard post={post}>
      {extractedAttributes.type === "text" && (
        <div className="prose max-w-none">{extractedAttributes.text}</div>
      )}
      {extractedAttributes.type === "image" && (
        <Image
          src={extractedAttributes.url}
          alt={extractedAttributes.alt}
          width={extractedAttributes.width}
          height={extractedAttributes.height}
          className="w-full h-auto"
        />
      )}
      {extractedAttributes.type === "video" &&
        extractedAttributes.url !== "" && (
          <video
            src={extractedAttributes.url}
            controls
            className="w-full h-auto"
          />
        )}
      {extractedAttributes.type === "video" &&
        extractedAttributes.url !== "" && (
          <div dangerouslySetInnerHTML={{ __html: extractedAttributes.html }} />
        )}
    </PostCard>
  );
}
