export const CHECK_FORMAT_TIME = 10;

export const Checked = {
  INPUT: ` checked`,
  CLASS: `checked`
};

export const CountTask = {
  ALL: 20,
  START: 2,
  BY_BUTTON: 2
};

export const Decision = {
  YES: `yes`,
  NO: `no`
};

export const Position = {
  BEFORE_END: `beforeend`,
  AFTER_END: `afterend`,
  AFTER_BEGIN: `afterbegin`
};

export const MONTH_NAMES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

export const DAYS = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];

export const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

export const FILTER_NAMES = [
  {
    name: `all`,
    checked: true
  },
  {
    name: `overdue`,
    checked: false
  },
  {
    name: `today`,
    checked: false
  },
  {
    name: `favorites`,
    checked: false
  },
  {
    name: `repeating`,
    checked: false
  },
  {
    name: `archive`,
    checked: false
  }
];

export const MEMU_ITEMS = [
  {
    name: `new-task`,
    label: `+ ADD NEW TASK`,
    checked: true
  },
  {
    name: `task`,
    label: `TASKS`,
    checked: false
  },
  {
    name: `statistic`,
    label: `STATISTICS`,
    checked: false
  }
];

export const Form = {
  VIEW: true,
  EDIT: false
};

export const CardClass = {
  repeat: `card--repeat`,
  deadline: `card--deadline`
};

export const KeyCode = {
  ENTER: 13,
  ESC: 27
};

export const NO_TASKS = [];

export const IsExistence = {
  YES: true,
  NO: false
};

export const IsArchive = {
  YES: true,
  NO: false
};

export const IsDeleted = {
  YES: true,
  NO: false
};

export const IsAttribute = {
  YES: true,
  NO: false
};

export const FILTER_LABEL = `.filter__label`;

export const DEFAULT_FILTER = `filter__all`;

export const SortType = {
  DATE_DOWN: `date-down`,
  DATE_UP: `date-up`,
  DEFAULT: `default`,
};


export const AttributeTask = {
  IS_ARCHIVE: `isArchive`,
  IS_FAVORITE: `isFavorite`,
  IS_DELETED: `isDeleted`
};


export const ButtonTask = {
  EDIT: `card__btn--edit`,
  ARCHIVE: `card__btn--archive`,
  FAVORITE: `card__btn--favorites`,
  DELETE: `card__delete`,
  FORM: `form`
};
