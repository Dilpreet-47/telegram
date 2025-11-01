// import Image from "next/image";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignedOut, SignIn, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col w-full font-sans  px-5 gap-5">
        <div className="flex flex-col items-center justify-center w-full font-bold pt-10  ">
          <h1 className="bg-linear-to-r from-purple-700 via-gray-600 to-pink-600 text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text">
            Connect instantly
          </h1>
          <h2 className="bg-linear-to-r from-purple-700 via-gray-600 to-pink-600 text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text">
            Chat smarter.
          </h2>
        </div>
        <div>
          <p className="flex text-center">
            The modern messaging platform that combines lightening fast chat and
            crystal clear video in one seamless experience
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
          <SignedOut>
            <SignInButton mode="modal">
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                Start Chatting Free
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div>
            <p>Trusted by millions of users worldwide</p>
          </div>
          <div className="flex gap-4 text-2xl">
            <div className="flex flex-col justify-center items-center">
              <div className="font-bold">50K+</div>
              <p className="text-sm">Active Users</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="font-bold">1M+</div>
              <p className="text-sm">Active Users</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="font-bold"> 99.9%</div>
              <p className="text-sm text-gray-800">Active Users</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
