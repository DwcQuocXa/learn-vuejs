//import axios from 'axios';

import axios from 'axios';

const state = {
  todos: [
    {
      id: 1,
      title: 'Todo One',
    },
    {
      id: 2,
      title: 'Todo Two',
    },
  ],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(res.data);
    commit('setTodos', res.data);
  },

  async addTodo({ commit }, todo) {
    const header = {
      'Content-type': 'application/json',
    };
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', todo, header);
    console.log(res.data);
    commit('newTodo', res.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit('removeTodo', id);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => (state.todos = state.todos.filter((todo) => todo.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
