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

  getAssetTypeById: async (categoryId) => {
    const response = await APIClient.get(
      `http://localhost:8080/api/asset/type`,
      {
        params: {
          categoryId: categoryId,
        },
      },
    );

    return response;
  },
};

export default AssetService;
