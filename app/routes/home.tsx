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
      <div className="mt-5 p-3 flex flex-wrap">
        <div className="font-bold text-8xl text-gray-700">
          <h1 className="p-8">Hi,</h1>
          <h1 className="p-8">
            I am <span className="text-blue-400">Tennyson</span>
          </h1>
          <h1 className="p-8">
            I am a <span className="font-nerdy">Web Developer</span>
          </h1>
        </div>
      </div>
      <div className="mt-10 p-3 flex flex-wrap justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="p-5 rounded-2xl text-xl bg-blue-400 text-white hover:bg-gray-900">
              Contact me
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-wrap justify-center">
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
