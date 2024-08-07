// store/modules/blogs.js
import axios from "axios";
import { useAuth0 } from '@auth0/auth0-vue';

const apiUrl = import.meta.env.VITE_APP_API_URL;

const state = {
  blogs: [],
};

const mutations = {
  SET_BLOGS(state, blogs) {
    state.blogs = blogs;
  },
};

const actions = {
  async fetchBlogs({ commit }) {
    const { getAccessTokenSilently } = useAuth0();
    try {
      const token = await getAccessTokenSilently();
      console.log('token', token);
      
      const response = await axios.get(`${apiUrl}/blogs`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      commit("SET_BLOGS", response.data);
      console.log("res", response.data);
      
    } catch (error) {
      console.error("There was an error fetching the blogs:", error);
    }
  }
  
   
};

const getters = {
  allBlogs: (state) => state.blogs,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
