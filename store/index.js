import Vuex from "vuex";
import comics from "./comics";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      comics
    }
  });
};
