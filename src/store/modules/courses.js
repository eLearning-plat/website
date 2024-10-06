// store/modules/courses.js
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-vue';
const apiUrl = import.meta.env.VITE_APP_API_URL;

const state = {
  courses: []
};

const mutations = {
  SET_COURSES(state, courses) {
    state.courses = courses;
  },
  ADD_COURSES(state, course) {
    state.courses.push(course);
  },
  UPDATE_COURSES(state, updatedCourse) {
    const index = state.courses.findIndex(course => course.id === updatedCourse.id);
    if (index !== -1) {
      state.courses.splice(index, 1, updatedCourse);
    }
  },
  DELETE_COURSES(state, courseId) {
    state.courses = state.courses.filter(course => course.id !== courseId);
  }
};

const actions = {
  async fetchCourses({ commit },filters = {}) {

    try {
  
      const response = await axios.get(`${apiUrl}/courses`,{ params: filters });
      commit('SET_COURSES', response.data);
    } catch (error) {
      console.error('There was an error fetching the courses:', error);
    }
  },

  async getCourseById({ state }, { courseId, token }) {
    try {
      const course = state.courses.find(course => course.id === courseId);
      if (course) {
        return course;
      }
      const response = await axios.get(`${apiUrl}/courses/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching course by ID:', error);
      throw error;
    }
  },

  async addCourses({ dispatch }, { newCourse, token }) {
    try {
      const res = await axios.post(`${apiUrl}/courses`, newCourse, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      await dispatch('fetchCourses', token);
      return res.data;
    } catch (error) {
      console.error('Error adding course:', error);
      throw error;
    }
  },

  async updateCourses({ commit }, { id, updatedData, token }) {
    try {
      const response = await axios.put(`${apiUrl}/courses/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      commit('UPDATE_COURSES', response.data);
    } catch (error) {
      console.error('Error updating course:', error);
    }
  },

  async deleteCourses({ commit, dispatch }, { courseId, token }) {
    try {
      await axios.delete(`${apiUrl}/courses/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      await dispatch('fetchCourses', token);
      commit('DELETE_COURSES', courseId);
    } catch (error) {
      console.error('There was an error deleting the courses:', error);
    }
  }
};

const getters = {
  allCourses: state => state.courses,
  getCourseById: (state) => (id) => {
    return state.courses.find(course => course.id === id);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};