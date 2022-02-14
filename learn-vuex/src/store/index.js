import todos from './modules/todos';
import { createStore } from 'vuex';

const store = createStore({
  modules: {
    todos,
  },
});

export default store;
