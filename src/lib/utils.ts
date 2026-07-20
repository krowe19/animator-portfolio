import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Prefix absolute app paths for Next.js `basePath` (e.g. /gru). */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!base || path.startsWith(`${base}/`) || path === base) return path;
  return `${base}${path}`;
}
