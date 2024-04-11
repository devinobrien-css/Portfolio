import { TypewriterText } from '../../../components/animations/TypewriterText';
import { PageSection } from '../../../components/text/PageSection';
import { Title } from '../../../components/text/Title';
import { TitleSize } from '../../../data/constants';

export const Introduction = () => {
  return (
    <PageSection className="mx-auto flex flex-col gap-y-6 md:min-w-[65vw]">
      <div>
        <TypewriterText
          text="Hello there, my name is"
          className="pl-1 font-code text-xl text-gray-500"
        />
        <Title
          size={TitleSize.XL}
          className="mt-2 text-gray-900 dark:text-light-cyan"
        >
          Devin O'Brien
        </Title>
      </div>

      <div>
        <Title size={TitleSize.LG}>Full Stack Software Engineer</Title>
        <Title size={TitleSize.LG} className="md:hidden">
          -
        </Title>
        <Title size={TitleSize.LG}>Computer Science Master's Student</Title>
      </div>

      <a
        href="mailto:devinobrien@icloud.com"
        className="block rounded bg-tiffany-blue py-4 text-center font-montserrat text-lg text-charcoal ring-blue-300 transition-colors hover:bg-moonstone/90 active:ring-2 md:w-1/2"
      >
        get in touch
      </a>
    </PageSection>
  );
};
