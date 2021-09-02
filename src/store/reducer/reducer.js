import { SAVE_ALL_POSTS, ADD_NEW_POST } from "../types";
import produce from "immer";

const initialState = {
  posts: [],
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ALL_POSTS:
      return produce(state, (draft) => {
        draft.posts = action.payload;
      });
    case ADD_NEW_POST:
      return produce(state, (draft) => {
        draft.posts.unshift(action.payload);
      });
    default:
      return {
        ...state,
      };
  }
}
