import axiosInstance from "./AxiosInterceptor";
import APP_CONSTANT from "../utils/Constant";

const BASE_URL = APP_CONSTANT.baseUrl + "reports";

const AdminService = {
  async getPaginatedVisitors(page, limit) {
    return await axiosInstance.get(`${BASE_URL}/visitors`, {
      params: {
        page,
        limit,
      },
    });
  },

  async getPaginatedUsers(page, limit) {
    return await axiosInstance.get(`${BASE_URL}/users`, {
      params: {
        page,
        limit,
      },
    });
  },

  async sendInvitationToUser(data) {
    return await axiosInstance.post(`${BASE_URL}/user/send/invitation`, data);
  },
};

export default AdminService;
