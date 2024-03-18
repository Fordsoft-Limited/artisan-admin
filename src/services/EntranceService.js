import axios from "axios";
import APP_CONSTANT from "../utils/Constant";

const BASE_URL = APP_CONSTANT.baseUrl + "entrance";

const EntranceService = {
  async listBlogs(page, limit) {
    return await axios.get(`${BASE_URL}/blogs`, {
      params: {
        page,
        limit,
      },
    });
  },

  async listPaginatedAdvert(page, limit) {
    return await axios.get(`${BASE_URL}/advsertisements`, {
      params: {
        page,
        limit,
      },
    });
  },

  async listPaginatedArtisan(page, limit) {
    return await axios.get(`${BASE_URL}/artisans`, {
      params: {
        page,
        limit,
      },
    });
  },

  async rateArtisan(payload) {
    return await axios.post(`${BASE_URL}/artisans/rating`, payload);
  },

  async addcomment(payload) {
    return await axios.post(`${BASE_URL}/blogs/comment`, payload);
  },

  async listRecentBlogs(page, limit) {
    return await axios.get(`${BASE_URL}/recent/blog`, {
      params: {
        page,
        limit,
      },
    });
  },

  async activateAccount(payload) {
    return await axios.post(`${BASE_URL}/account/activate`, payload);
  },

  async login(payload) {
    return await axios.post(`${BASE_URL}/login`, payload);
  },

  async createVisitRequest(visitorRequest) {
    return await axios.post(`${BASE_URL}/visitor/register`, visitorRequest);
  },

  async changedpassword(userId, changePasswordRequest) {
    return await axios.post(
      `${BASE_URL}/change-password/${userId}`,
      changePasswordRequest
    );
  },

  async resetpassword(userId, resetPasswordRequest) {
    return await axios.post(
      `${BASE_URL}/reset-password/${userId}`,
      resetPasswordRequest
    );
  },

  async forgetpassword(userId, forgotPasswordRequest) {
    return await axios.post(
      `${BASE_URL}/forgot-password/${userId}`,
      forgotPasswordRequest
    );
  },
};

export default EntranceService;
