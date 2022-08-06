import { requireUserId } from "~/utils/auth.server";
import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};

export default function Index() {
  return (
    <div className="h-screen w-full bg-slate-400">
      <h2 className="font-bold text-3xl text-white">Hey there</h2>
    </div>
  );
}
