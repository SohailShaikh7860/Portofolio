import Image from "next/image"
import { skills } from "@/constants/skills"
import { Button } from "../ui/button"
const HeroSection = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center pt-20 p-8'>
        <div className='flex justify-center items-center gap-8'>
            <div className='text-white flex flex-col items-start'>
                 <h1 className='sm:text-7xl text-2xl font-bold'>Hi, i'm Sohail </h1>
                 <p className='pt-2'>Full Stack Developer</p>
            </div>

            <div className="flex-shrink-0">
                <Image 
                  src="/onePeice.jpg" 
                  alt="one Piece Image" 
                  width={200} 
                  height={200} 
                  className="rounded-full"
                />
            </div>
        </div>

        <div className="text-white mt-12 max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              I love creating intuitive user experiences and solving complex problems with clean, efficient code.
            </p>
        </div>

        <div className="text-white mt-12 max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            
            <div className="relative bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-lg p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-700">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-l-lg"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">New Arts, Commerce and Science College, Parner</h3>
                  <p className="text-gray-400 text-sm">Bachelor of Science in Computer Science</p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-sm font-medium">
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

            <div className="text-white mt-12 max-w-2xl w-full">
              <h3 className="font-bold text-2xl mb-4">Skills</h3>
              {Object.entries(skills).map(([category, skillList])=>(
                <div key={category} className="mb-6 flex items-start  sm:gap-4">
                  <h4 className="text-sm sm:text-lg font-semibold capitalize text-gray-400 min-w-25 pt-2">{category}:</h4>

                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Button key={skill} variant="outline" className="text-sm bg-blue-500 hover:bg-blue-600 border-blue-600">
                        {skill}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </div>

    </section>
  )
}

export default HeroSection
