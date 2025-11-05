"use client";

import * as React from "react";
import { GalleryVerticalEnd, Heading1 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { ChannelList, divMod } from "stream-chat-react";
import { ChannelFilters, ChannelSort } from "stream-chat";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();

  const filters: ChannelFilters = {
    members: { $in: [user?.id as string] },
    type: { $in: ["messaging", "team"] },
  };

  const options = { presence: true, state: true };
  const sort: ChannelSort = {
    last_message_at: -1,
  };

  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">
                    Welcome Back
                  </span>
                  <span className="text-sm font-semibold">
                    {user?.firstName} {user?.lastName}
                  </span>
                </div>
                <UserButton signInUrl="/sign-in" />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            <Button variant={"outline"} className="w-full">
              Start new chat
            </Button>
            <ChannelList
              sort={sort}
              filters={filters}
              options={options}
              EmptyStateIndicator={() => (
                <div className="flex h-[300px] items-center justify-center">
                  <h1 className="flex font-sans">Ready to chat</h1>
                </div>
              )}
            />
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
