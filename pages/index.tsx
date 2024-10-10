import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import { TypedHeading } from '@/components/TypedHeading'
import Snowboard from 'public/static/gifs/snowboard2.gif' 

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className="pb-18 xl:mt-20">
        <div className="xl:flex">
          <div className="pb-6 pt-6 md:space-y-5 xl:w-1/2 xl:space-y-2">
            <TypedHeading />
            <p className="prose pb-8 pt-4 text-lg leading-relaxed dark:prose-dark">
              I'm currently a second-year computer science student at the Eastern Michigan University.
              <br />
              <br />
              I appreciate you dropping by!
            </p>
          </div>
          <div className="pb-10 xl:w-1/2">
            <div className="flex justify-center ">
              <Image className="rounded-lg" src={Snowboard} width={400} height={600} alt="Snowboarder" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
