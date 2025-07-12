import React from 'react';
import Card from './Card';
import Project from './Project';
import SeeMore from './SeeMore';

import data from '../../assets/data/projectData.json';

function ProjectCard() {
  return (
    <Card fit>
      <div className="flex flex-col">
        <h1 className="text-center text-white text-2xl lg:text-4xl">
          Projects
        </h1>
      </div>
      <div className="flex flex-col gap-y-10">
        {data.map((projectData) => (
          <Project key={projectData.projectName} data={projectData} />
        ))}
      </div>
      <SeeMore href="https://github.com/itsjayway?tab=repositories" />
    </Card>
  );
}
export default ProjectCard;
