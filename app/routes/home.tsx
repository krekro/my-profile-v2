import type { Route } from "./+types/home";
import ContactMe from "../components/contact-me";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Profile" },
    { name: "description", content: "Tennyson Wong's Profile" },
  ];
}

export default function Home() {
  return (
    <div>
      <div className="absolute z-0 inset-y-30 inset-x-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-10 rounded-2xl blur-2xl"></div>
      <div className="mt-5 z-10 px-8 py-3 flex w-full justify-start-safe">
        <div className="font-bold text-2xl lg:text-8xl text-gray-700 relative ">
          <h1 className="py-2 lg:py-8">Hi,</h1>
          <h1 className="py-2 lg:py-8">
            I am <span className="text-blue-400">Tennyson</span>
          </h1>
          <h1 className="py-2 lg:py-8">
            I am a <span className="font-nerdy">Software Engineer</span>
          </h1>
        </div>
        {/*<img
          src="app/asset/home.jpg"
          alt="Tennyson Wong"
          className="justify-end hue-rotate-15 rounded-2xl w-1/3 h-90% mask-r-from-50% mask-l-from-10% mask-t-from-80% mask-b-from-90% shadow-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
        />*/}
      </div>
      <div className="z-10 mt-20 flex flex-wrap justify-center">
        <ContactMe />
      </div>
    </div>
  );
}
