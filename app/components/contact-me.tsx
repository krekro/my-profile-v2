import React from "react";
import { Button } from "./ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { SocialIcon } from "react-social-icons";

export default function ContactMe() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="z-10 p-5 rounded-2xl text-xl bg-blue-400 text-white hover:bg-gray-900">
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
  );
}
