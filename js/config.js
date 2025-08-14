// API Configuration
const API_CONFIG = {
    // Base URL for your API
    BASE_URL: 'https://xuwcctkrbvgaxptnjgjb.supabase.co/rest/v1',
    
    // API Key for authentication
    API_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1d2NjdGtyYnZnYXhwdG5qZ2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxOTk1MTYsImV4cCI6MjA3MDc3NTUxNn0.eJC6r1ufgD_h5_iaYy7CwzlWKEbtW_AXVhnkaMb2MYE',
    
    // Authorization token (Bearer token, JWT, etc.)
    AUTH_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1d2NjdGtyYnZnYXhwdG5qZ2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxOTk1MTYsImV4cCI6MjA3MDc3NTUxNn0.eJC6r1ufgD_h5_iaYy7CwzlWKEbtW_AXVhnkaMb2MYE',
    
    // API Endpoints
    ENDPOINTS: {
        PROFESORES: '/profesores',
        ESTUDIANTES: '/estudiantes',
        CURSOS: '/cursos',
        INSCRIPCIONES: '/inscripciones',
    },
    
    // Request timeout in milliseconds
    TIMEOUT: 10000,
    
    // Default headers for all requests
    DEFAULT_HEADERS: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

// Environment configuration
const ENV_CONFIG = {
    // Set to true for development mode
    DEBUG: true,
    
    // Mock data when API is not available
    USE_MOCK_DATA: true,
    
    // Auto-refresh interval for dashboard (in milliseconds)
    REFRESH_INTERVAL: 30000
};

// UI Configuration
const UI_CONFIG = {
    // Animation durations
    ANIMATION_DURATION: 300,
    
    // Toast notification duration
    TOAST_DURATION: 3000,
    
    // Items per page for pagination
    ITEMS_PER_PAGE: 10,
    
    // Date format
    DATE_FORMAT: 'DD/MM/YYYY'
};