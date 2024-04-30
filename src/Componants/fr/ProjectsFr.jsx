import React from 'react';
import '../../Assets/Scss/Projects.scss'; // Importez votre fichier SCSS
import costauds from '../../Assets/Img/Projects/opera_cp2ARDMlbH.png'
import maillets from '../../Assets/Img/Projects/opera_HEtsDZUk6Y.png'

const ProjetsFr = () => {

  return (
    <>
    <hr />
        <h2 id='myProjects' className='projects'>Mes <span className='letter-blue'>Projets</span></h2>
        <div className="projects-container">
            <div className='realisation'>
                <img src={costauds} alt='costauds'/>
                <p>Création d'un site web en react / nodeJs</p>
            </div>
            <div className='realisation'>
                <img src={maillets} alt='maillets'/>
                <p>Participation à la conception de la maquette d'un site pour une monnaie local</p>
            </div> 
        </div>
    </>
  );
};

export default ProjetsFr;
