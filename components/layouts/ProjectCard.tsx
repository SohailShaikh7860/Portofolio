import { Button } from "../ui/button";
import { Card, CardTitle, CardDescription, CardAction, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Project } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

import React from 'react'

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="bg-black border border-gray-700 hover:border-gray-500 transition-all duration-300 overflow-hidden p-0 gap-0 w-full h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden bg-gray-800">
        <Image 
          src={project.imageUrl} 
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="px-6 pt-4 pb-2">
        <CardTitle className="text-white text-xl sm:text-2xl text-left font-bold">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-3">
        <CardDescription className="text-gray-400 text-sm sm:text-base text-left leading-snug line-clamp-3">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs sm:text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-4 pt-0 flex gap-3">
          <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className="bg-white text-black hover:bg-gray-100 w-full text-sm sm:text-base py-4">Website</Button>
          </Link>

          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="bg-gray-800 text-white hover:bg-gray-700 flex items-center justify-center gap-2 w-full text-sm sm:text-base py-4">
                <Github size={18} /> 
                GitHub
              </Button>
            </Link>
          )}
      </CardFooter>
    </Card>
  )
}

export default ProjectCard

