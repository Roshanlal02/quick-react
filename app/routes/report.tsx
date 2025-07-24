import type { Route } from "./+types/report";
import { Reports } from "../reports/reports";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reports" },
    { name: "description", content: "Reports" },
  ];
}

export default function Report() {
  return <Reports />;
}
