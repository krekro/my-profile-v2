import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

export default function EducationCard() {
  return (
    <Card className="bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
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
            className="lucide lucide-school-icon lucide-school"
          >
            <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
            <path d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10" />
            <path d="M18 5v17" />
            <path d="m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6" />
            <path d="M6 5v17" />
            <circle cx="12" cy="9" r="2" />
          </svg>
          <span className="text-blue-900">Education</span>
        </CardTitle>
        <CardDescription className="text-blue-300">
          as an engineer
        </CardDescription>
      </CardHeader>
      <CardContent className="font-light text-gray-700 dark:text-gray-300">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            Bachelor of Electronic Engineering
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            University of Exeter | Graduated: Sep 2021
          </p>
          <p>Specialized in embedded systems and signal processing.</p>
          <p>Completed projects in robotic arms.</p>
        </div>
      </CardContent>
    </Card>
  );
}
