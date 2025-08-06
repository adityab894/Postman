import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5002';

// Maintain ENDPOINTS for backward compatibility
export const ENDPOINTS = {
  SPEAKERS: `${API_BASE_URL}/api/speakers`,  
  SPONSORS: `${API_BASE_URL}/api/sponsors`,
  SUBSCRIBE: `${API_BASE_URL}/api/subscribe`,
  EMAIL: `${API_BASE_URL}/api/email`,
  EVENTS: `${API_BASE_URL}/api/events`,
  USERS: `${API_BASE_URL}/api/users`,
  AUTH: `${API_BASE_URL}/api/auth`,
  ADMIN_AUTH: `${API_BASE_URL}/api/admin/auth`,
};

// Create axios instance with default config
const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const eventAPI = {
  getAllEvents: async () => {
    try {
      const response = await api.get('/events');
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw new Error(error.response?.data?.message || 'Failed to fetch events');
    }
  },

  getEventById: async (id) => {
    try {
      const response = await api.get(`/events/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching event:', error);
      throw new Error(error.response?.data?.message || 'Failed to fetch event');
    }
  },

  createEvent: async (eventData) => {
    try {
      const response = await api.post('/events/create', eventData);
      return response.data;
    } catch (error) {
      console.error('Error creating event:', error);
      if (error.response?.data?.errors) {
        throw new Error(error.response.data.errors.join(', '));
      }
      throw new Error(error.response?.data?.message || 'Failed to create event');
    }
  },

  updateEvent: async (id, eventData) => {
    try {
      const response = await api.put(`/events/${id}`, eventData);
      return response.data;
    } catch (error) {
      console.error('Error updating event:', error);
      throw new Error(error.response?.data?.message || 'Failed to update event');
    }
  },

  deleteEvent: async (id) => {
    try {
      const response = await api.delete(`/events/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting event:', error);
      throw new Error(error.response?.data?.message || 'Failed to delete event');
    }
  },
};

export const userAPI = {
  register: async (userData) => {
    try {
      const response = await api.post('/users/register', userData);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },
};

export const authAPI = {
  login: async (credentials) => {
    try {
      const response = await api.post('/admin/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw new Error(error.response?.data?.message || 'Failed to login');
    }
  },

  logout: async () => {
    try {
      const response = await api.post('/admin/auth/logout');
      return response.data;
    } catch (error) {
      console.error('Error logging out:', error);
      throw new Error(error.response?.data?.message || 'Failed to logout');
    }
  },

  verifyToken: async () => {
    try {
      const response = await api.get('/admin/auth/verify');
      return response.data;
    } catch (error) {
      console.error('Error verifying token:', error);
      throw new Error(error.response?.data?.message || 'Failed to verify token');
    }
  }
};

// Export default for backward compatibility
export default {
  API_BASE_URL,
  ENDPOINTS,
  eventAPI,
  userAPI,
  authAPI,
}; 