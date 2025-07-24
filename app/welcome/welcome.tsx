import { Label } from "~/components/ui/label";
import logo from "./logo.svg";
import { Input } from "~/components/ui/input";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img src={logo} alt="Eton logo" className="block w-full" />
          </div>
        </header>
        <div className="max-w-[500px] w-full space-y-6 px-4">
          <h1 className="text-3xl font-bold text-center">PBI Deployment</h1>
          <div className="flex flex-row gap-6">
            <Label className="min-w-1/3">Component</Label>
            <Input placeholder="Enter Component" />
          </div>
          <div className="flex flex-row gap-6">
            <Label className="min-w-1/3">Workspace</Label>
            <Input placeholder="Enter Workspace" />
          </div>
          <div className="flex flex-row gap-6">
            <Label className="min-w-1/3">DB Pool</Label>
            <Input placeholder="Enter DB Pool" />
          </div>
          <div className="flex flex-row gap-6">
            <Label className="min-w-1/3">DB name</Label>
            <Input placeholder="Enter DB name" />
          </div>
        </div>
        <div>
          <Link to="/report">
            <Button>Submit</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
