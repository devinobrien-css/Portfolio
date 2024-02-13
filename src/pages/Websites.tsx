import { PageSection } from '../components/PageSection';
import { PageTitle } from '../components/PageTitle';
import { websites } from '../data/websites';

export const WebsitesAd = () => {
  return (
    <PageSection className="p-10 md:p-6">
      <div className="mt-4 w-full transition-all duration-300 md:my-auto">
        <PageTitle title="Deployed Apps" />
        <div className="mt-8 flex flex-wrap p-2 [&>*]:mx-auto [&>*]:my-3">
          {websites.map((website) => {
            return (
              <a
                key={website.name}
                className={'duration-800 block w-full overflow-hidden rounded-lg bg-gray-900 transition-all hover:scale-105 md:w-[48%]'}
                href={website.link}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={`${website.img} h-48  bg-cover bg-center bg-no-repeat`}
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
