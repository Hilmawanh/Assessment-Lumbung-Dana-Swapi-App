const INIT_STATE = {
  loading: false,
  data: [],
  item: undefined,
  errorMsg: "",
};

const getFilmsStar = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "FILMS_REQUEST":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };

    case "FILMS_SET_FILMSS":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case "FILMS_SET_FILMS":
      return {
        ...state,
        loading: false,
        item: action.payload,
      };

    case "FILMS_ERROR":
      return {
        ...state,
        loading: false,
        errorMsg: "Nothing To Get",
      };

    default:
      return state;
  }
};

export default getFilmsStar;
