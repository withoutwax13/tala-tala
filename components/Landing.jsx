"use client";

import { useEffect, useState } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";

const Landing = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setupProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setupProviders();
  }, []);

  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center">
                  <h2 className="text-2xl font-bold text-white md:text-3xl">
                    Kadakol mong bisara sa Twitter. Sadi na sana raw ka.
                  </h2>

                  <p className="hidden text-white/90 sm:mt-4 sm:block">
                    Sadi na sana ika magparabisara kin mga problema mo sa buhay.
                    Ngamin man sadi taga-Riconada ta ngamin na sareta sadi
                    Riconada man. Di na ika mag anap kung uno pang app, sadi na
                    sana ta parehas man sana.
                  </p>

                  <div className="mt-4 md:mt-8">
                    <a
                      key={provider.name}
                      onClick={() => {
                        signIn(provider.id);
                      }}
                      className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                      Nya uno pa? Tala-tala na!
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                <img
                  alt="Student"
                  src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                  className="h-40 w-full object-cover sm:h-56 md:h-full"
                />

                <img
                  alt="Student"
                  src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  className="h-40 w-full object-cover sm:h-56 md:h-full"
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Landing;
