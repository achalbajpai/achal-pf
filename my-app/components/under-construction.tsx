'use client'

import { Twitter, Mail, GitHub, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function UnderConstruction() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col justify-center items-center p-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
          Website Under Construction
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          The work is on! Please check back soon.
        </p>
        <div className="w-24 h-24 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Coming Soon</h2>
          <ul className="text-lg space-y-2">
            <li>Portfolio Showcase</li>
            <li>Blog Articles</li>
            <li>Project Case Studies</li>
            <li>Skills & Expertise</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Let's Connect</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
            <Button variant="outline" size="icon">
              <GitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="outline" size="icon">
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