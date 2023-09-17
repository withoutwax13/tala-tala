"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setupProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setupProviders();
  }, []);

  if (!session?.user) {
    return (
      <>
        {providers &&
          Object.values(providers).map((provider) => (
            <header className="bg-gray-50">
              <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center sm:justify-between sm:gap-4">
                  <div className="flex gap-2 flex-center">
                    <Image
                      src="/assets/images/tala-tala.svg"
                      alt="logo"
                      width={33}
                      height={33}
                    />
                  </div>

                  <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => {
                        signIn(provider.id);
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 border border-blue-700 rounded"
                    >
                      Magloog Gamit Google
                    </button>
                  </div>
                </div>
              </div>
            </header>
          ))}
      </>
    );
  } else {
    return <></>
  }
};

export default Nav;
