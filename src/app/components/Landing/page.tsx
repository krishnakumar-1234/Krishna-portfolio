import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <section className="text-gray-400 bg-black-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hello, I&apos;m Krishna
            </h1>
            <p className="mb-8 leading-10">
              From Village to Code - A Story of Gratitude, Perseverance, and
              Self-Study. Hello everyone! 👋 I&apos;m Krishna, a 16-year-old student
              and self-taught web developer. Today, I want to share a crucial
              chapter in my journey — the incredible role my uncle played in not
              only bringing me to the city but also becoming my selfless mentor
              in the world of coding.
            </p>
            <div className="flex justify-center">
              <Link
                href="https://krishnakumar-1234.github.io/devekrishna/aboutMe.html"
                target="_blank"
              >
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  More me
                </button>
              </Link>
              <Link href="https://github.com/krishnakumar-1234" target="_blank">
                <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  Github
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="rounded w-600 h-720 landingimage"
              src="/landing.avif"
              alt="Image of Krishna"
              width={600}
              height={720}
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
