import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useEffect } from "react";
import { Social, socials } from "../data/socials";

/**
 * SocialsAdvertisement component
 * @returns {JSX.Element} The SocialsAdvertisement component
 */
export const SocialsAdvertisement = (): JSX.Element => {
  useEffect(() => {
    gsap.fromTo(
      "#socials",
      {
        translateY: 500,
      },
      {
        translateY: 0,
        duration: 1,
      },
    );
  });

  return (
    <div className="fixed bottom-0 left-0 p-1 md:scale-150">
      <div id="socials" className="flex flex-col gap-y-4 p-2">
        {socials.map((social: Social) => {
          return (
            <a
              aria-label={`Link to ${social.label}`}
              className="group relative flex flex-nowrap rounded p-1 transition-all hover:scale-110 hover:bg-moonstone/80"
              href={social.href}
              key={social.href}
              target="_blank"
            >
              <Icon
                icon={social.icon}
                className={"m-auto text-gray-700 dark:text-light-cyan"}
              />
            </a>
          );
        })}
        <svg
          className="mx-auto"
          width="4"
          height="140"
          viewBox="0 0 4 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2C0 0.895426 0.895431 0 2 0V0C3.10457 0 4 0.895431 4 2V138C4 139.105 3.10457 140 2 140V140C0.895431 140 0 139.105 0 138V2Z"
            fill="#5DC0D6"
          />
        </svg>
      </div>
    </div>
  );
};
