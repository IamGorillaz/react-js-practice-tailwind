import APIClient from "../config/APIClient";

export const AssetService = {
  // Get Asset Category

  getCategory: async () => {
    try {
      const response = await APIClient.get(
        `http://localhost:8080/api/asset/view`,
      );
      return response;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  // Get Asset Type by CategortID
  getAssetTypeById: async (categoryId) => {
    try {
      const response = await APIClient.get(
        `http://localhost:8080/api/asset/type`,
        {
          params: {
            categoryId: categoryId,
          },
        },
      );
      console.log(`Response GET Asset Type (categoryId=${categoryId}):`, response?.data);
      return response;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : error;
    }
  },
};

export default AssetService;
