import { Title } from "../../../components/text/Title";
import { TitleSize } from "../../../data/constants";
import { SubTitle } from "../../../components/text/SubTitle";
import { PageTitle } from "../../../components/text/PageTitle";
import { employers } from "../../../data/employers";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Employer } from "../../../types/Employer";
import cx from "classnames";
import { Pill } from "../../../components/Pill";

interface WorkCardProps {
  employer: Employer;
  initialOpen?: boolean;
}
export const WorkCard = ({ employer, initialOpen }: WorkCardProps) => {
  const { name, title, timeline, location, icon, shortName } = employer;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (initialOpen) {
      setIsOpen(true);
    }
  }, [initialOpen]);

  return (
    <div
      className={cx("w-full rounded-lg border p-4", {
        "border-tiffany-blue bg-white dark:bg-slate-800": isOpen,
        "border-paynes-grey bg-gray-100 dark:bg-slate-900": !isOpen,
      })}
    >
      <div className="flex flex-wrap-reverse justify-end sm:justify-between">
        <Title size={TitleSize.MD} className="flex gap-2">
          <img src={icon} alt={name} className="my-auto size-8 rounded-full " />
          {title} @ {name}
        </Title>

        <div className="flex gap-2">
          <SubTitle className="my-auto">{timeline}</SubTitle>

          <button
            aria-label={`Toggle Work Experience for ${name}`}
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-400 transition-all hover:scale-125 dark:text-white"
          >
            {isOpen ? (
              <Icon icon="akar-icons:minus" className="my-auto size-6" />
            ) : (
              <Icon icon="akar-icons:plus" className="my-auto size-6" />
            )}
          </button>
        </div>
      </div>
      <hr
        className={cx("border-tiffany-blue transition-all duration-300 ", {
          "opacity-0": !isOpen,
          "opacity-full my-2": isOpen,
        })}
      />
      <div
        className={cx(
          "flex flex-col gap-4 overflow-y-scroll transition-all duration-300",
          {
            "h-0": !isOpen,
            "h-96 md:h-72": isOpen,
          },
        )}
      >
        <div className="sticky top-0 flex gap-8 bg-white dark:bg-slate-800">
          <div className="flex gap-2">
            <Icon icon="ph:map-pin" className="size-6 dark:text-white" />
            <span className="font-monterrat text-md font-light dark:text-white">
              {location}
            </span>
          </div>
          <div className="flex gap-2">
            <Icon icon="ph:link" className="size-6 dark:text-white" />
            <a
              href={employer.name}
              target="_blank"
              rel="noreferrer noopener"
              className="text-md font-lato font-light underline dark:text-white"
            >
              {shortName}
            </a>
          </div>
        </div>

        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-2">
            {employer.bulletPoints?.map((point) => (
              <p
                key={point}
                className="text-md flex gap-2 font-montserrat text-paynes-grey dark:text-moonstone"
              >
                <span className="-mt-1 text-2xl">•</span>{" "}
                <span className="my-auto">{point}</span>
              </p>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {employer.skills?.map((skill) => (
              <Pill key={skill.name}>{skill.name}</Pill>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkExperience = (): JSX.Element => {
  return (
    <div className="my-16 min-h-screen md:my-0">
      <div className="mt-4 w-full transition-all duration-300 md:my-auto">
        <Title
          size={TitleSize.LG}
          className="!font-bebas !text-5xl md:!text-6xl"
        >
          Where I've Worked
        </Title>
        <PageTitle title="Past Employers" />
        <br />
        <br />
        <div className="flex flex-col gap-4">
          {employers.map((employer, index) => {
            return (
              <WorkCard
                key={employer.name}
                employer={employer}
                initialOpen={index === 0}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
