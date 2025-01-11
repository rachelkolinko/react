import i18n from '../../i18n';
import { I18nContext } from 'react-i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';


function Thank(){
    const { t } = useTranslation();
    return(
        <h1>{t('Thank.descrption')}</h1>
    )
}
export default Thank;