"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import { LogOutIcon, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChannelHeader, Thread } from "stream-chat-react";
import { Channel, useChatContext, Window } from "stream-chat-react";

function Dashboard() {
  const { user } = useUser();
  const router = useRouter();
  const { channel, setActiveChannel } = useChatContext();
  const { setOpen } = useSidebar();

  const handleCall = () => {
    console.log("Calling");
  };

  const handleLeaveChat = () => {
    console.log("loging out user");
  };
  return channel ? (
    <Channel>
      <Window>
        <div className="flex items-center justify-between">
          {channel.data?.member_count === 1 ? (
            <ChannelHeader title="Everyone else has left the chat" />
          ) : (
            <ChannelHeader title="" />
          )}
          <div>
            <Button variant="outline" onClick={handleCall}>
              <VideoIcon className="w-4 h-4" />
              Video Call
            </Button>

            <Button
              variant="outline"
              onClick={handleLeaveChat}
              className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
            >
              <LogOutIcon className="w-4 h-4" />
              Leave Chat
            </Button>
          </div>
        </div>
      </Window>
      <Thread />
    </Channel>
  ) : (
    <div className="flex flex-col w-full h-full items-center justify-center gap-4">
      <h1 className="text-xl">No chat selected</h1>
      <p className="text-muted-foreground">
        select a chat from the sidebar and start new conversation
      </p>
    </div>
  );
}

export default Dashboard;
