import React from 'react';
import '../../Assets/Scss/Projects.scss'; // Importez votre fichier SCSS
import costauds from '../../Assets/Img/Projects/opera_cp2ARDMlbH.png'
import maillets from '../../Assets/Img/Projects/opera_HEtsDZUk6Y.png'

const Projects = () => {

  return (
    <>
    <hr />
        <h2 id='myProjects' className='projects'>My <span className='letter-blue'>Projects</span></h2>
        <div className="projects-container">
            <div className='realisation'>
                <img src={costauds} alt='costauds'/>
                <p>Creation of a website in react / nodeJs</p>
            </div>
            <div className='realisation'>
                <img src={maillets} alt='maillets'/>
                <p>Participation in the design of the model of a site for a local currency</p>
            </div> 
        </div>
    </>
  );
};

export default Projects;
