import { Icon } from "@iconify/react"
import gsap from "gsap";
import { useEffect } from "react";

interface Social {
  label: string;
  icon: string;
  href: string;
}
const socials: Social[] = [
  {
    label: 'GitHub',
    icon: 'line-md:github-twotone',
    href: 'https://www.github.com/devinobrien-css'
  },
  {
    label: 'LinkedIn',
    icon: 'line-md:linkedin',
    href: ''
  },
  {
    label: 'Instagram',
    icon: 'line-md:instagram',
    href: ''
  }
]

const iconStyles = "m-auto text-light-cyan"
interface SocialsAdvertisementProps {

}
export const SocialsAdvertisement = ({ }: SocialsAdvertisementProps) => {

  useEffect(() => {
    gsap.fromTo('#socials',
      {
        translateY: 500
      },
      {
        translateY: 0,
        duration: 1,
      })
  })


  return (
    <div className="fixed bottom-0 left-0">
      <div id="socials" className="flex flex-col gap-y-4 p-2">
        {
          socials.map((social: Social) => {
            return (
              <a className="group flex flex-nowrap relative" href={social.href} key={social.href}>
                <Icon icon={social.icon} className={iconStyles} />
                <h6 className="font-light -top-1 left-full absolute whitespace-nowrap overflow-clip m-auto w-0 group-hover:w-[500%] group-hover:pl-1 transition-width text-light-cyan p-0">{social.label}</h6>
              </a>
            )
          })
        }
        <svg className="mx-auto" width="4" height="140" viewBox="0 0 4 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2C0 0.895426 0.895431 0 2 0V0C3.10457 0 4 0.895431 4 2V138C4 139.105 3.10457 140 2 140V140C0.895431 140 0 139.105 0 138V2Z" fill="#5DC0D6" />
        </svg>
      </div>
    </div>
  )
}
