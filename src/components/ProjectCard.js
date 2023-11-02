import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function ProjectCard({ project, theme, buttons }) {
    return (
      <div>
        <img className="w-full" src={project.img} alt={project.title} />
        <div className="p-5">
          <ul>
            <li className="font-extrabold text-2xl">{project.title}</li>
            <li className="text-[#C3C3C3]">{project.type}</li>
            <li>{project.desc}</li>
            <br />
            <li>기간 : {project.duration}</li>
            <li>기술 : {project.skills}</li>
            <li>기여도 : {project.contribution}</li>
          </ul>
        </div>
        <div className="flex space-x-5 p-5">
          {buttons.map((e, i) => {
            const link = e.text === "사이트바로가기" ? project.web : project.github;
            return (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-1 w-auto cursor-pointer ${theme === "dark" ? e.bgDark : e.bgLight} rounded-md`}
              >
                <ul className="flex">
                  <li>
                    <FontAwesomeIcon icon={e.icon} className="pr-1" />
                  </li>
                  <li>
                    <p>{e.text}</p>
                  </li>
                </ul>
              </a>
            );
          })}
        </div>
      </div>
    );
  };

export default ProjectCard