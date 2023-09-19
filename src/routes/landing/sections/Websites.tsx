import { PageSection } from "../../../components/PageSection";
import { Title, TitleSize } from "../../../components/Title";


export const websites = [
  {
    name: 'Neuroexed',
    link: 'https://www.neuroexed.com',
    img: 'bg-neuro',
  },
  {
    name: 'Sympathetic Intelligence',
    link: '',
    img: 'bg-tcsi',
  },
  {
    name: 'Example Portfolio',
    link: 'https://devinobrien-css.github.io',
    img: 'bg-landing',
  },
  {
    name: 'Play ARTi',
    link: 'https://playarti.com',
    img: 'bg-playarti',
  },
  {
    name: 'Richie T Music',
    link: '',
    img: 'bg-richiet',
  },
];

export const WebsitesAd = () => {
  return (
    <PageSection>
      <div className="mt-4 w-full transition-all duration-300 md:my-auto md:w-4/5 lg:w-4/5">
        <Title size={TitleSize.XL}>Deployed Web Applications</Title>

        <div className="mt-8 flex flex-wrap p-2 [&>*]:mx-auto [&>*]:my-3">
          {websites.map((website, index) => {
            return (
              <a
                key={website.name}
                className={`duration-800 block w-min overflow-hidden rounded-lg bg-gray-900 transition-all hover:scale-105`}
                href={website.link}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={`${website.img} h-48 w-96 bg-cover bg-no-repeat`}
                ></div>
                <p className="p-2 font-lato text-3xl font-light text-white">
                  {website.name}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
};
