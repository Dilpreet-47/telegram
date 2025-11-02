"use client";

import UserSyncWrapper from "@/components/UserSyncWrapper";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <UserSyncWrapper>{children}</UserSyncWrapper>
    </div>
  );
}

export default layout;
