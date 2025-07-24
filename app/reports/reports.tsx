import { Label } from "../components/ui/label";
import { DataTable } from "~/components/ui/data-table";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

// async function getData(): Promise<ReportsType[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       report: "100-wjkebk",
//     },
//     // ...
//   ];
// }

export function Reports() {
  //   let data: any[] = [
  //     {
  //       id: "728ed52f",
  //       report: "100-wjkebk",
  //     },
  //     {
  //       id: "728ed52f",
  //       report: "100-wjkebk",
  //     },
  //     {
  //       id: "728ed52f",
  //       report: "100-wjkebk",
  //     },
  //     {
  //       id: "728ed52f",
  //       report: "100-wjkebk",
  //     },
  //   ];

  //   async function fetchData() {
  //     data = await getData();
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h1 className="text-3xl font-bold text-center">Title</h1>
        <div className="max-w-[500px] w-full space-y-6 px-4">
          <div className="flex flex-row gap-6">
            <Label className="min-w-1/3">Commit ID</Label>
            <span>hbkh-ghcty-ygugu-jgvgv</span>
          </div>
          <DataTable />
          <div className="flex justify-end">
            <Link to="/result">
              <Button>Submit</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
