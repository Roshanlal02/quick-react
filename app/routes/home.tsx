import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PBI Deployments" },
    { name: "description", content: "PBI Deployments" },
  ];
}

export default function Home() {
  return <Welcome />;
}
