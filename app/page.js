"use client";

import Landing from "@components/Landing";
import { useSession } from "next-auth/react";
import Feed from "@components/Feed";

const Home = () => {
  const { data: session } = useSession();
  return (
    <main>
      {session?.user ? (
        <Feed/>
      ) : (
        <Landing/>
      )}
    </main>
  );
};

export default Home;
