import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Signup Wizard App</h1>
      <Link href="/signup/step1">
        <Button>Start Signup</Button>
      </Link>
    </div>
  );
}
