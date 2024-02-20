import { Icon } from '@iconify/react';
import { backendFrameworks, cloudServices, databases, frontendFrameworks, infrastructure, languages, styles } from '../../data/skills';
import { StatsSection } from '../../data/constants';

export const RenderSection = ({section}:{section:string}) => {
  switch (section) {
  case StatsSection.BackendFrameworks:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          backendFrameworks.map((framework) => {
            return (
              <Icon width={8} height={8} key={framework.title+new Date().getTime()} icon={framework.icon} className="size-16 rounded bg-white p-1 shadow dark:bg-azure-blue"/>
            );
          })
        }
      </div>
    );
  case StatsSection.FrontendFrameworks:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          frontendFrameworks.map((framework) => {
            return (
              <Icon width={8} height={8} key={framework.title+new Date().getTime()} icon={framework.icon} className="size-16 rounded bg-white p-1 shadow dark:bg-azure-blue"/>
            );
          })
        }
      </div>
    );
  case StatsSection.Styling:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          styles.map((style) => {
            return (
              <Icon width={8} height={8} key={style.title+new Date().getTime()} icon={style.icon} className="size-16 rounded bg-white p-1 shadow dark:bg-azure-blue"/>
            );
          })
        }
      </div>
    );
  case StatsSection.Languages:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          languages.map((language) => {
            return (
              <Icon width={8} height={8} key={language.title+new Date().getTime()} icon={language.icon} className="size-16 rounded bg-white p-1 shadow dark:bg-azure-blue"/>
            );
          })
        }
      </div>
    );
  case StatsSection.Infrastructure:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          infrastructure.map((infra) => {
            return (
              <Icon width={8} height={8} key={infra.title+new Date().getTime()} icon={infra.icon} className="size-16 rounded bg-white p-1 shadow dark:bg-azure-blue"/>
            );
          })
        }
      </div>
    );  
  case StatsSection.Databases:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          databases.map((database) => {
            return (
              <Icon width={8} height={8} key={database.title+new Date().getTime()} icon={database.icon} className="size-16 rounded bg-white p-1 shadow dark:bg-azure-blue"/>
            );
          })
        }
      </div>
    );
  case StatsSection.CloudServices:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          cloudServices.map((cloud) => {
            return (
              <Icon width={8} height={8} key={cloud.title+new Date().getTime()} icon={cloud.icon} className="size-16 rounded bg-white p-1 shadow dark:bg-azure-blue"/>
            );
          })
        }
      </div>
    );
  default:
    return (
      <div>
        <h2>Click on a Column</h2>
      </div>
    );
  }
};