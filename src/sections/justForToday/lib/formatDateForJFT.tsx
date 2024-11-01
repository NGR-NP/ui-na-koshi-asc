import { format } from "date-fns";

export function formatdDate(date: Date, type?: string) {
    return format(date, type || "yyyy-MM-dd");
}