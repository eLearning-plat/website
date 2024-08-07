// store/index.js
import { createStore } from 'vuex';
import blogs from './modules/blogs';
import courses from './modules/courses'
export default createStore({
  modules: {
    blogs,
    courses
  }
});
