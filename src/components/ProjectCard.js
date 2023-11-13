import React from 'react'
import { useSelector } from 'react-redux';
import localeData  from './../locales/enkr.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectCard({ project, theme, buttons }) {

  const language = useSelector(state => state.language);
  const messages  = localeData[language]

    return (
      <div className='dark:bg-[#5c5c5c] border dark:border-none bg-white'>
        <a href={project.web} target="_blank">
          <img className="w-full" src={project.img} alt={project.title} />  
        </a>
        <div className="p-5">
          <ul>
            <li className="font-extrabold text-2xl">{project.title}</li>
            <li className="text-[#C3C3C3]">{project.type[language]}</li>
            <li>{project.desc[language]}</li>
            <br />
            <li>{messages.project1} : {project.duration}</li>
            <li>{messages.project2} : {project.skills}</li>
            <li>{messages.project3} : {project.contribution}</li>
          </ul>
        </div>
        <div className="flex space-x-5 p-5">
          {
            buttons[language].map((e, i) => {
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
            })
          }
        </div>
      </div>
    );
  };

export default ProjectCard