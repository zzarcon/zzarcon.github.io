import * as React from 'react';
import {FC} from 'react';

export interface RepositoryProps {
  url: string;
  name: string;
  description: string;
  stars: number;
  language: string;
  forks: any;
  pushedAt: any;
  isForked?: boolean;
}
export const Repository: FC<RepositoryProps> = ({name, pushedAt, description, stars, language, forks}) => {
  return (
    <div className="os-repo {{isForked}}">
      <div className="os-header">
        <a href="{{url}}" target="_blank" title="{{name}}">{name}</a>
        <span className="os-pushed-at">
          <i className="fa fa-clock-o"></i> 
          {pushedAt}
        </span>
      </div>
      <div className="os-content">
        <div className="os-description">{description}</div>
        <ul className="os-stats">
          <li>
            <i className="fa fa-star"></i>
            {stars}
          </li>
          <li>
            <i className="fa fa-code"></i>
            {language}
          </li>
          <li>
            <i className="fa fa-code-fork"></i>
            {forks}
          </li>
        </ul>
      </div>
    </div>
  )
}
