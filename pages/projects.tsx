import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import Footer from '@/components/Footer'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        <div className="space-y-2 pb-6 pt-6 md:space-y-5">
          {/* <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1> */}
          <PageTitle>Projects</PageTitle>
        </div>
        <h2 className="pb-4 pt-6 text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9">
          Personal Projects
        </h2>
        <div className="container py-4">
          <div className="-m-4 flex flex-wrap">
            {projectsData
              .filter((project) => project.projectType === 'personal')
              .map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
          </div>
        </div>
        <h2 className="pb-4 pt-6 text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9">
          Open Source
        </h2>
        <div className="container py-4">
          <div className="-m-4 flex flex-wrap">
            {projectsData
              .filter((project) => project.projectType === 'oss')
              .map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
