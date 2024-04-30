import React, { useState, createContext, useContext } from 'react';
import LanguageSelector from './LanguageSelector';
import './Assets/Scss/App.scss';
// fr
import NavbarFr from './Componants/fr/NavbarFr'
import ProjetsFr from './Componants/fr/ProjectsFr';
import ExperienceFr from './Componants/fr/ExperienceFr';
import FooterFr from './Componants/fr/FooterFr'
// uk
import Navbar from './Componants/uk/Navbar'
import Projects from './Componants/uk/Projects';
import Experience from './Componants/uk/Experience';
import Footer from './Componants/Footer'

import pp from './Assets/Img/pp.jpg'
import linkedin from './Assets/Img/icons8-linkedin-32.png'
import instagram from './Assets/Img/icons8-instagram-32.png'

const LanguageContext = createContext();

const App = () => {
  const [lang, setLang] = useState('');

  return (
    <LanguageContext.Provider value={lang}>
      <div>
        {lang ? (
          <AppContent />
        ) : (
          <LanguageSelector onSelectLanguage={(selectedLang) => setLang(selectedLang)} />
        )}
      </div>
    </LanguageContext.Provider>
  );
};

const SelectLanguage = ({ onChange }) => {
  // Interface utilisateur pour sélectionner la langue
  // ...
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="fr">Français</option>
      <option value="en">Anglais</option>
      {/* ...autres options de langue */}
    </select>
  );
};

const AppContent = () => {
  const lang = useContext(LanguageContext);

  return lang === 'fr' ? <FrenchContent /> : <EnglishContent />;
};

const FrenchContent = () => {
  // Contenu en français
  return (
    <div id='home' className="App">
      <header className="App-header">
        <NavbarFr />
      </header>
      <div className='presentation'>
        <div className='p-txt'>
            <h4>Bonjour,<span className='letter-blue'> je suis</span> </h4>
            <h1 className='letter-blue'>Touchet Alexandre</h1>
            <h4>Concepteur Développeur d'Applications</h4>
            <p></p>
        </div>
        <div className='pp'>
          <img src={pp} alt='pp'/> 
        </div>
      </div>
      <div className='pp_r'>
        <a href='https://www.linkedin.com/in/alexandre-touchet-6902401b9/' target='_blanck' rel='noopener'><img src={linkedin} alt='Linkedin'/></a>
        <a href='https://www.instagram.com/whisko35/' target='_blanck' rel='noopener'><img src={instagram} alt='Instagram'/></a>
      </div>
      <ProjetsFr />
      <div className='space-100'></div>
      <ExperienceFr />
      <div className='space-100'></div>
      <FooterFr />
    </div>
  );
};

const EnglishContent = () => {
  // Contenu en anglais
  return (
    <div id='home' className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className='presentation'>
        <div className='p-txt'>
            <h4>Hello,<span className='letter-blue'> i'm</span> </h4>
            <h1 className='letter-blue'>Touchet Alexandre</h1>
            <h4>Application Developer Designer</h4>
            <p></p>
        </div>
        <div className='pp'>
          <img src={pp} alt='pp'/> 
        </div>
      </div>
      <div className='pp_r'>
        <a href='https://www.linkedin.com/in/alexandre-touchet-6902401b9/' target='_blanck' rel='noopener'><img src={linkedin} alt='Linkedin'/></a>
        <a href='https://www.instagram.com/whisko35/' target='_blanck' rel='noopener'><img src={instagram} alt='Instagram'/></a>
      </div>
      <Projects />
      <div className='space-100'></div>
      <Experience />
      <div className='space-100'></div>
      <Footer />
    </div>
  );
};

const FallbackContent = () => {
  // Contenu par défaut si aucune langue n'est sélectionnée
  return <p>Contenu par défaut</p>;
};

export default App;
