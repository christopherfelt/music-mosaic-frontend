import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import rp from "../../ResponseProcessing";
let gl = require("../../genrelist.json");

Vue.use(Vuex);

const _api = axios.create({
  baseURL: "https://www.reddit.com/r/",
  timeout: 3000,
});

export default new Vuex.Store({
  state: {
    subreddits: [],
    genres: [
      "Classical",
      "Electronic",
      "Rock/Metal",
      "Hip-hop",
      "Decades",
      "Culture",
      "Other",
      "Any",
      "Community",
      "Redditor-made",
      "Artist/Band",
      "Instrument",
    ],
    activeVideos: [],
    currentlyPlayingVideo: 0,
    currentPlaylist: "",
    playBackState: "stopped",
  },
  mutations: {
    setActiveVideos(state, videos) {
      state.activeVideos = videos;
    },
    increaseCurrentPlayingVideoNumber(state, songNumber) {
      state.currentlyPlayingVideo = songNumber;
      console.log("in mutation");
    },
    changePlayBackState(state, playBackState) {
      state.playBackState = playBackState;
    },
    setCurrentPlaylist(state, subreddit) {
      state.currentPlaylist = subreddit;
    },
    setSubreddits(state, data) {
      console.log("in mutionat");
      Vue.set(state.subreddits, data.id, data.data);
    },
  },
  actions: {
    async getSubredditVideos({ commit, dispatch }, subreddit) {
      try {
        let res = await _api.get(subreddit + "/hot.json?limit=50");
        let result = rp.processResponseURls(res.data.data.children);
        commit("setActiveVideos", result[0]);
        commit("setCurrentPlaylist", subreddit);
        commit("increaseCurrentPlayingVideoNumber", 0);
        commit("changePlayBackState", "");
      } catch (error) {
        console.error(error);
      }
    },
    changeSong({ commit, dispatch }, songNumber) {
      commit("increaseCurrentPlayingVideoNumber", songNumber);
      commit("changePlayBackState", "playing");
    },
    changePlayBackState({ commit, dispatch }, playBackState) {
      commit("changePlayBackState", playBackState);
    },
    setCurrentPlayingVideo({ commit, dispatch }, playlistIndex) {
      commit("increaseCurrentPlayingVideoNumber", playlistIndex);
    },
    getSubredditsByGenre({ commit, dispatch }) {
      console.log("here helloe hello");
      let keys = Object.keys(gl);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let subredditsList = gl[key];
        commit("setSubreddits", { id: key, data: subredditsList });
      }
    },
  },
  modules: {},
});
