import axiosInstance from "./AxiosInterceptor";
import APP_CONSTANT from "../utils/Constant";

const BASE_URL = APP_CONSTANT.baseUrl + "/actions";

const ConversationService = {
  async addBlogWithAttachment(blogData, file) {
    const formData = new FormData();
    formData.append("title", blogData.title);
    formData.append("content", blogData.content);
    formData.append("file", file);

    return await axiosInstance.post(`${BASE_URL}/blogs`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async addNewAdvertisementWithAttachment(blogData, file) {
    const formData = new FormData();
    formData.append("title", blogData.title);
    formData.append("content", blogData.content);
    formData.append("file", file);

    return await axiosInstance.post(`${BASE_URL}/advsertisement`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async addArtisanWithAttachment(artisanData, file) {
    const formData = new FormData();
    formData.append("name", artisanData.name);
    formData.append("email", artisanData.content);
    formData.append("file", file);

    return await axiosInstance.post(`${BASE_URL}/artisan`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async deleteBlog(id) {
    return await axiosInstance.delete(`${BASE_URL}/deleteBlog/${id}`);
  },

  async deleteArtisan(id) {
    return await axiosInstance.delete(`${BASE_URL}/deleteArtisan/${id}`);
  },

  async deleteAdvertisement(id) {
    return await axiosInstance.delete(`${BASE_URL}/deleteAdvertisement/${id}`);
  },

  async deleteVisitor(id) {
    return await axiosInstance.delete(`${BASE_URL}/deleteVisitor/${id}`);
  },

  async updateArtisan(id, payload) {
    return await axiosInstance.put(`${BASE_URL}/updateArtisan/${id}`, payload);
  },

  async updateBlog(id, payload) {
    return await axiosInstance.put(`${BASE_URL}/updateBlog/${id}`, payload);
  },

  async updateAdvert(id, payload) {
    return await axiosInstance.put(`${BASE_URL}/updateAdvert/${id}`, payload);
  },
};

export default ConversationService;
