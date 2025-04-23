"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Cpu,
  Wrench,
  Workflow,
  Layers,
  GitBranch,
} from "lucide-react";

interface TechItem {
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("all");

  const techItems: TechItem[] = [
    {
      name: "React",
      description: "JavaScript library for building user interfaces",
      icon: <Code2 className="h-5 w-5" />,
      category: "frontend",
    },
    {
      name: "React Router",
      description: "URL router for React.js",
      icon: <Layout className="h-5 w-5" />,
      category: "frontend",
    },
    {
      name: "TypeScript",
      description: "Typed superset of JavaScript",
      icon: <Code2 className="h-5 w-5" />,
      category: "languages",
    },
    {
      name: "JavaScript",
      description: "Programming language of the web",
      icon: <Code2 className="h-5 w-5" />,
      category: "languages",
    },
    {
      name: "C",
      description: "General-purpose programming language",
      icon: <Code2 className="h-5 w-5" />,
      category: "languages",
    },
    {
      name: "Python",
      description: "High-level programming language",
      icon: <Code2 className="h-5 w-5" />,
      category: "languages",
    },
    {
      name: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 engine",
      icon: <Server className="h-5 w-5" />,
      category: "backend",
    },
    {
      name: "PostgreSQL",
      description: "Open source relational database",
      icon: <Database className="h-5 w-5" />,
      category: "database",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      icon: <Layers className="h-5 w-5" />,
      category: "frontend",
    },
    {
      name: "Docker",
      description:
        "Platform for developing, shipping, and running applications",
      icon: <Cpu className="h-5 w-5" />,
      category: "devops",
    },
    {
      name: "Git",
      description: "Distributed version control system",
      icon: <GitBranch className="h-5 w-5" />,
      category: "devops",
    },
    {
      name: "REST API",
      description: "Architectural style for API design",
      icon: <Globe className="h-5 w-5" />,
      category: "backend",
    },
    {
      name: "Express.js",
      description: "JavaScript framework for building APIs",
      icon: <Wrench className="h-5 w-5" />,
      category: "backend",
    },
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "devops", name: "DevOps" },
    { id: "languages", name: "Languages" },
    { id: "testing", name: "Testing" },
  ];

  const filteredTech =
    activeTab === "all"
      ? techItems
      : techItems.filter((item) => item.category === activeTab);

  return (
    <Card className="w-full max-w-4xl mx-auto text-gray-700 dark:text-white bg-gray-50 dark:bg-gray-950 hover:shadow-lg transition-shadow ">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold tracking-tight">
          My Tech Stack
        </CardTitle>
        <CardDescription>Technologies and tools I work with</CardDescription>
      </CardHeader>
      <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
        <div className="px-6">
          <TabsList className="bg-gray-200 grid grid-cols-3 md:grid-cols-7 gap-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-xs md:text-sm"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <TabsContent value={activeTab} className="mt-0">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTech.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-md bg-gray-200 dark:bg-gray-800">
                      {tech.icon}
                    </div>
                    <h3 className="font-medium">{tech.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {tech.description}
                  </p>
                  <div className="mt-auto pt-3">
                    <Badge
                      variant="outline"
                      className="bg-gray-900 text-white text-xs capitalize"
                    >
                      {tech.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
