import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  console.log(userId);
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Welcome to <br />
            <span className="text-blue-700 text-5xl md:text-6xl">
              Kinda HMS
            </span>
          </h1>
        </div>
        <div>
          <h1 className="font-bold italic md:justify-center text-center">
            Manage your hospital operations, patients, and more with Kinda HMS.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-8">
          {userId ? (
            <></>
          ) : (
            <>
              <Link href="/sign-in">
                <Button className="md:text-base">New Patient</Button>
              </Link>

              <Link href="/sign-up">
                <Button className="mt-4 md:mt-0 md:ml-4" variant="outline">
                  Login to account
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
      <footer className="mt-8">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Kinda HMS. All rights reserved.
          </p>
      </footer>
    </div>
  );
}
