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
      const newLancamento = await api.post('/lancamentos', apiTransaction)

      commit('createTransaction', newLancamento.data );
      commit('setBalance')
    },

    updateBalance: ({ commit }) => {
      commit('setBalance')
    },

    deleteTransaction: async ({ commit }, lancamento_id) => {
      console.log(lancamento_id)
      await api.delete(`/lancamentos/${lancamento_id}`)

      commit('setTransactions', lancamento_id);
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

    setTransactions: (state, lancamento_id) => {
      state.transactions = state.transactions.filter(transaction => transaction.lancamento_id !== lancamento_id)
    }
  }
}

export default transactionsModule