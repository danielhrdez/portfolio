import React from 'react';
import { LocalItem, Language } from '../../data/constants';
import ToggleSwitch from '../../components/ToggleSwitch';
import { useTranslation } from 'react-i18next';
import i18n from '../../utils/i18n';

/**
 * @desc This is the LanguageSettings props interface
 * @interface ILanguageSettingsProps
 */
interface ILanguageSettingsProps {
  className?: string;
}

/**
 * @desc This is the main Settings component
 * @param {ILanguageSettingsProps} props The Settings props
 * @returns {JSX.Element} The main Settings component
 */
function LanguageSettings(props: ILanguageSettingsProps): JSX.Element {
  const { t } = useTranslation();
  const setLanguage = (language: Language = Language.ENGLISH): void => {
    localStorage.setItem(LocalItem.LANGUAGE, language);
    i18n.changeLanguage(language).catch((error: Error) => {
      console.error(error);
    });
  };
  return (
    <li className={props.className}>
      <h2>{t('language')}</h2>
      <ToggleSwitch
        text1={t('english')}
        text2={t('spanish')}
        onChange={(checked: boolean) => {
          if (checked) {
            setLanguage(Language.SPANISH);
          } else {
            setLanguage(Language.ENGLISH);
          }
        }}
        checked={localStorage.getItem(LocalItem.LANGUAGE) === Language.SPANISH}
      />
    </li>
  );
}

export default LanguageSettings;
