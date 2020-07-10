import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import rp from "../../ResponseProcessing";

Vue.use(Vuex);

const _api = axios.create({
  baseURL: "https://www.reddit.com/r/",
  timeout: 3000,
});

export default new Vuex.Store({
  state: {
    subreddits: [
      "listentothis",
      "metalcore",
      "hardcore",
      "chillstep",
      "deathstep",
      "deathcore",
      "EDM",
      "Music",
      "Mixes",
      "HipHopHeads",
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
  },
  modules: {},
});
