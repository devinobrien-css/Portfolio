import { backendFrameworks, cloudServices, databases, frontendFrameworks, infrastructure, languages, styles } from '../../../../data/skills';
import { SkillIconSize, StatsSection } from '../../../../data/constants';
import { SkillIcon } from '../../../../components/SkillIcon';

export const RenderSection = ({section}:{section:string}) => {
  switch (section) {
  case StatsSection.BackendFrameworks:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          backendFrameworks.map((framework) => {
            return (
              <SkillIcon key={framework.title+new Date().getTime()} icon={framework.icon} size={SkillIconSize.LG} skill={framework.title}/>
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
              <SkillIcon key={framework.title+new Date().getTime()} icon={framework.icon} size={SkillIconSize.LG} skill={framework.title}/>
            );
          })
        }
      </div>
    );
  case StatsSection.Styling:
    return (
      <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-3">
        {
          styles.map((framework) => {
            return (
              <SkillIcon key={framework.title+new Date().getTime()} icon={framework.icon} size={SkillIconSize.LG} skill={framework.title}/>
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
              <SkillIcon key={language.title+new Date().getTime()} icon={language.icon} size={SkillIconSize.LG} skill={language.title}/>
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
              <SkillIcon key={infra.title+new Date().getTime()} icon={infra.icon} size={SkillIconSize.LG} skill={infra.title}/>
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
              <SkillIcon key={database.title+new Date().getTime()} icon={database.icon} size={SkillIconSize.LG} skill={database.title}/>
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
              <SkillIcon key={cloud.title+new Date().getTime()} icon={cloud.icon} size={SkillIconSize.LG} skill={cloud.title}/>
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