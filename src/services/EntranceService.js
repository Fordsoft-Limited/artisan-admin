import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/entrance";

const EntranceService = {
  async listBlogs(page, limit) {
    try {
      return await axios.get(`${BASE_URL}/blogs`, {
        params: {
          page,
          limit,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  async listPaginatedAdvertisement(page, limit) {
    try {
      return await axios.get(`${BASE_URL}/advsertisements`, {
        params: {
          page,
          limit,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  async listPaginatedArtisan(page, limit) {
    try {
      return await axios.get(`${BASE_URL}/artisans`, {
        params: {
          page,
          limit,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  async rateArtisan(payload) {
    try {
      return await axios.post(`${BASE_URL}/artisans/rating`, payload);
    } catch (error) {
      throw error;
    }
  },

  async addcomment(payload) {
    try {
      return await axios.post(`${BASE_URL}/blogs/comment`, payload);
    } catch (error) {
      throw error;
    }
  },

  async listRecentBlogs(page, limit) {
    try {
      return await axios.get(`${BASE_URL}/recent/blog`, {
        params: {
          page,
          limit,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  async activateAccount(payload) {
    try {
      return await axios.post(`${BASE_URL}/account/activate`, payload);
    } catch (error) {
      throw error;
    }
  },

  async login(payload) {
    try {
      return await axios.post(`${BASE_URL}/login`, payload);
    } catch (error) {
      throw error;
    }
  },

  async createVisitRequest(visitorRequest) {
    try {
      return await axios.post(`${BASE_URL}/visitor/register`, visitorRequest);
    } catch (error) {
      throw error;
    }
  },

  async changedpassword(userId, changePasswordRequest) {
    try {
      return await axios.post(
        `${BASE_URL}/change-password/${userId}`,
        changePasswordRequest
      );
    } catch (error) {
      throw error;
    }
  },

  async resetpassword(userId, resetPasswordRequest) {
    try {
      return await axios.post(
        `${BASE_URL}/reset-password/${userId}`,
        resetPasswordRequest
      );
    } catch (error) {
      throw error;
    }
  },

  async resetpassword(userId, resetPasswordRequest) {
    try {
      return await axios.post(
        `${BASE_URL}/reset-password/${userId}`,
        resetPasswordRequest
      );
    } catch (error) {
      throw error;
    }
  },

  async forgetpassword(userId, forgotPasswordRequest) {
    try {
      return await axios.post(
        `${BASE_URL}/forgot-password/${userId}`,
        forgotPasswordRequest
      );
    } catch (error) {
      throw error;
    }
  },
};

export default EntranceService
