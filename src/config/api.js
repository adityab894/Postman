import axios from 'axios';

// Get the backend URL from environment variable and ensure no trailing slash
const BASE_URL = import.meta.env.VITE_BACKEND_URL 
  ? import.meta.env.VITE_BACKEND_URL.replace(/\/+$/, '')  // Remove all trailing slashes
  : 'http://localhost:5002';

// Ensure no double slashes in API base URL
const API_BASE_URL = `${BASE_URL}/api`.replace(/\/+/g, '/');

console.log('Using API Base URL:', API_BASE_URL);

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    // Ensure URL doesn't have double slashes
    if (config.url) {
      // Remove leading slashes and normalize path
      config.url = config.url.replace(/^\/+/, '');
      config.url = config.url.replace(/\/+/g, '/');
    }
    
    // Construct the full URL without double slashes
    const fullUrl = `${config.baseURL}/${config.url}`.replace(/\/+/g, '/');
    console.log('Making request to:', fullUrl);
    
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

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => {
    // Ensure response data is properly formatted
    if (response.data && typeof response.data === 'object') {
      return response;
    }
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// API endpoints
const ENDPOINTS = {
  SPEAKERS: 'speakers',
  SPONSORS: 'sponsors',
  EMAIL: 'email',
  EVENTS: 'events',
  REGISTRATIONS: 'registrations',
  ADMIN: 'admin'
};

// Email API functions
export const emailAPI = {
  submitEmail: async (emailData) => {
    try {
      const response = await api.post(`${ENDPOINTS.EMAIL}/submit`, emailData);
      return response.data;
    } catch (error) {
      console.error('Error submitting email:', error);
      throw new Error(error.response?.data?.message || 'Failed to submit email');
    }
  }
};

// Event API functions
export const eventAPI = {
  getAllEvents: async () => {
    try {
      const response = await api.get(ENDPOINTS.EVENTS);
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('Error fetching events:', error);
      throw new Error(error.response?.data?.message || 'Failed to fetch events');
    }
  },

  getEventById: async (id) => {
    try {
      const response = await api.get(`${ENDPOINTS.EVENTS}/${id}`);
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

// Speakers API functions
export const speakersAPI = {
  submitSpeaker: async (speakerData) => {
    try {
      const response = await api.post('/speakers/submit', speakerData);
      return response.data;
    } catch (error) {
      console.error('Error submitting speaker:', error);
      throw new Error(error.response?.data?.message || 'Failed to submit speaker');
    }
  },

  getAllSpeakers: async () => {
    try {
      const response = await api.get('/speakers');
      return response.data;
    } catch (error) {
      console.error('Error fetching speakers:', error);
      throw new Error(error.response?.data?.message || 'Failed to fetch speakers');
    }
  }
};

// Speaker API functions
export const speakerAPI = {
  submitSpeaker: async (speakerData) => {
    try {
      const response = await api.post(`${ENDPOINTS.SPEAKERS}/submit`, speakerData);
      return response.data;
    } catch (error) {
      console.error('Error submitting speaker:', error);
      throw new Error(error.response?.data?.message || 'Failed to submit speaker');
    }
  }
};

// Export both the axios instance and endpoints
export { ENDPOINTS };
export default api; 