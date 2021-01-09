import { createStore } from 'vuex'
import transactionModule from './modules/transactionsModule'

const store = createStore({
  modules: {
    transactionModule
  }
})

export default store