import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Apperture Gear Studios - WIP",
    description:
      "Apperture Gear Studios is built on Next JS for their photography business. This platform consolidates all their clients' needs, providing a centralized hub for their event images and videos.",
    image: "/apperture.jpeg",
    // github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://apperture-gear3.vercel.app/",
  },

  {
    name: "Aplus Audios",
    description:
      "Aplus Audios, a leading provider of audio solutions. This website offers customers a convenient platform to access and explore their products available. Built on top of MERN stack, Aplus Audios aims to optimize the customer experience and simplify the process of discovering and purchasing their audio solutions online.",
    image: "/aplus.jpeg",
    // github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://www.aplusaudios.com/aplusfrontend/build/index.html",
  },
  {
    name: "Vagreya.com",
    description:
      "Vagreya is an event booking web application designed specifically for artists. It serves as a bridge connecting clients and artists, facilitating the organization of events. Built on the full MERN stack, this robust platform offers a comprehensive solution for managing and coordinating various aspects of event bookings.",
    image: "/vagreya.jpeg",
    // github: "https://github.com/hqasmei/platoio",
    link: "https://vagreya.com/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col mb-8  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image src={project.image} alt="" width={1000} height={1000} className="rounded-xl shadow-xl hover:opacity-70" />
                    </Link>
                  </div>
                  <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">{project.description}</p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {/* <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> */}
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
