import React, { useEffect, useState } from 'react';
import Card from './Card';
import Work from './Work';
import SeeMore from './SeeMore';
import data from '../../assets/data/experience.json';

import { classes } from '../../utils/classes';
import { CARD_TITLE } from '../../utils/classConstants';

function ExpandAllButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-white text-center hover:underline"
    >
      Expand All
    </button>
  );
}

function CollapseAllButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-white text-center hover:underline"
    >
      Collapse All
    </button>
  );
}

function WorkCard() {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const handleDropdownToggle = (id) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSetAllClosed = () => {
    const closed = {};
    data.work_experiences.forEach((work) => {
      closed[work.id] = false;
    });
    setOpenDropdowns(closed);
  };

  const handleSetAllOpen = () => {
    const open = {};
    data.work_experiences.forEach((work) => {
      open[work.id] = true;
    });
    setOpenDropdowns(open);
  };

  const anyIsOpen = Object.values(openDropdowns).some((isOpen) => isOpen);
  const allAreOpen = Object.values(openDropdowns).every((isOpen) => isOpen);

  useEffect(() => {
    const initialOpen = {};
    data.work_experiences.forEach((work) => {
      initialOpen[work.id] = false;
    });
    setOpenDropdowns(initialOpen);
  }, []);

  return (
    <Card>
      <div className="flex flex-col">
        <h1 className={classes(CARD_TITLE)}>Professional Experience</h1>
      </div>
      <div className="flex justify-end gap-x-5">
        {!allAreOpen && <ExpandAllButton onClick={handleSetAllOpen} />}
        {anyIsOpen && <CollapseAllButton onClick={handleSetAllClosed} />}
      </div>
      <div className="flex flex-col gap-y-5">
        {data.work_experiences
          .slice(0)
          .reverse()
          .map((workData) => (
            <Work
              key={workData.id}
              data={workData}
              dropdownIsOpen={!!openDropdowns[workData.id]}
              handleDropdownToggle={() => handleDropdownToggle(workData.id)}
              setDropdownIsOpen={(isOpen) =>
                setOpenDropdowns((prev) => ({
                  ...prev,
                  [workData.id]: isOpen
                }))
              }
            />
          ))}
      </div>
      <div className="flex justify-end gap-x-5">
        {!allAreOpen && <ExpandAllButton onClick={handleSetAllOpen} />}
        {anyIsOpen && <CollapseAllButton onClick={handleSetAllClosed} />}
      </div>
      <SeeMore href="https://www.linkedin.com/in/jibrana/" />
    </Card>
  );
}

export default WorkCard;
