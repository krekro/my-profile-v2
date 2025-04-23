import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

export default function ProfileCard() {
  return (
    <Card className=" bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-building-icon lucide-building"
          >
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
            <path d="M9 22v-4h6v4" />
            <path d="M8 6h.01" />
            <path d="M16 6h.01" />
            <path d="M12 6h.01" />
            <path d="M12 10h.01" />
            <path d="M12 14h.01" />
            <path d="M16 10h.01" />
            <path d="M16 14h.01" />
            <path d="M8 10h.01" />
            <path d="M8 14h.01" />
          </svg>
          <span className="text-blue-900">Work Experience</span>
        </CardTitle>
        <CardDescription className="text-blue-300">
          as an IT Professional
        </CardDescription>
      </CardHeader>
      <CardContent className="font-light text-gray-700 dark:text-gray-300">
        <div className="mb-4">
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
        <div className="mt-8">
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
