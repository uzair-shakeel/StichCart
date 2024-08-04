import {
  createRequestTypes,
  action,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "./base-action";

export const LOAD_CATEGORIES = "LOAD_CATEGORIES";
export const LOAD_CUSTOM_DESIGN_CATEGORIES = "LOAD_CUSTOM_DESIGN_CATEGORIES";
export const LOAD_CATEGORY_DETAIL = "LOAD_CATEGORY_DETAIL";

export const LOAD_CATEGORIES_VAR = createRequestTypes(LOAD_CATEGORIES);

export const LOAD_CUSTOM_DESIGN_CATEGORIES_VAR = createRequestTypes(
  LOAD_CUSTOM_DESIGN_CATEGORIES
);
export const LOAD_CATEGORY_DETAIL_VAR =
  createRequestTypes(LOAD_CATEGORY_DETAIL);

export const getCategories = {
  request: () => action(LOAD_CATEGORIES_VAR[REQUEST], {}),
  success: (categories) => {
    return action(LOAD_CATEGORIES_VAR[SUCCESS], {categories});
  },

  failure: (error) => action(LOAD_CATEGORIES_VAR[FAILURE], {error}),
};

export const loadCustomDesignCategories = {
  request: () => action(LOAD_CUSTOM_DESIGN_CATEGORIES_VAR[REQUEST]),
  success: (customCategories, customCategoryNames) =>
    action(LOAD_CUSTOM_DESIGN_CATEGORIES_VAR[SUCCESS], {
      customCategories,
      customCategoryNames,
    }),
  failure: (error) =>
    action(LOAD_CUSTOM_DESIGN_CATEGORIES_VAR[FAILURE], { error }),
};

export const loadCategoryDetail = {
  request: () => action(LOAD_CATEGORY_DETAIL_VAR[REQUEST]),
  success: (categoryDetail) =>
    action(LOAD_CATEGORY_DETAIL_VAR[SUCCESS], { categoryDetail }),
  failure: (error) => action(LOAD_CATEGORY_DETAIL_VAR[FAILURE], { error }),
};

export const loadCategories = () => action(LOAD_CATEGORIES);
export const fetchCustomDesignCategories = () =>
  action(LOAD_CUSTOM_DESIGN_CATEGORIES);
export const fetchCategoryDetail = (categoryId) =>
  action(LOAD_CATEGORY_DETAIL, { categoryId });
