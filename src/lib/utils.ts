import { clsx, type ClassValue } from "clsx";
import { formatDistanceToNow } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact" }).format(num);
}

export function formatDate(timestamp: number) {
  return formatDistanceToNow(new Date(timestamp), {
    addSuffix: true,
    includeSeconds: true,
  }).replace("about ", "");
}
