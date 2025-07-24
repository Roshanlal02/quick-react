import type { Route } from "./+types/report";
import { Result } from "~/results/restult";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Results" },
    { name: "description", content: "Results" },
  ];
}

export default function Report() {
  return <Result />;
}
