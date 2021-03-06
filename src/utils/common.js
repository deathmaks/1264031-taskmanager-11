import {CHECK_FORMAT_TIME} from "../consts";


/**
 * Добавление ведущих нулей к часам / минутам: 2 -> 02
 * @param {string} value
 * @return {string}
 */
const castTimeFormat = (value) => {
  return value < CHECK_FORMAT_TIME ? `0${value}` : String(value);
};


/**
 * Приведение времени к формату "HH:MM"
 * @param {Date} date форматируемая дата
 * @return {string} время в формате HH:MM
 */
export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours());
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};
