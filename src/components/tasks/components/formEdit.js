import {createColorBar} from "./common/colorBarBlock";
import {createDescription} from "./common/descriptionBlock";
import {createSettingsBlock} from "./common/settingsBlock";
import {createButtonsBlock} from "./common/buttonsBlock";

/**
 * Создание разметки для формы просмотра задачи
 * @param {Object} task задача
 * @param {Boolean} isView флаг, отвечающий за вид отображаемой формы
 * @param {Object} classesMarkup классы разметки
 * @param {Object} taskParameters дополнительные параметры задачи
 * @return {string} разметка формы просмотра задачи
 */
export const getEditForm = (task, isView, classesMarkup, taskParameters) => {
  const {description, color} = task;
  const {repeatClass, deadlineClass} = classesMarkup;
  const {isRepeatingTask} = taskParameters;

  return (`
    <article class="card card--edit card--${color} ${repeatClass} ${deadlineClass}">
      <form class="card__form" method="get">
        <div class="card__inner">
          ${createColorBar()}
          ${createDescription(description, isView)}
          ${createSettingsBlock(task, isView, isRepeatingTask)}
          ${createButtonsBlock(task, isView)}
        </div>
      </form>
    </article>
  `);
};
