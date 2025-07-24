import successLogo from "public/successCheck.svg";

export function Result() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h1 className="text-3xl font-bold text-center">DEPLOYMENT COMPLETE</h1>
        <div className="flex max-w-[500px] w-full space-y-6 px-4 justify-center flex-col">
          <img src={successLogo} alt="success" />
          <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="text-lg *:font-semibold text-center">
              2 reports and 5 updated to the workspace
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
