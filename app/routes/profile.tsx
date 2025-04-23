import React from "react";
import type { Route } from "./+types/home";
import ProfileCard from "../components/profile-card";
import EducationCard from "../components/education-card";
import TechStackCard from "../components/techstack-card";
import TechStack from "../components/tech-stack";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tennyweb" },
    { name: "description", content: "Tennyson Wong's Profile" },
  ];
}

export default function Profile() {
  return (
    <div className="mt-5 mx-auto p-4 grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="w-full lg:col-span-3">
        <ProfileCard />
      </div>
      <div className="w-full lg:col-span-2">
        <EducationCard />
      </div>
      <div className="w-full lg:col-span-5">
        <TechStack />
      </div>
    </div>
  );
}
