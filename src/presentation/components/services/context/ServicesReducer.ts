export const ServicesReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_SERVICES_LOADING':
      return {
        ...state,
        getServices: {
          ...state.getServices,
          data: null,
          loading: true,
          successful: false,
          error: null,
        },
      };
    case 'GET_SERVICES_SUCCESSFUL':
      return {
        ...state,
        getServices: {
          ...state.getServices,
          data: action.payload.data,
          loading: false,
          successful: true,
          error: null,
        },
      };
    case 'GET_SERVICES_ERROR':
      return {
        ...state,
        getServices: {
          ...state.getServices,
          data: null,
          loading: false,
          successful: false,
          error: action.payload.error,
        },
      };
    default:
      return state;
  }
};
