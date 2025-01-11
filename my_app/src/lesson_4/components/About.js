
import React from 'react';
import { useTranslation } from 'react-i18next'; // מייבא את useTranslation

function About() {
  const { t } = useTranslation(); // מחזיר את פונקציית t

  return (
    <h1>{t('About.descrption')}</h1> // משתמש במפתח home_welcome כדי להחזיר את התרגום המתאים
  );
}
export default About;

// function About() {
//   const { t } = useTranslation();

//   return <button>{t('changeLanguage')}</button>;
// }



