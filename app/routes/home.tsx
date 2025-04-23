import type { Route } from "./+types/home";
import { Button } from "app/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "app/components/ui/popover";
import { SocialIcon } from "react-social-icons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Profile" },
    { name: "description", content: "Tennyson Wong's Profile" },
  ];
}

export default function Home() {
  const linkedIn = (
    <SocialIcon url="https://www.linkedin.com/in/tennyson-wong-084530174/" />
  );
  return (
    <>
      <div className="mt-5 py-3 flex w-full justify-start-safe">
        <div className="font-bold text-8xl text-gray-700 relative ">
          <h1 className="py-8">Hi,</h1>
          <h1 className="py-8">
            I am <span className="text-blue-400">Tennyson</span>
          </h1>
          <h1 className="py-8">
            I am a <span className="font-nerdy">Web Developer</span>
          </h1>
        </div>
        {/*<img
          src="app/asset/home.jpg"
          alt="Tennyson Wong"
          className="justify-end hue-rotate-15 rounded-2xl w-1/3 h-90% mask-r-from-50% mask-l-from-10% mask-t-from-80% mask-b-from-90% shadow-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
        />*/}
        <div className="absolute inset-y-30 inset-x-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-10 rounded-2xl blur-2xl"></div>
      </div>
      <div className="mt-20 flex flex-wrap justify-center z-999">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="p-5 rounded-2xl text-xl bg-blue-400 text-white hover:bg-gray-900">
              Contact me
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-wrap justify-center drop-shadow-xl/25">
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold">Contact Me</h2>
              <p className="shrink-0 text-sm text-gray-600 dark:text-gray-400">
                Feel free to reach out to me via the following social media.
              </p>
              <span>
                <SocialIcon
                  url="https://www.linkedin.com/in/tennyson-wong-084530174/"
                  className="mt-4 mr-4"
                  style={{ height: 35, width: 35 }}
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <SocialIcon
                  url="https://github.com/krekro"
                  className="mt-4 mr-4"
                  style={{ height: 35, width: 35 }}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </span>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
