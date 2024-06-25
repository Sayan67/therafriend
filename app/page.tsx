import Hero from "@/components/Hero";

import { SessionProvider } from "next-auth/react";


export default function Home() {
  return (
    <SessionProvider>
      <main className="px-[15%] pt-20">
        <Hero />
      </main>
    </SessionProvider>
  );
}
