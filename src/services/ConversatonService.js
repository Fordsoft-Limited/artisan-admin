import axiosInstance from "./AxiosInterceptor";
import APP_CONSTANT from "../utils/Constant";

const BASE_URL = APP_CONSTANT.baseUrl + "/actions";

const ConversationService = {
  async addBlogWithAttachment(blogData) {
    const formData = new FormData();
    formData.append(
      "payload",
      JSON.stringify({ title: blogData.title, description: blogData.content })
    );
    formData.append("file", blogData.file);

    return await axiosInstance.post(`${BASE_URL}/blogs`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async addAdvertisementWithAttachment(advertData) {
    try {
      const formData = new FormData();
      formData.append(
        "payload",
        JSON.stringify({
          name: advertData.name,
          email: advertData.email,
          phone: advertData.phone,
          category: advertData.category,
          description: advertData.content,
          websiteLink: advertData.websiteLink,
          businessName: advertData.businessName,
          street: advertData.street,
          city: advertData.city,
          postalCode: advertData.postalCode,
        })
      );
      formData.append("file", advertData.file);
      return await axiosInstance.post(`${BASE_URL}/advsertisement`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      throw error;
    }
  },

  async addArtisan(artisanData) {
    const formData = new FormData();
    formData.append(
      "payload",
      JSON.stringify({
        name: artisanData.name,
        email: artisanData.email,
        phone: artisanData.phone,
        businessType: artisanData.businessType,
        serviceDescription: artisanData.serviceDescription,
        websiteLink: artisanData.websiteLink,
        businessName: artisanData.businessName,
        street: artisanData.street,
        city: artisanData.city,
        postalCode: artisanData.postalCode,
      })
    );
    formData.append("file", artisanData.file);

    return await axiosInstance.post(`${BASE_URL}/artisan`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },


  async deleteBlog(id) {
    return await axiosInstance.delete(`${BASE_URL}/deleteBlog/${id}`);
  },
  async deleteUser(id) {
    return await axiosInstance.delete(`${BASE_URL}/user/delete/${id}`);
  },
  async deleteUser(id) {
      return await axiosInstance.delete(`${BASE_URL}/user/delete/${id}`);
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
