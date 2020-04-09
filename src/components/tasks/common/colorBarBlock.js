/**
 * Создание разметки блока цветовой панели
 * @return {string} разметка цветовой панели
 */
export const createColorBar = () => {
  return (`
    <div class="card__color-bar">
      <svg class="card__color-bar-wave" width="100%" height="10">
        <use xlink:href="#wave"></use>
      </svg>
    </div>
  `);
};