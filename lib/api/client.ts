import axios, { AxiosError, AxiosInstance } from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL || "";
const IMAGE_BASE_URL = process.env.EXPO_PUBLIC_IMAGE_BASE_URL || "";

/**
 * Axios instance configured with base API URL
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request interceptor for API calls
 */
apiClient.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed in the future
    // const token = await getStoredToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor for API calls
 */
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle common error responses
    if (error.response) {
      // Server responded with error status
      const statusCode = error.response.status;
      const message = (error.response.data as any)?.message || error.message;

      switch (statusCode) {
        case 401:
          // Handle unauthorized - could trigger logout here
          break;
        case 403:
          // Handle forbidden
          break;
        case 404:
          // Handle not found
          break;
        case 500:
          // Handle server error
          break;
      }

      return Promise.reject({
        message,
        statusCode,
        code: error.code,
      });
    } else if (error.request) {
      // Request made but no response received
      return Promise.reject({
        message:
          "Não foi possível conectar ao servidor. Verifique sua conexão.",
        code: error.code,
      });
    } else {
      // Something else happened
      return Promise.reject({
        message: error.message || "Ocorreu um erro inesperado.",
        code: error.code,
      });
    }
  }
);

/**
 * Helper function to build full image URL
 * @param imagePath - The relative image path from the API
 * @returns Full image URL or null if path is null/empty
 */
export function getImageUrl(
  imagePath: string | null | undefined
): string | null {
  if (!imagePath) return null;
  return `${IMAGE_BASE_URL}${imagePath}`;
}

export { API_URL, apiClient, IMAGE_BASE_URL };
