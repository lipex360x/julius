import api from '../../services/api'

const transactionsModule = {
  state: {
    transactions: [],
    balance: 0,
  },

  getters: {
    getTransactions: (state) => state.transactions,
    getBalance: (state) => state.balance
  },

  actions: {
    getAllTransactions: async ({commit}) => {
      const response = await api.get(`/lancamentos/${process.env.VUE_APP_USER_ID}`)

      commit('getTransactionsByUser', response.data)
      commit('setBalance')
    },
    
    saveTransaction: async ( { commit }, transaction ) => {
      const apiTransaction = {
        usuario_id: `${process.env.VUE_APP_USER_ID}`,
        value: transaction.value,
        description: transaction.description,
        date: transaction.date
      }
      await api.post('/lancamentos', apiTransaction)

      commit('createTransaction', transaction );
      commit('setBalance')
    },

    updateBalance: ({ commit }) => {
      commit('setBalance')
    },

    deleteTransaction: async ({ commit }, id) => {
      
      commit('setTransactions', id);
      commit('setBalance')
    }
  },

  mutations: {
    createTransaction: (state, transaction) => {
      state.transactions.unshift(transaction)
    },

    getTransactionsByUser:(state, transactions) => state.transactions = transactions,

    setBalance: (state) => {
      const balance = state.transactions.length > 0 
        ? state.transactions
          .map(transaction => parseFloat(transaction.value))
          .reduce((sum, value) => sum + value)
        : 0
      
      state.balance = balance
    },

    setTransactions: (state, id) => {
      state.transactions = state.transactions.filter(transaction => transaction.id !== id)
    }
  }
}

export default transactionsModule