import InitialState from "./initialstate";

function categoryReducers(
  prevState = {
    categoriesLoading: false,
    categories: InitialState.categories,
    customCategories: InitialState.customCategories,
    customCategoryNames: InitialState.customCategoryNames,
    categoryDetailLoading: false,
    categoryDetail: InitialState.categoryDetail,
  },
  action
) {
  switch (action.type) {
    case "LOAD_CATEGORIES_REQUEST":
      return { ...prevState, categoriesLoading: true, error: "" };
    case "LOAD_CATEGORIES_SUCCESS":
      return {
        ...prevState,
        categoriesLoading: false,
        categories: action.categories,
        error: "",
        message: "",
      };
    case "LOAD_CATEGORIES_FAILURE":
      return { ...prevState, categoriesLoading: false, error: "" };
    case "LOAD_CUSTOM_DESIGN_CATEGORIES_REQUEST":
      return { ...prevState, customCategoriesLoading: true, error: "" };
    case "LOAD_CUSTOM_DESIGN_CATEGORIES_SUCCESS":
      return {
        ...prevState,
        customCategoriesLoading: false,
        customCategories: action.customCategories,
        customCategoryNames: action.customCategoryNames,
        error: "",
        message: "",
      };
    case "LOAD_CUSTOM_DESIGN_CATEGORIES_FAILURE":
      return { ...prevState, customCategoriesLoading: false, error: "" };
    case "LOAD_CATEGORY_DETAIL_REQUEST":
      return {
        ...prevState,
        categoryDetailLoading: true,
        categoryDetail: InitialState.categoryDetail,
        error: "",
      };
    case "LOAD_CATEGORY_DETAIL_SUCCESS":
      return {
        ...prevState,
        categoryDetailLoading: false,
        categoryDetail: action.categoryDetail,
        error: "",
        message: "",
      };
    case "LOAD_CATEGORY_DETAIL_FAILURE":
      return { ...prevState, categoryDetailLoading: false, error: "" };

    default:
      return prevState;
  }
}

export default categoryReducers;
