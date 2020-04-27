import {getViewButtons} from "./buttons/buttons-view";
import {getEditButtons} from "./buttons/buttons-edit";
import {ButtonTask, PART_BTN_CLASS} from "../../../../consts";

/**
 * Создание разметки блока кнопок задачи
 * @param {Object} task задача
 * @param {Boolean} isView флаг, отвечающий за вид отображаемой формы
 * @return {string} разметка блока
 */
const createButtonsBlock = (task, isView) => {
  const {isArchive, isFavorite} = task;

  const archiveBtnInactive = isArchive ? `${PART_BTN_CLASS}${ButtonTask.DISABLED}` : ``;
  const favoriteBtnInactive = isFavorite ? `${PART_BTN_CLASS}${ButtonTask.DISABLED}` : ``;

  return isView ? getViewButtons(archiveBtnInactive, favoriteBtnInactive) : getEditButtons();
};

export {createButtonsBlock};
