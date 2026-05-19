import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatCategories(categories: string[]): string {
  return categories.join(" / ");
}
