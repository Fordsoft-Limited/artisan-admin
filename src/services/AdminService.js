import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/reports";

const AdminService = {
  async getPaginatedVisitors(page, limit) {
    try {
      return await axios.get(`${BASE_URL}/visitors`, {
        params: {
          page,
          limit,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  async getPaginatedUsers(page, limit) {
    try {
      return await axios.get(`${BASE_URL}/users`, {
        params: {
          page,
          limit,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  async sendInvitationToUser(data) {
    try {
      return await axios.post(`${BASE_URL}/user/send/invitation`, data);
    } catch (error) {
      throw error;
    }
  },
};

export default AdminService;
