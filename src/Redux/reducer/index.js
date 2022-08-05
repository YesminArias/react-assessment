const inicialState = {
  candidates: [],
  detail: {},
  comment: "",
  questions: {},
  Applications: {},
};

function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case "GET_CANDIDATES":
      return {
        ...state,
        candidates: action.payload,
      };
    case "GET_APPLICATIONS":
      return {
        ...state,
        Applications: action.payload,
      };
    case "GET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "POST_COMMENT":
      return {
        ...state,
        comment: action.payload,
      };
    case "RES_STATE":
      return {
        ...state,
        detail: {},
        comment: "",
        questions: {},
        Applications: {},
      };
    default:
      return state;
  }
}

export default rootReducer;
