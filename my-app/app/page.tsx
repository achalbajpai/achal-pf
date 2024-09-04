import { Twitter, Mail, Github, Linkedin, Briefcase, Book, FileText, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-4">
      <div className="max-w-4xl w-full text-center space-y-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
          Website Under Construction
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          The work is on! Please check back soon.
        </p>
        <div className="w-24 h-24 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <Briefcase className="h-12 w-12 mb-4 mx-auto text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">Portfolio Showcase</h3>
              <p className="text-gray-300">Explore my latest projects and achievements</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <Book className="h-12 w-12 mb-4 mx-auto text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-300">Insights and thoughts on development</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <FileText className="h-12 w-12 mb-4 mx-auto text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">Project Showcase</h3>
              <p className="text-gray-300">In-depth analysis of my most impactful work</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <Cpu className="h-12 w-12 mb-4 mx-auto text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">Skills & Expertise</h3>
              <p className="text-gray-300">A comprehensive look at my technical proficiencies</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Let's Connect</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" className="bg-transparent hover:bg-gray-800">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="bg-transparent hover:bg-gray-800">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
            <Button variant="outline" size="icon" className="bg-transparent hover:bg-gray-800">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="outline" size="icon" className="bg-transparent hover:bg-gray-800">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </div>
        <p className="text-sm mt-8">
          For any suggestions, drop a DM at my Twitter account - @axhaltwts
        </p>
      </div>
    </div>
  )
}