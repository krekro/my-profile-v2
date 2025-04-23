import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import TechStack from "./tech-stack";

export default function TechStackCard() {
  return (
    <Card className=" bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-2xl items-center flex flex-row gap-4">
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
          <span className="text-blue-900">My Tech Stack</span>
        </CardTitle>
        <CardDescription className="text-blue-300">
          Tech used in my previous projects
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TechStack />
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1">
          I am always eager to learn new technologies and improve my skills.
        </p>
      </CardContent>
    </Card>
  );
}
