import DataLoader from './data-loader';

const MOCK_FILE_NAME = 'categories.json';

const CategoryApi = {

    getCategories : function getCategories() {
        let url = `encproducts/getallcategoriestree?externalId=Enclothe`;
        return DataLoader.get(url, MOCK_FILE_NAME);
    },
    getCustomDesignCategories : function getCustomDesignCategories() {
        let url = `enc-category/customdesign`;
        return DataLoader.get(url, MOCK_FILE_NAME);
    },
    getCategoryDetail : function getCategoryDetail(categoryId) {
        let url = `enc-category/${categoryId}?includeCustomDesignTypes=true&includeProductAddons=true`;
        return DataLoader.get(url, MOCK_FILE_NAME);
    }
} 

export default CategoryApi;