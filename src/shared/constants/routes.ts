export const ROUTES = {
  HOME: '',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  PRODUCTS: '/products',
  COMPONENTS: '/components',
  SETTINGS: '/settings'
}

export const FULL_ROUTES = {
  PRIVATE: {
    HOME: ROUTES.HOME,
    PROFILE: `${ROUTES.HOME}/${ROUTES.PROFILE}`,
    PRODUCTS: `${ROUTES.HOME}/${ROUTES.PRODUCTS}`,
    COMPONENTS: `${ROUTES.HOME}/${ROUTES.COMPONENTS}`,
    SETTINGS: `${ROUTES.HOME}/${ROUTES.SETTINGS}`
  },
  PUBLIC: {
    LOGIN: `${ROUTES.HOME}/${ROUTES.LOGIN}`,
    REGISTER: `${ROUTES.HOME}/${ROUTES.REGISTER}`
  }
}
