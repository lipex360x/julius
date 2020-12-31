import { createStore } from 'vuex'

import moduleTransactions from './modules/moduleTransactions'

const store = createStore({
  modules: {
    moduleTransactions
  }
})

export default store
