import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Building } from "lucide-react";

export default function ProfileCard() {
  return (
    <Card className=" bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl items-center flex flex-row gap-4">
          <div className="z-10 p-2 rounded-md bg-gray-200 dark:bg-gray-800">
            <Building className="h-5 w-5" />
          </div>
          <span className="text-gray-700">Work Experience</span>
        </CardTitle>
        <CardDescription>as an IT Professional</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 font-light text-gray-700 dark:text-gray-300">
        <div>
          <h3 className="text-lg font-semibold">Software Engineer</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            ABC Tech Solutions | Jan 2020 - Present
          </p>
          <p>
            Developed and maintained web applications using modern frameworks
            and technologies. Collaborated with cross-functional teams to
            deliver high-quality software solutions.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">IT Support Specialist</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            XYZ Corp | Jun 2017 - Dec 2019
          </p>
          <p>
            Provided technical support and troubleshooting for hardware and
            software issues. Ensured system uptime and optimized IT
            infrastructure for better performance.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
