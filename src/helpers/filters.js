import {Position, FILTER_LABEL} from "../consts";
import {generateFilters} from "../mock/filters/filters";
import {render} from "../utils/component-change";
import {reRenderBoard} from "./../helpers/board";
import FiltersComponent from "./../components/filters/filters";


/**
 * Пересоздание компонента фильтров с обновленным массивом задач
 * @param {Object} filtersComponent фильтры
 * @param {Array} allTasks задачи
 * @param {Object} boardComponent доска задач
 * @param {string} currentFilter текущий фильтр
 * @param {Number} showingTasksCount количество отображенных задач
 */
const regenerateFilters = (filtersComponent, allTasks, boardComponent, currentFilter, showingTasksCount) => {
  document.querySelector(`.filter.container`).remove();
  const mainNode = document.querySelector(`.main__control`);

  const newFilters = generateFilters(allTasks);
  filtersComponent = new FiltersComponent(newFilters);
  render(mainNode, filtersComponent, Position.AFTER_END);
  setCheckFilter(currentFilter);
  addListenersToFilters(filtersComponent, allTasks, boardComponent, showingTasksCount);
};


/**
 * Добавление лисенеров на фильтры
 * @param {Object} filtersComponent фильтры
 * @param {Array} allTasks задачи
 * @param {Object} boardComponent доска задач
 * @param {Number} showingTasksCount количество отображенных задач
 */
const addListenersToFilters = (filtersComponent, allTasks, boardComponent, showingTasksCount) => {

  const boardFilters = Array.from(filtersComponent.getElement().querySelectorAll(FILTER_LABEL));

  const filterClickHandler = (evt) => {
    unCheckFilter();

    const filterAttribute = evt.target.closest(FILTER_LABEL).getAttribute(`for`);

    setCheckFilter(filterAttribute);
    reRenderBoard(allTasks, boardComponent, filterAttribute, showingTasksCount);
  };

  const addListenerForFilter = () => (boardFilter) => boardFilter.addEventListener(`click`, filterClickHandler);

  boardFilters.map(addListenerForFilter(allTasks));
};


/**
 * Фильтрация задач в соответствии с выбранным фильтром
 * @param {Array} tasks задачи
 * @param {string} attributeFor выбираемый фильтр
 * @return {Array} отфильтрованный массив задач
 */
const getFilteringTasks = (tasks, attributeFor = `filter__all`) => {
  let tasksNotArchive = [];
  const tasksNotDelete = tasks.filter((task) => !task.isDeleted);
  if (tasks.length) {
    tasksNotArchive = tasksNotDelete.filter((task) => !task.isArchive);
  }

  switch (attributeFor) {
    case `filter__all`:
      return tasksNotArchive;

    case `filter__overdue`:
      return tasksNotArchive.filter((task) =>
        task.dueDate instanceof Date && task.dueDate < Date.now());

    case `filter__today`:
      return tasksNotArchive.filter((task) =>
        task.dueDate && task.dueDate.getDate() === new Date().getDate());

    case `filter__favorites`:
      return tasksNotArchive.filter((task) => task.isFavorite);

    case `filter__repeating`:
      return tasksNotArchive.filter((task) =>
        Object.values(task.repeatingDays).some(Boolean));

    case `filter__archive`:
      return tasksNotDelete.filter((task) => task.isArchive);

    default:
      return [];
  }
};


/**
 * Получение идентификатора фильтра с состоянием "checked"
 * @return {string}
 */
const getCheckedFilter = () => document.querySelector(`input:checked`).getAttribute(`id`);


/**
 * Удаление с фильтра состояния "checked"
 */
const unCheckFilter = () => {
  const checkedFilter = document.querySelector(`input:checked`);
  checkedFilter.removeAttribute(`checked`);
};


/**
 * Уставновка фильтра в состояние "checked"
 * @param {string} filterAttribute
 */
const setCheckFilter = (filterAttribute) => {
  const input = document.querySelector(`#${filterAttribute}`);
  input.setAttribute(`checked`, true);
};


export {addListenersToFilters, regenerateFilters, getFilteringTasks, getCheckedFilter, setCheckFilter};
