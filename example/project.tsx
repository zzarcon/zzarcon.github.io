import * as React from 'react';
import {FC} from 'react';

export interface ProjectProps { 
  logo: string;
  description: string;
  link: string;
  name: string;
}
export const Project: FC<ProjectProps> = ({name, logo, description, link}) => {
  return (
    <div className="project">
      <div className="cover" style={{backgroundImage: `url(${logo})`}}>
        <div className="title">
          <a href="//{{link}}" target="_blank">{name}</a>
        </div>
      </div>
      <div className="project-info">
        {description}
      </div>
      <div className="project-link">
        <a href="//{{link}}" target="_blank">{link}</a>
        <a href="//{{link}}" target="_blank">
          <button>VISIT</button>
        </a>
      </div>
    </div>
  )
}