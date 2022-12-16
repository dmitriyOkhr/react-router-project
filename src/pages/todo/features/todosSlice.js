import { v4 as uuidv4 } from "uuid";

const initiallState = { data: [] };

export default function todosReducer(state = initiallState, action) {
  switch (action.type) {
    case "todos/addItem": {
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: uuidv4(),
            title: action.payload.title,
            description: action.payload.description,
            completed: false,
          },
        ],
      };
    }
    case "todos/deleteItem": {
      return {
        ...state,
        data: state.data.filter((el) => el.id !== action.payload),
      };
    }
    case "todos/changeItem": {
      return {
        ...state,
        data: state.data.map((el) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              title: action.payload.title,
              description: action.payload.description,
            };
          } else {
            return el;
          }
        }),
      };
    }
    default:
      return state;
  }
}
