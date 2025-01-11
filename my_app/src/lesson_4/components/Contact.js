
import Thank from "./Thank";
import { useNavigate } from "react-router-dom";
import React from 'react';
import i18n from "../../i18n";
import { I18nContext } from 'react-i18next';
import { useTranslation } from 'react-i18next'; // מייבא את useTranslation


function Contact() {
  const { t } = useTranslation(); // מחזיר את פונקציית t
  const navigate = useNavigate();
    const goToThank = () =>{
        navigate('/Thank');
    };
  return (
    <>
      <h1>{t('Contact.descrption')}</h1>
      <button onClick={goToThank}>{t('Contact.buttonContact')}</button>
    </>
  );
}

export default Contact;

