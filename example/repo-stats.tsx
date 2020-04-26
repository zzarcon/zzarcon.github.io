import * as React from 'react';
import {FC} from 'react';

export interface RepoStatsProps {
  repoCount: number;
  stars: number;
  forks: number
}

export const RepoStats: FC<RepoStatsProps> = ({repoCount, stars, forks}) => {
  return (
    <ul>
      <li>
        <i className="fa fa-list"></i> {repoCount}
      </li>
      <li>
        <i className="fa fa-star"></i> {stars}
      </li>
      <li>
        <i className="fa fa-code-fork"></i> {forks}
      </li>
    </ul>
  )
}
