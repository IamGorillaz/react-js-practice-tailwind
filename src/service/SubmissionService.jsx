import APIClient from "../config/APIClient";

export const SubmissionService = {
  // Create Submission
  createSubmission: async (data) => {
    try {
      const response = await APIClient.post(`api/submission/request`, data);
      return response;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  // Get Submission
  getSubmission: async () => {
    try {
      const response = await APIClient.get(
        `http://localhost:8080/api/submission/view`,
      );
      console.log(response);
      return response;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  login: async (data) => {
    try {
      const response = await APIClient.post(`api/auth/login`, data);
      console.log(response);

      return response;
    } catch (error) {
      console.log(error);
      throw error.response ? error.response.data : error;
    }
  },

  // Approval Level 1

  aprroveLevel1: async (submissionId) => {
    try {
      const response = await APIClient.put(`api/level-1/${submissionId}`);
      return response;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
  // Approval Level 2

  aprroveLevel2: async (submissionId) => {
    try {
      const response = await APIClient.put(`api/level-2/${submissionId}`);
      return response;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
};

export default SubmissionService;
