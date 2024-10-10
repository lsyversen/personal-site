import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
// import { InferGetStaticPropsType } from 'next'
import PageTitle from '@/components/PageTitle'
import SocialIcon from '@/components/social-icons'
import Footer from '@/components/Footer'

export default function Resume() {
  return (
    <>
      <PageSEO
        title={`Resume - ${siteMetadata.author}`}
        description={`Resume - ${siteMetadata.author}`}
      />
      <div className="space-y-2 pb-6 pt-6 md:space-y-5">
        <PageTitle>Resume</PageTitle>
      </div>

      {/* Resume Text */}
      <div className="prose pb-20 pt-2 text-lg leading-relaxed dark:prose-dark">
        For more information, please reference my{' '}
        <a
          href=" "
          className="inline-flex items-center font-medium text-blue-500 hover:font-semibold dark:text-blue-500"
          target="_blank"
          rel="noreferrer"
        >
          resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ width: '1.5rem', height: '1rem', fill: 'currentColor' }}
          >
            <g data-name="Layer 2">
              <g data-name="external-link">
                <rect width="24" height="24" opacity="0"></rect>
                <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path>
                <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path>
              </g>
            </g>
          </svg>
        </a>
        <h2>Experience</h2>
        Evenica Corp, Junior Application Developer, Jan 2024 - Present
        <ul className="list-disc space-y-1">
          <li>
          Junior Application Developer
          </li>
        </ul>
        <h2>Education</h2>
        Eastern Michigan University, B.A. Computer Science, expected May 2026
        <ul className="list-disc space-y-1">
          <li>
            <span className="font-bold">Coursework: </span> Linux/UNIX I: Fundamentals, Advanced Java Concepts, Java Spring Framework, Web Programming Using PHP and MySQL
          </li>
        </ul>
        <h2>Skills</h2>
        <ul className="list-disc space-y-1">
          <li>
            <span className="font-bold">Languages: </span>Python, Java, Javascript, TypeScript, PHP
            HTML, CSS
          </li>
          <li>
            <span className="font-bold">Frameworks / Technologies: </span> Docker, React, Azure Data Studio, Tailwind CSS,
            Next.js, Git
          </li>
        </ul>
      </div>
    </>
  )
}
