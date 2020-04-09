import {MONTH_NAMES} from "../../../consts";
import {createDateBlock} from "./dateBlock";
import {createRepeatBlock} from "./repeatBlock";
import {createColorsBlock} from "./colorsBlock";
import {formatTime} from "../../../utils";

/**
 * Создание разметки блока параметров задачи
 * @param {Object} task задача
 * @param {Boolean} isRepeatingTask флаг, определеяющий является ли задача повторяющейся
 * @return {string} разметка блока параметров задачи
 */
export const createSettingsBlock = (task, isRepeatingTask) => {
  const {dueDate, color, repeatingDays} = task;

  const isDateShowing = !!dueDate;
  const date = isDateShowing ? `${dueDate.getDate()} ${MONTH_NAMES[dueDate.getMonth()]}` : ``;
  const time = isDateShowing ? formatTime(dueDate) : ``;

  return (`
    <div class="card__settings">
      <div class="card__details">
        <div class="card__dates">
          ${createDateBlock(isDateShowing, date, time)}
          ${createRepeatBlock(isRepeatingTask, repeatingDays)}
        </div>
      </div>
      ${createColorsBlock(color)}
    </div>
  `);
};