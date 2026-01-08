import Image from "next/image";
import { skills } from "@/constants/skills";
import { Button } from "../ui/button";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/projects";
import  Contact  from "@/components/layouts/Contact";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center pt-10 sm:pt-20 px-4 sm:px-8 py-8">
      <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-4 sm:gap-8 w-full max-w-6xl" id="home">
        <div className="text-gray-900 dark:text-white flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Hi, i'm Sohail{" "}
          </h1>
          <p className="pt-2 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Full Stack Developer
          </p>
        </div>

        <div className="flex-shrink-0">
          <Image
            src="/onePeice.jpg"
            alt="one Piece Image"
            width={200}
            height={200}
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 object-cover"
          />
        </div>
      </div>

      <div className="text-gray-900 dark:text-white mt-8 sm:mt-12 max-w-2xl w-full px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          I'm a passionate Full Stack Developer with expertise in building
          modern web applications. I love creating intuitive user experiences
          and solving complex problems with clean, efficient code.
        </p>
      </div>

      <div className="text-gray-900 dark:text-white mt-8 sm:mt-12 max-w-2xl w-full px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Education</h2>

        <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black border border-gray-300 dark:border-gray-800 rounded-lg p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-700">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-l-lg"></div>

          <div className="flex flex-col gap-3 mb-3">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
                New Arts, Commerce and Science College, Parner
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                Bachelor of Science in Computer Science
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="inline-block bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-xs sm:text-sm font-medium">
                2023 - 2026
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
              Currently in Third Year
            </span>
          </div>
        </div>

        <div className="text-gray-900 dark:text-white mt-8 sm:mt-12 w-full">
          <h3 className="font-bold text-xl sm:text-2xl mb-4">Skills</h3>
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4"
            >
              <h4 className="text-sm sm:text-lg font-semibold capitalize text-gray-600 dark:text-gray-400 sm:min-w-[100px] pt-2">
                {category}:
              </h4>

              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Button
                    key={skill}
                    variant="outline"
                    className="text-xs sm:text-sm bg-blue-500 dark:bg-white hover:bg-blue-600 dark:hover:bg-gray-100 border-blue-600 dark:border-white text-white dark:text-black"
                  >
                    {skill}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center sm:mt-16 max-w-7xl mx-auto" id="projects">
          <div className="inline-block rounded-lg bg-gray-900 dark:bg-white px-3 py-1 text-sm sm:text-lg text-white dark:text-black font-bold">
            Projects
          </div>
          <h2 className="font-bold text-gray-900 dark:text-white text-3xl tracking-tighter sm:text-5xl text-center mt-2">
            Projects & Experiments
          </h2>
          <p className="text-gray-600 dark:text-gray-400 md:text-xl/relaxed mt-2 text-center">
            A collection of web projects ranging from foundational
            implementations to full-stack applications, showcasing my growth and
            practical problem-solving skills.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <Contact />
      </div>
    </section>
  );
};

export default HeroSection;
