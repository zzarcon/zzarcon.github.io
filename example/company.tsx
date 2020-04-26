import * as React from 'react';
import {FC} from 'react';

export interface CompanyProps {
  logo: string;
  site: string;
  duties: string;
  stack: string;
}

export const Company: FC<CompanyProps> = ({logo, site, duties, stack}) => {
  return (
    <div className="company">
      <a href="{{site}}" target="_blank">
        <div style={{backgroundImage: `url(${logo})`}} className="company-logo"></div>
      </a>
      <a href={site} target="_blank" className="company-name">{name}</a>
      <div className="company-duties">
        {duties}
      </div>
      <div className="company-stack">
        {stack}
      </div>
    </div>
  )
}