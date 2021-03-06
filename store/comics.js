import {
  SET_COMIC_BOOKS,
  SET_START_DATE,
  SET_END_DATE,
  SET_OFFSET,
  SET_TOTAL_RESULTS,
  SET_TOTAL_PAGES,
  SET_WEEKS,
  SET_FILTER
} from "./mutation-types";
import fetchJSONP from "../helpers/jsonp";
import comicVine from "../helpers/comicVine";
import Weeks from "../helpers/Weeks";
import { formatComicVineResponse, hasProperty } from "../helpers/utils";

const comics = {
  state: () => ({
    comicBooks: [],
    startDate: "",
    endDate: "",
    offset: 0,
    totalPages: 0,
    totalResults: 0,
    releaseWeeks: [],
    filter: ""
  }),
  mutations: {
    [SET_COMIC_BOOKS](state, payload) {
      state.comicBooks = payload.comics;
    },
    [SET_START_DATE](state, payload) {
      console.log(payload.date);
      state.startDate = payload.date;
    },
    [SET_END_DATE](state, payload) {
      state.endDate = payload.date;
    },
    [SET_OFFSET](state, payload) {
      state.offset = payload.offset;
    },
    [SET_TOTAL_RESULTS](state, payload) {
      state.totalResults = payload.total;
    },
    [SET_TOTAL_PAGES](state, payload) {
      state.totalPages = payload.pages;
    },
    [SET_WEEKS](state, payload) {
      state.releaseWeeks = payload.releaseWeeks;
    },
    [SET_FILTER](state, payload) {
      state.filter = payload.filter;
    }
  },
  actions: {
    // action for api fetch requests
    fetchComics({ dispatch, state }) {
      const { startDate, endDate, offset } = state;
      // form url with api params using ~/helpers/comicVine
      const url = comicVine(startDate, endDate, offset);
      return new Promise((resolve, reject) => {
        fetchJSONP(url)
          .then(res => {
            const comics = formatComicVineResponse(res);
            if (comics === null) {
              console.log("Error: Something went wrong with the response.");
              reject("Error: Something went wrong with the response.");
            } else {
              resolve();
              const total = res.number_of_total_results;
              const pages = Math.ceil(total / 20);
              dispatch({ type: "setTotalResults", total });
              dispatch({ type: "setTotalPages", pages });
              dispatch({ type: "setComicBooks", comics: comics });
            }
          })
          .catch(err => {
            console.log(`Error: ${err}`);
            reject(`Error: ${err}`);
          });
      });
    },
    setComicBooks({ commit }, { comics }) {
      commit({ type: SET_COMIC_BOOKS, comics });
    },
    // create release week dates using Weeks class in helpers
    setWeeks({ commit }) {
      const date = new Date();

      const dateString = date.toISOString().substring(0, 10);

      const weeks = new Weeks(dateString); // Weeks class instance

      weeks.setWeeks(); // Weeks setter

      const releaseWeeks = weeks.getWeeks(); // Weeks getter
      commit({ type: SET_WEEKS, releaseWeeks });
    },
    setStartDate({ commit }, date) {
      console.log(date);
      commit({ type: SET_START_DATE, date });
    },
    setEndDate({ commit }, date) {
      commit({ type: SET_END_DATE, date });
    },
    setOffset({ commit }, offset) {
      commit({ type: SET_OFFSET, offset });
    },
    setTotalResults({ commit }, { total }) {
      commit({ type: SET_TOTAL_RESULTS, total });
    },
    setTotalPages({ commit }, { pages }) {
      commit({ type: SET_TOTAL_PAGES, pages });
    },
    // for filtering displayed comics by user input
    setFilter({ commit }, filter) {
      commit({ type: SET_FILTER, filter });
    }
  },
  getters: {
    // return comicBooks filtered by user input
    getComicBooks: state => {
      if (state.comicBooks.length < 1) return state.comicBooks;
      return state.comicBooks.filter(item => {
        if (hasProperty(item, "volume")) {
          if (
            item.volume.name.toUpperCase().indexOf(state.filter.toUpperCase()) >
            -1
          ) {
            return item;
          }
        }
      });
    },
    getReleaseWeeks: state => state.releaseWeeks,
    getStartDate: state => state.startDate,
    getEndDate: state => state.endDate,
    getTotalPages: state => state.totalPages,
    getTotalResults: state => state.totalResults,
    getComicsLoaded: state => {
      if (state.comicBooks.length > 0) return true;
      return false;
    }
  }
};

export default comics;
