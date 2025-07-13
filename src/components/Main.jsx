import NameCard from './cards/NameCard';
import ProjectCard from './cards/ProjectCard';
import WorkCard from './cards/WorkCard';
import Links from './cards/Links';
import { CARD_TITLE, REDUCED_MOTION_PREFERRED } from '../utils/classConstants';
import { classes } from '../utils/classes';

function Main() {
  return (
    <>
      {REDUCED_MOTION_PREFERRED && (
        <div className="flex justify-center items-center bg-orange-400 p-4">
          <p className={(classes(CARD_TITLE), 'text-center text-black')}>
            Welcome! I've detected
            <span className="font-cascadia">
              {' '}
              prefers-reduced-motion: reduce{' '}
            </span>
            and disabled animations.
          </p>
        </div>
      )}
      <div className="flex w-[100vw] min-h-[100vh] overflow-x-hidden bg-gradient-to-t from-primary-dark to-accent-dark justify-center items-center">
        <div className="flex flex-col lg:flex-row lg:items-start gap-y-10 lg:gap-x-10 p-5 lg:p-10">
          <div className="flex flex-col min-h-[90vh] items-center gap-y-10 lg:w-[50%]">
            <NameCard />
            <WorkCard />
          </div>
          <div className="flex flex-col min-h-[90vh] items-center lg:items-end gap-y-10 lg:w-[50%]">
            <ProjectCard />
            <Links />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
