export const API_CONFIG = {
  BASE_URL: 'http://localhost:8000',
  PREFIX: 'api',
  VERSION: 'v1'
}

export const API_IRL = `${API_CONFIG.BASE_URL}/${API_CONFIG.PREFIX}/${API_CONFIG.VERSION}`

export const API_ROUTES = {
  base: API_IRL,
  login: `${API_IRL}/login`
}
