"use client";

import UserSyncWrapper from "@/components/UserSyncWrapper";
import streamClient from "@/lib/stream";
import { Chat } from "stream-chat-react";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Link from "next/link";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <UserSyncWrapper>
        <Chat client={streamClient}>
          <SidebarProvider
            style={
              {
                "--sidebar-width": "19rem",
              } as React.CSSProperties
            }
          >
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Link
                  href="/dashboard"
                  className="font-medium uppercase tracking-widest "
                >
                  Beam
                </Link>
              </header>
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </Chat>
      </UserSyncWrapper>
    </div>
  );
}

export default layout;
