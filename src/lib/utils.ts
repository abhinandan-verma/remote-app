import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDateToDaysPassed(date: Date): string {
  const today = new Date();
  const diff = today.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return `${days} days ago`;
}
export function convertSalaryToCurrency(min: number, max: number): string {
  const minInK = min / 1000;
  const maxInK = max / 1000;

  return `$ ${minInK.toLocaleString()}K - ${maxInK.toLocaleString()}K`;
}
