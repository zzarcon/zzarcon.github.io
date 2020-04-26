import * as React from 'react';
import {FC} from 'react';

export interface ArticleProps {
  link: string;
  coverImg: string;
  title: string;
  introduction: string;
}

export const Article: FC<ArticleProps> = ({link, coverImg, title, introduction}) => {
  return (
    <div className="article">
      <a href={link} target="_blank">
        <div style={{backgroundImage: `url(${coverImg}`}} className="article-img"></div>
      </a>
      <a href={link} target="_blank" className="article-title">{title}</a>
      <div className="article-intro">
        {introduction}...
        <a href={link} target="_blank" className="article-read-more">[read more]</a>
      </div>
    </div>
  )
}