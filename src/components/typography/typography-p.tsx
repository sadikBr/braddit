import { cn } from "@/lib/utils";

export function TypographyP({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-sm line-clamp-6 leading-5 [&:not(:first-child)]:mt-6",
        className,
      )}
    >
      {children}
    </p>
  );
}
