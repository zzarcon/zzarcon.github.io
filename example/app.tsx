import * as React from 'react';
import {GHCorner} from 'react-gh-corner';
import {AppWrapper, GlobalStyles} from './styled';
import {articlesData} from './data/articles'
import {companiesData} from './data/companies'
import {Article} from './article'
import {Company} from './company';

const repoUrl = 'https://github.com/zzarcon/zzarcon.github.io';

const App = () => {
  const renderArticles = () => {
    const articles = articlesData.map(({coverImg, introduction, link, title}, key) => (
      <Article key={key} coverImg={coverImg} introduction={introduction} link={link} title={title} />
    ));

    return (
      <div id="articles" className="box">
        <i className="fa fa-times-circle close-box"></i>
        <div className="box-title">
          Articles
        </div>
        <div className="box-content">
          {articles}
        </div>
      </div>
    )
  }

  const renderCompanies = () => {
    const companies = companiesData.map(company => (
      <Company {...company} />
    ))

    return (
      <div id="companies" className="box">
        <i className="fa fa-times-circle close-box"></i>
        <div className="box-title">
          Experience
        </div>
        <div className="box-content">
          {companies}
        </div>
      </div>
    )
  }

  return (
    <AppWrapper>
      <GlobalStyles />
      <GHCorner openInNewTab href={repoUrl} />
      <div id="scroll-wrapper">
        <ul id="menu">
          <li className="menu-item active" data-link="bio">Bio</li>
          <li className="menu-item" data-link="open-source">Open source</li>
          <li className="menu-item" data-link="companies">Experience</li>
          <li className="menu-item" data-link="articles">Articles</li>
          <li className="menu-item" data-link="projects">Projects</li>
        </ul>
        <div id="bio" className="box content">
          <div className="avatar">
            <img className="avatar-carton" src="static/images/avatar.jpeg" alt="Avatar" />
            <img className="avatar-me" src="static/images/me.jpg" alt="me" />
          </div>
          <h1>Hector Leon Zarco Garcia</h1>
          <div className="bio">
            28 👱from Spain🇪🇸🐣 living in 🇦🇺 Javascript ☕ 🍕 Node.js 💥💥 HTML 👽 ⚡⚡⚡ CSS ⚡⚡⚡ Performance 💣💣💣 Open source 😍😈😍 Travel Skateboarding
          </div>
          <div className="links">
            <a href="https://github.com/zzarcon" target="_blank"><i className="fa fa-fw fa-github fa-3x"></i></a>
            <a href="https://twitter.com/zzarcon" target="_blank"><i className="fa fa-fw fa-twitter fa-3x"></i></a>
            <a href="https://medium.com/@devlucky/" target="_blank"><i className="fa fa-fw fa-medium fa-3x"></i></a>
            <a href="https://www.linkedin.com/in/héctor-zarco-garcía-a991a537" target="_blank"><i className="fa fa-fw fa-linkedin-square fa-3x"></i></a>
          </div>
        </div>
        <div id="open-source" className="box">
          <i className="fa fa-times-circle close-box"></i>
          <div className="box-title">
            Open source
            <span id="open-source-stats"></span>
          </div>
          <div className="box-content">
            Loading repositories...
          </div>
          <div className="show-more">
            <i className="fa fa-arrow-down"></i>
            Show more
            <i className="fa fa-arrow-down"></i>
          </div>
        </div>
        {renderCompanies()}
        {renderArticles()}
        <div id="projects" className="box">
          <i className="fa fa-times-circle close-box"></i>
          <div className="box-title">
            Projects
          </div>
          <div className="box-content">
            Loading side projects...
          </div>
        </div> 
        <footer>
          Made with <i className="fa fa-heart"></i> by <a href="https://twitter.com/zzarcon" target="_blank">@zzarcon</a>
          🍣🍔🍳🍗🌽🍟🍜🍕🍞🍫🍪🍣🍔🍳🌽🍟🍜🍫🍳🍗🌽🍟🍜🍪🍣🍔🍳🌽🍟🍜🌽🍟🍜🍕🍞🍫🍪🍣🍔🍳🌽
        </footer>
      </div>
    </AppWrapper>
  )
}

export default App