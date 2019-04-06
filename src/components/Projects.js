import React from 'react';
import PROJECTS from '../data/projects';

const Project = props => {
    const { title, image, description, link } = props.project;

    return (
      <div style={{display: 'inline-block', width: 300, margin: 10}}>
        <div>{title}</div>
        <img src={image} alt='profile' style={{width: 200, height: 120}} />
        <p>{description}</p>
        <a href={link} rel="noopener noreferrer" target="_blank">{link.substring(0,30)}</a>
      </div>     
    )
}

const Projects = () =>  (
  <div>
    <h2>Highlighting projects</h2>
    <div>
      {
        PROJECTS.map(pro => {
          return(
            <Project key={pro.id} project={pro} />
          );
        })
      }
      </div>         
  </div>
)


export default Projects;