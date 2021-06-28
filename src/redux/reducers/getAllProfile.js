const INIT_STATE = {
  loading: false,
  data: [],
  item: undefined,
  errorMsg: "",
};

const getProfileStars = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "PROFILE_REQUEST":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };

    case "PROFILE_SET_PROFILES":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case "PROFILE_SET_PROFILE":
      return {
        ...state,
        loading: false,
        item: action.payload,
      };

    case "PROFILE_ERROR":
      return {
        ...state,
        loading: false,
        errorMsg: "Nothing To Get",
      };

    default:
      return state;
  }
};

export default getProfileStars;
