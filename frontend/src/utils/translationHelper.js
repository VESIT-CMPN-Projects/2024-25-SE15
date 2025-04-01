/**
 * This utility provides functions to help with identifying missing translations
 * and standardizing how we handle translations across the application.
 */

import i18n from '../i18n';

/**
 * Checks if a translation key exists in the current language
 * @param {string} key - The translation key to check
 * @returns {boolean} - Whether the key exists
 */
export const hasTranslation = (key) => {
  return i18n.exists(key);
};

/**
 * Logs missing translations to console in development
 * @param {string} key - The translation key that was missing
 */
export const logMissingTranslation = (key) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Missing translation for key: ${key} in language: ${i18n.language}`);
  }
};

/**
 * Enhanced translate function that logs missing translations and handles fallbacks
 * @param {string} key - The translation key
 * @param {object} options - Additional options for i18next
 * @returns {string} - The translated text or a fallback
 */
export const translate = (key, options = {}) => {
  // First check if translation exists
  if (!hasTranslation(key)) {
    logMissingTranslation(key);
    
    // Try to use English as fallback
    const englishKey = key.split('.').pop();
    return options.defaultValue || englishKey || key;
  }
  
  // Return translated string
  return i18n.t(key, options);
};

/**
 * Returns a sensible key from English text
 * Useful when adding new hardcoded text to translations
 * @param {string} text - The English text
 * @returns {string} - A key suitable for translation files
 */
export const createKeyFromText = (text) => {
  return text.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '_')
    .substring(0, 30);
};

/**
 * Adds structure to the component name to create a namespace
 * @param {string} componentName - The name of the component
 * @param {string} section - Optional section within the component
 * @returns {string} - A namespace for translation keys
 */
export const getNamespace = (componentName, section = '') => {
  const base = componentName.toLowerCase();
  return section ? `${base}.${section}` : base;
};
