import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Animately</title>
        <link rel="icon" type="image/png" href="/assets/logo-navbar.png" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 text-center ">
        <div className="min-h-screen min-w-full bg-gray-900 flex flex-col justify-center p-10">
          <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
            <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl" />
            <div className="relative bg-white shadow-lg sm:rounded-3xl">
              <div className="flex items-center justify-start pt-6 pl-6">
                <span className="w-3 h-3 bg-red-400 rounded-full mr-2" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2" />
                <span className="w-3 h-3 bg-green-400 rounded-full mr-2" />
              </div>
              <div className="px-20 py-6">
                {/* nav */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                      <img
                        className="h-6 w-6 m-3"
                        src="/assets/logo-navbar.png"
                      />
                      Animately
                    </div>
                    <div className="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
                      <a
                        href="#"
                        className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
                      >
                        Product
                        <svg
                          className="w-3.5 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
                      >
                        Community
                        <svg
                          className="w-3.5 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
                      >
                        Plans
                      </a>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <Link href="/login">
                      <a
                        href="#"
                        className="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out"
                      >
                        Login
                      </a>
                    </Link>
                    <button className="px-6 py-3 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out">
                      Sign Up
                    </button>
                  </div>
                </div>
                {/* /nav */}
                {/* hero section */}
                <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
                  <div className="text-6xl font-semibold text-gray-900 leading-none">
                    Online marketing made stupidly simple.
                  </div>
                  <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
                    Get access to hundreds of free, fun and fancy GIFs for email
                    & online marketing in just a few clicks. Unique designs,
                    diverse styles, small file sizes.
                  </div>
                  <button className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
                    Try Animately for free
                  </button>
                </div>
                <div className="mt-12 lg:mt-32 lg:ml-20 text-left">
                  <button
                    type="button"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <img className="h-6 w-6 m-3" src="/assets/logo-navbar.png" />
        <p className="font-semibold">Copyrights reserved</p>
      </footer>
    </div>
  );
}
