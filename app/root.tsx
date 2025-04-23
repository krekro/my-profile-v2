import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import React from "react";
import type { Route } from "./+types/root";
import "./app.css";
import PageIcon from "./components/page-icon";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState("light");
  return (
    <html className={theme} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="shadow-md border-b-blue-400">
          <PageIcon />
          <nav className="flex flex-wrap py-5 px-5 justify-end-safe font-bold bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
            <div className="p-3 rounded-2xl shrink-0 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black">
              <a href="/">Home</a>
            </div>
            <span className="py-3 px-1 font-normal text-gray-300 dark:text-gray-600">
              |
            </span>
            <div className="p-3 rounded-2xl shrink-0 hover:bg-gray-800 hover:text-white active:bg-gray-800 active:text-white dark:hover:bg-gray-100 dark:hover:text-black">
              <a href="/profile">About Me</a>
            </div>
            <span className="py-3 px-1 font-normal text-gray-300 dark:text-gray-600">
              |
            </span>
            <div className="p-3 rounded-2xl shrink-0 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black">
              <a href="https://expense-tracker-henna-three-39.vercel.app/">
                Side Project
              </a>
            </div>
          </nav>
        </div>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <main className="p-4 md:p-8 container mx-auto">
      <Outlet />
    </main>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
