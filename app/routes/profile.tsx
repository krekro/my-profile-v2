import React from "react";
import ProfileCard from "../components/profile-card";
import EducationCard from "../components/education-card";

export default function Profile() {
  return (
    <div className="mt-5 mx-auto p-4 grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="w-full lg:col-span-3">
        <ProfileCard />
      </div>
      <div className="w-full lg:col-span-2">
        <EducationCard />
      </div>
    </div>
  );
}
