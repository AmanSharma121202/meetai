"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export const HomeView = () => {
  const trpc = useTRPC();
  const {data}=useQuery(trpc.hello.queryOptions({text:"Aman"}));
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {data?.greeting}
    </div>
  );
};
