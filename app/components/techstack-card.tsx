import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

export default function TechStack() {
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
      <CardContent className="grid grid-cols-2 gap-10 font-light text-gray-700 dark:text-gray-300">
        <div>
          <h3 className="text-lg font-semibold">Programming Languages</h3>
          <div className="mt-5 w-full grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              <span>JavaScript</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
              <span>Python</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span>C</span>
            </div>
          </div>
        </div>
        {/*seperate div*/}
        <div>
          <h3 className="text-lg font-semibold">Front-end Tech Stack</h3>
          <div className="mt-5 w-full grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex flex-row items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span>ReactJs</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>React Router 7</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span>Vite</span>
            </div>
            <div className="flex items-center flex-row gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              <span>shadcn/ui</span>
            </div>
          </div>
        </div>
        {/*seperate div for readability*/}
        <div>
          <h3 className="text-lg font-semibold">Backend Tech Stack</h3>
          <div className="mt-5 w-full grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span>ExpressJs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              <span>NodeJs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-500"></span>
              <span>Django</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-600"></span>
              <span>Flask</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
