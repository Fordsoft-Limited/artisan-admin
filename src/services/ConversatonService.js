import axiosInstance from './AxiosInterceptor';
import APP_CONSTANT from "../utils/Constant";

const BASE_URL =  APP_CONSTANT.baseUrl+"/actions";

const ConversationService = {
  async addBlog(data) {
    return await axiosInstance.post(`${BASE_URL}/blog`, data);
  },
 

  async addAvertisement(data) {
    return await axiosInstance.post(`${BASE_URL}/advsertisement`, data);
  },

  async addArtisan(data) {
    return await axiosInstance.post(`${BASE_URL}/artisan`, data);
  },

  async deleteBlog(id) {
    try {
      return await axiosInstance.delete(`${BASE_URL}/deleteBlog/${id}`);
    } catch (error) {
      throw error;
    }
  },
  async deleteUser(id) {
    return await axiosInstance.delete(`${BASE_URL}/user/delete/${id}`);
  },

  async deleteArtisan(id) {
    try {
      return await axiosInstance.delete(`${BASE_URL}/deleteArtisan/${id}`);
    } catch (error) {
      throw error;
    }
  },

  async deleteAdvertisement(id) {
    try {
      return await axiosInstance.delete(
        `${BASE_URL}/deleteAdvertisement/${id}`
      );
    } catch (error) {
      throw error;
    }
  },

  async deleteVisitor(id) {
    try {
      return await axiosInstance.delete(`${BASE_URL}/deleteVisitor/${id}`);
    } catch (error) {
      throw error;
    }
  },

  async updateArtisan(id, payload) {
    try {
      return await axiosInstance.put(
        `${BASE_URL}/updateArtisan/${id}`,
        payload
      );
    } catch (error) {
      throw error;
    }
  },

  async updateBlog(id, payload) {
    try {
      return await axiosInstance.put(`${BASE_URL}/updateBlog/${id}`, payload);
    } catch (error) {
      throw error;
    }
  },

  async updateAdvert(id, payload) {
    return await axiosInstance.put(`${BASE_URL}/updateAdvert/${id}`, payload);
  },
};

export default ConversationService;
