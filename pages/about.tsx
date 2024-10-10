import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
import PageTitle from '@/components/PageTitle'
import SocialIcon from '@/components/social-icons'
import animeTop from '@/data/animeTop'
import Liam from 'public/static/images/Liam.jpeg'
import KRool from 'public/static/gifs/krool2.gif'
import Snowboard from 'public/static/gifs/snowboard.gif'
import Anime from 'public/static/gifs/gojo.gif'

const About: React.FC = () => {
  return (
    <>
      <PageSEO
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
      />
      <div className="space-y-2 pb-6 pt-6 md:space-y-5">
        <PageTitle>About</PageTitle>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        {/* Sticky Sidebar */}
        <div className="flex flex-col items-center pb-12 pt-2 xl:sticky xl:top-4 xl:items-start">
          <div>
            <Image src={Liam} width={200} height={250} alt="Liam" className="rounded-lg" />
          </div>
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
            Liam Ali Syversen
            </h3>
          <div className="text-gray-500 dark:text-gray-400">Eastern Michigan University</div>
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
            <SocialIcon kind="github" href={siteMetadata.github} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            <SocialIcon kind="vsco" href={siteMetadata.vsco} />
          </div>
        </div>

        {/* About Me Text */}
        <div className="pb-8 pt-2 text-lg leading-relaxed text-gray-900 dark:text-gray-300 xl:col-span-2">
          Hey, I'm Liam! I grew up in Brighton, Michigan and I'm currently in my second year as a
          computer science student at the Eastern Michigan University.
          <br />
          <br />
          <p className="pb-2">When I'm not studying, you'll probably find me:</p>
          <div className="prose text-gray-900 dark:text-gray-300">
            <ul className="list-disc text-lg">
              <li className="my-0">
                Playing video games 
                <Image
                  src={KRool}
                  alt="loading..."
                  width="70"
                  className="my-0 inline-flex items-center pl-3"
                />
              </li>
              <li className="my-0">
                Planning my next snowboarding trip
                <Image
                  src={Snowboard}
                  alt="Snowboard GIF"
                  width="60"
                  className="my-0 inline-flex items-center pl-3"
                />
              </li>
              <li className="my-0">
                Catching up on anime/manga
                <Image
                  src={Anime}
                  alt="Anime GIF"
                  width="50"
                  className="my-0 inline-flex items-center pl-3"
                />
              </li>
            </ul>
          </div>
          <br />
          Always down to chat, shoot me an email!
          <div className="mb-4 mt-10 text-2xl font-bold">Some Favorites:</div>
          <a
            className="no-underline"
            href="https://myanimelist.net/profile/liamsyvers"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mb-4 text-xl font-normal text-gray-900 hover:font-bold hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500">
              Top Anime
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="ml-1 inline-block h-4 w-4 fill-current"
              >
                <g data-name="Layer 2">
                  <g data-name="external-link">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                    <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                  </g>
                </g>
              </svg>
            </div>
          </a>
          <div className="grid grid-cols-6 gap-x-1">
            {animeTop.map((d, i) => (
              <div key={i} className="relative aspect-[25/36]">
                <a href={d.url} title={d.title} target="_blank" rel="noreferrer" className="">
                  <Image className="my-0 object-cover" src={d.thumbnail} alt={d.title} fill />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default About