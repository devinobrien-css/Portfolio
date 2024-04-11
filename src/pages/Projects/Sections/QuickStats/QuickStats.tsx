import { Bar, Pie } from "react-chartjs-2";
import { PageSection } from "../../../../components/text/PageSection";
import { PageTitle } from "../../../../components/text/PageTitle";
import { ChartEvent } from "chart.js";
import { useState } from "react";
import { SubTitle } from "../../../../components/text/SubTitle";
import {
  backendFrameworks,
  cloudServices,
  databases,
  frontendFrameworks,
  infrastructure,
  languages,
  styles,
} from "../../../../data/skills";
import { RenderSection } from "./RenderSection";
import { StatsSection } from "../../../../data/constants";

const data = {
  labels: [
    "Backend Frameworks",
    "Frontend Frameworks",
    "Design/Styling",
    "Languages",
    "Databases",
    "Infrastructure",
    "Cloud Services",
  ],
  datasets: [
    {
      label: "# of Skills",
      backgroundColor: [
        "#C6E9EB",
        "#9AD4D6",
        "#78A6AE",
        "#78A6BE",
        "#557786",
        "#557796",
        "#55A690",
      ],
      hoverBackgroundColor: "#F2FDFF",
      hoverBorderColor: [
        "#C6E9EB",
        "#9AD4D6",
        "#78A6AE",
        "#78A6BE",
        "#557786",
        "#557796",
        "#55A690",
      ],
      borderColor: "transparent",
      borderWidth: 2,
      data: [
        backendFrameworks.length,
        frontendFrameworks.length,
        styles.length,
        languages.length,
        databases.length,
        infrastructure.length,
        cloudServices.length,
      ],
    },
  ],
};

export const QuickStats = () => {
  const [section, setSection] = useState<string>(
    StatsSection.BackendFrameworks,
  );
  const [chartType, setChartType] = useState<string>("bar");

  const options = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick: (_event: ChartEvent, elements: any[]) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        setSection(data?.labels?.[index]);
      }
    },
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          font: {
            family: "Lato",
            size: 11,
            weight: "normal" as const,
          },
        },
      },
    },
  };

  return (
    // <SideBarAnimation
    //   threshold={10}
    //   content={
    //     <div className='mt-12 hidden md:block'>
    //       <img src='https://access-portfolio-images.s3.amazonaws.com/Research+paper-amico.svg' alt='project' className='-mr-16 w-full object-cover'/>
    //       <br/>
    //     </div>
    //   }
    // >
    <PageSection className="w-full">
      <div className="my-auto w-full md:mx-auto">
        <PageTitle title="Quick Stats" />
        <div className="flex justify-between">
          <SubTitle className="hidden md:block">
            Click on a section to see more details
          </SubTitle>
          <button
            onClick={() => setChartType(chartType === "bar" ? "pie" : "bar")}
            className="z-[999] my-auto hidden font-montserrat text-tiffany-blue underline transition-all hover:scale-110 md:block"
          >
            switch to {chartType === "bar" ? "pie" : "bar"}
          </button>
        </div>

        <div className="mx-auto block max-w-[350px] cursor-pointer md:hidden md:w-3/5">
          <Pie data={data} options={options} />
        </div>
        <div className="lg:flex">
          <div className="hidden w-full flex-col font-lato md:flex lg:w-2/3">
            {chartType === "bar" ? (
              <Bar
                className=" size-full cursor-pointer"
                data={data}
                options={options}
              />
            ) : (
              <Pie
                className="mx-auto mt-4 size-full max-w-[350px] cursor-pointer"
                data={data}
                options={options}
              />
            )}
          </div>

          <div className="lg:w-1/3 lg:p-4">
            <h2 className="font-bebas text-3xl dark:text-white md:pb-4 md:text-4xl">
              {section}
            </h2>
            <RenderSection section={section} />
          </div>
        </div>
      </div>
    </PageSection>
    // </SideBarAnimation>
  );
};
