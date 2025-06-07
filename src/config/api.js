import axios from 'axios';

// Determine if we're in development mode
const isDevelopment = import.meta.env.DEV;

// Set the base URL based on the environment
const API_BASE_URL = isDevelopment 
  ? 'http://localhost:5002/api'  // Local development
  : 'https://postman-backend-inky.vercel.app/api';  // Production

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// API endpoints
const ENDPOINTS = {
  SPEAKERS: '/speakers',
  SPONSORS: '/sponsors',
  EMAIL: '/email',
  EVENTS: '/events',
  REGISTRATIONS: '/registrations',
  ADMIN: '/admin'
};

// Event API functions
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
      const response = await api.post(`/events/${id}`, eventData);
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
  }
};

// Auth API functions
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

// Export both the axios instance and endpoints
export { ENDPOINTS };
export default api; 