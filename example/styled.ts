import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Verdana;
    overflow: auto;
  }

  a {
    color: black;
  }

  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  html {
    background: linear-gradient(rgba(0, 116, 217, .75), rgba(222, 68, 21, .85)), url("bg.jpg") center/cover;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  * {
    box-sizing: content-box;
  }

  /* APP */

  .box{
  border-radius: 3px;
  text-align: center;
  background: rgba(255, 255, 255, .75);
  box-shadow: .5em .5em .5em rgba(0, 0, 0, .4);
  width: 1000px;
  margin: 20px auto;
  position: relative;
  padding: 15px;
  
  .close-box{
    float: right;
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
  }
  .box-title{
    padding: 10px;
    font-size: 15px;
    border-bottom: 1px solid #aaa;
    margin-bottom: 7px;
    display: flex;
    justify-content: space-between;
  }
}

.content{
  margin-top: 200px;
  padding: 30px 10px 10px 10px;
  
  .avatar{
    &:hover{
      img{
        transform: rotateY(180deg);
      }
      .avatar-carton{
        opacity: 0;
      }
      .avatar-me{
        opacity: 1;
      }
    }
  }

  img{
    height: 220px;
    width: 220px;
    padding: .5em;
    border-radius: 50%;
    background: rgba(white, .4);
    box-shadow: .5em .5em .5em rgba(black, .4);
    margin-top: -210px;
    transform-style: preserve-3d;
    transition: all .5s linear;
    cursor: pointer;
    left: 50%;
    position: absolute;
    margin-left: -110px;
  }
  .avatar-carton{    
    opacity: 1;
    transition: transform .5s linear, opacity 1s linear;
  }
  .avatar-me{
    opacity: 0;
    transition: transform .5s linear, opacity 1s linear;
  }
  .bio{

  }

  .links{
    padding: 20px 5px 5px 5px;

    a{
      color: black;
      display: inline-block;
      transition: all 0.3s;
      i{
        transition: all 0.5s;
      }
      &:hover{
        transform: translateY(-10px);
        i.fa-github{
          color: #A6A8AB;
        }
        i.fa-twitter{
          color: #1DA1F2;
        }
        i.fa-medium{
          color: #32FC8D;
        }
        i.fa-linkedin-square{
          color: #1985BC;
        }
      }
    }
  }
}
.gh-emoji{
  height: 20px;
}
#open-source-stats{
  ul{
    display: inline;
  }
  li{
    display: inline;
  }
  i{
    margin-left: 10px;
  }
}
footer{
  background: white;
  padding: 10px;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  i{
    color: #FF7F50;
    margin: 5px;
  }
  a{
    margin-left: 5px;
    margin-right: 40px;
    color: #6495ED;
    text-decoration: none;
  }
}

/* Article */

.article{
  height: 120px;
  border-bottom: 1px solid #aaa;
  padding: 10px 0;
  overflow: hidden;
  text-align: left;
  
  &:last-child{
    border-bottom: none;
  }

  .article-title{
    font-weight: bold;
  }

  .article-intro{
    font-size: 13px;
    color: #666;
    margin-top: 5px;
  }

  .article-read-more{
    color: cornflowerblue;
  }
  a{
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }
  }
  .article-img{
    background: center no-repeat;
    background-size: contain;
    width: 100px;
    height: 100px;
    margin-right: 10px;
    float: left;
    border: 1px solid #aaa;
    border-radius: 2px;
  }
}

/* Company */
.company{
  border-bottom: 1px solid #aaa;
  padding: 10px 0;
  text-align: left;
  
  &:last-child{
    border-bottom: none;
  }

  .company-name{
    font-weight: bold;
  }
  
  .company-duties{
    font-size: 13px;
    color: #666;
    margin-top: 5px;
  }

  .company-stack{
    margin-top: 10px;
    margin-left: 110px;
    border: 1px dotted #fff;
    border-style: dashed;
    padding: 2px;
  }


  a{
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }
  }
  .company-logo{
    background: center no-repeat;
    background-size: contain;
    width: 100px;
    height: 100px;
    margin-right: 10px;
    float: left;
    border: 1px solid #aaa;
    border-radius: 2px;
  }
}

/* Menu */

#menu{
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px;
  border-radius: 3px;
  background: rgba(white, 0.7);

  .menu-item{
    cursor: pointer;
    
    &:hover{
      text-decoration: underline;
    }
    &.active{
      color: green;
    }
  }
}

/* Project */

#projects{
  .box-content{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }  
}
.project{
  width: 33.33%;
  border: 1px solid #aaa;
  border-radius: 3px;
  box-shadow: 1px 1px 10px -3px black;
  min-height: 300px;
  flex-basis: 30%;
  margin: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: rgba(white, 0.5);
  
  .cover{
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 200px;
    position: relative;

    .title{
      color: white;
      content: ' ';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(black, 0.6);
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-bottom: 10px;
      align-items: flex-start;
      padding-left: 10px;
      font-size: 20px;

      a{
        color: white;
        text-decoration: none;

        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
  .project-info{
    color: #555;
    font-size: 15px;
    padding: 7px;
    flex: 1;
  }
  .project-link{
    border-top: 1px solid #aaa;
    padding: 5px;
    text-align: right;

    a{
      font-size: 12px;
      text-decoration: none;
    }
    button{
      margin-right: 5px;
      background: transparent;
      border: 2px solid #aaa;
      color: #aaa;
      cursor: pointer;
      font-weight: bold;
      transition: all .2s;

      &:hover{
        color: red;
        border-color: red;
      }
    }
  }
}

/* Repository */

#open-source{
  height: 485px;
  overflow: hidden;
  
  .show-more{
    content: ' ';
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    cursor: pointer;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6495ED;
    transition: color .3s;
    
    &:hover{
      color: #1ED3D6;
    }
    i{
      margin: 10px;
    }
  }
  &.overflow{
    height: auto;
    .show-more{
      display: none;
    }
  }
  .box-content{
    overflow: hidden;
  }

  .os-repo{
    width: 312px;
    height: 175px;
    overflow: hidden;
    float: left;
    margin: 5px;
    border: 1px solid white;
    border-left: 3px solid #F4CF34;
    border-bottom: none;
    background-color: #fff;
    display: flex;
    flex-direction: column;

    &.is-forked{
      background-color: rgba(black, 0.4);
      .os-content{
        color: white;
      }
    }

    .os-header{
      background-color: #F5F5F5;
      border-bottom: 1px solid #ddd;
      padding: 7px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      a{
        font-size: 15px;
        font-weight: bold;
        color: black;
        text-decoration: none;
        width: 180px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;  
        &:first-letter{
          text-transform: capitalize;
        }      
        
        &:hover{
          text-decoration: underline;
        }
      }

      .os-pushed-at{
        font-size: 12px;
      }
    }

    .os-content{
      padding: 5px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    
    .os-description{
      flex: 1;
      padding: 10px;
      max-height: 120px;
      overflow: hidden;
    }

    .os-stats{
      display: flex;
      padding: 10px;
      font-size: 13px;

      li{
        display: flex;
        flex: 1;
        flex-direction: column;

        i{
          margin-bottom: 5px;
        }
      }
    }
  }
}
`;

export const AppWrapper = styled.div`

`;