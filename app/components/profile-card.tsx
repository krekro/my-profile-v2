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
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">
            Application Support Engineer
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            AXA Hong Kong | Jun 2022 - Present
          </p>
          <p className="mt-4">Experienced in </p>
          <p>- Solution Delivery/ Technical Coordination </p>
          <p>- Application Support </p>
          <p>- Resolve Major System Outage</p>
          <p className="mt-4">
            Provided support, troubleshooting and resolved bugs/ issues for
            backend components of a business workflow system. Ensured system
            uptime and optimized IT BAU operations processes by automating
            standard operating procedures.
          </p>
          <p>
            Participated in solution delivery of a new SMS templating
            Application for Life and EB business
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">Trainee</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            ITCS Group | Jan 2022 - Jun 2022
          </p>
          <p className="mt-4">
            Learned the basics of cloud computing and IT operations in a
            corporate environment.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
