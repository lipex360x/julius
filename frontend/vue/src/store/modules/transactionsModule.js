const transactionsModule = {
  state: {
    transactions: [
      {
        id: Math.random().toString(36).substr(2, 8),
        value: 300,
        description: 'receita',
        date: '2020-04-01'
      },

      {
        id: Math.random().toString(36).substr(2, 8),
        value: -300,
        description: 'despesa',
        date: '2020-05-01'
      },

      {
        id: Math.random().toString(36).substr(2, 8),
        value: 300,
        description: 'receita',
        date: '2020-06-01'
      }
    ],
    balance: 30,
  },

  getters: {
    getTransactions: (state) => state.transactions,
    getBalance: (state) => state.balance
  },

  actions: {
    saveTransaction: ( { commit }, transaction ) => {
      commit('createTransaction', transaction )
    }
  },

  mutations: {
    createTransaction: (state, transaction) => {
      state.transactions.unshift(transaction)
    }
  }
}

export default transactionsModule