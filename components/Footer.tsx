import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import NowPlaying from './NowPlaying'
import MobileNav from './MobileNav'

export default function Footer() {
  return (
      <div className="border-t-muted flex flex-col-reverse justify-between gap-3 border-t-[1px] border-black py-3 text-sm dark:border-white md:flex-row">
        Liam Ali Syversen
      </div>
  )
}
