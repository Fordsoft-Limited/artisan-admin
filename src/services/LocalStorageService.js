// LocalStorageService.js
const LocalStorageService = {
    // Method to set key-value pair in localStorage
    set: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
  
    // Method to get item from localStorage by key
    get: (key) => {
      const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
    },
  
    // Method to get token from localStorage
    getToken: () => {
      const authData = LocalStorageService.get('authData');
      return authData ? authData.token : null;
    },
  
    // Method to store token from login response
    storeTokenFromResponse: (response) => {
      const { data } = response;
      console.log(JSON.stringify(data))
      LocalStorageService.set('authData', data);
    }
  };
  
  export default LocalStorageService;
  