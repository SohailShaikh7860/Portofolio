import { Button } from "../ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Project } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

import React from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-600 transition-all duration-500 ease-out overflow-hidden p-0 gap-0 w-full h-full flex flex-col rounded-2xl shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30 hover:-translate-y-1">
      
      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-zinc-900">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <CardHeader className="px-5 sm:px-6 pt-5 pb-1">
        <CardTitle className="text-gray-900 dark:text-white text-lg sm:text-xl font-semibold tracking-tight leading-tight">
          {project.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-5 sm:px-6 pb-4 flex-1 flex flex-col">
        <CardDescription className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed">
          {project.description}
        </CardDescription>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 dark:bg-zinc-800/80 text-gray-600 dark:text-zinc-300 px-2.5 py-0.5 rounded-full text-xs font-medium border border-gray-200/80 dark:border-zinc-700/50 transition-colors duration-300 group-hover:border-gray-300 dark:group-hover:border-zinc-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-5 sm:px-6 pb-5 pt-0 flex gap-2.5 mt-auto">
        {project.projectUrl && (
          <Link
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 w-full text-sm py-5 cursor-pointer rounded-xl font-medium transition-all duration-300 gap-2">
              <ExternalLink size={15} />
              Live Demo
            </Button>
          </Link>
        )}

        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button
              variant="outline"
              className="bg-transparent dark:bg-transparent text-gray-700 dark:text-zinc-300 border-gray-200 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:border-gray-300 dark:hover:border-zinc-600 flex items-center justify-center gap-2 w-full text-sm py-5 cursor-pointer rounded-xl font-medium transition-all duration-300"
            >
              <Github size={15} />
              Source Code
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
