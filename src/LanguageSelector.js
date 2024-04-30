import React from 'react';

const LanguageSelector = ({ onSelectLanguage }) => {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <h1>Choisissez votre langue / Choose your language</h1>
      <select onChange={(e) => onSelectLanguage(e.target.value)} style={{ padding: '10px', fontSize: '16px' }}>
        <option value="">-- Sélectionner --</option>
        <option value="fr">Français</option>
        <option value="en">Anglais</option>
        {/* Autres options de langue */}
      </select>
    </div>
  );
};

export default LanguageSelector;