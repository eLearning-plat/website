// store/index.js
import { createStore } from 'vuex';
import blogs from './modules/blogs';

export default createStore({
  modules: {
    blogs
  }
});
