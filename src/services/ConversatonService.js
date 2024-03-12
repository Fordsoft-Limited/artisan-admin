import axiosInstance from './AxiosInterceptor';
import APP_CONSTANT from "../utils/Constant";

const BASE_URL =  APP_CONSTANT.baseUrl+"/actions";

const ConversationService = {
  async addBlogWithAttachment(blogData, file) {
    try {
      const formData = new FormData();
      formData.append("title", blogData.title);
      formData.append("content", blogData.content);
      formData.append("file", file);

      return await axiosInstance.post(`${BASE_URL}/blogs`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      throw error;
    }
  },

  async addNewAdvertisementWithAttachment(blogData, file) {
    try {
      const formData = new FormData();
      formData.append("title", blogData.title);
      formData.append("content", blogData.content);
      formData.append("file", file);

      return await axiosInstance.post(`${BASE_URL}/advsertisement`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      throw error;
    }
  },

  async addArtisanWithAttachment(artisanData, file) {
    try {
      const formData = new FormData();
      formData.append("name", artisanData.name);
      formData.append("email", artisanData.content);
      formData.append("file", file);

      return await axiosInstance.post(`${BASE_URL}/artisan`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      throw error;
    }
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
      return await axiosInstance.delete(`${BASE_URL}/deleteAdvertisement/${id}`);
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
      return await axiosInstance.put(`${BASE_URL}/updateArtisan/${id}`, payload);
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
