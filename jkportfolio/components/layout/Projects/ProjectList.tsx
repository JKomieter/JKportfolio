"use client";
import React from 'react'
import ProjectListItem from './ProjectListItem';
import { useProjectStorage } from './useProjectStorage';


const ProjectList = () => {
  const [ projectList, setprojectList ] = useProjectStorage();

  return (
    <div className='w-full h-full flex flex-col gap-14 items-center'>
      {
        projectList.map((project) => (
          <ProjectListItem
            key={project.name}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))
      }
    </div>
  )
}


export default ProjectList;