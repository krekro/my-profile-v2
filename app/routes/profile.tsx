import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "app/components/ui/card";

export default function Profile() {
  return (
    <div className="mt-5 p-3 grid grid-cols-3 gap-4">
      <Card className="col-span-2 bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-4">
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
      <Card className="col-span-1 bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-4">
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
    </div>
  );
}
