// import Image from "next/image";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignedOut, SignIn, SignInButton } from "@clerk/nextjs";
import FeatureCard from "@/components/FeatureCard";
import {
  LucideIcon,
  MessageCircle,
  Shield,
  Users,
  Video,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col w-full font-sans  px-5 gap-5">
        <div className="flex flex-col items-center justify-center w-full font-bold pt-10  ">
          <h1 className="bg-linear-to-r from-purple-700 to-pink-400 text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text">
            Connect instantly
          </h1>
          <h2 className="bg-linear-to-r from-purple-700 to-pink-300 text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text">
            Chat smarter.
          </h2>
        </div>
        <div className="flex items-center justify-center">
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
        <div className="flex flex-col items-center justify-center gap-4 pt-10 w-full">
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
        <div className="flex items-center justify-center text-center h-full w-full py-4">
          <div className="flex bg-gray-700 h-2 w-2 rounded-full items-center justify-center"></div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center mb-16">
          <h1 className="flex text-2xl text-center font-bold">
            Everything you need to stay connected
          </h1>
          <p className="text-lg max-w-2xl text-center text-gray-700 ">
            Powerfull features desiged for seamless communication whether you
            are chatting with friends or collaborating with teams
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <FeatureCard
            icon={MessageCircle}
            title="Instant Messaging"
            description="Lightening fast messages with seamless delivery. chat with friends and coligues seamlessly"
          />
          <FeatureCard
            icon={Video}
            title="HD video calls"
            description="crystal clear video calls with one click perfect quality for personal chats and team meetings"
          />
          <FeatureCard
            icon={Shield}
            title="privacy first"
            description="End to end encryption keep your messages private all the data only belongs to you"
          />
          <FeatureCard
            icon={Users}
            title="group chats"
            description="create groups with friends family and coleagues manage conversation with advanced controls"
          />
          <FeatureCard
            icon={Zap}
            title="lightening fast "
            description="optimized for speed and preformance works seamlessly with all in your devices and with instant sync"
          />
        </div>
        
      </main>
    </div>
  );
}
