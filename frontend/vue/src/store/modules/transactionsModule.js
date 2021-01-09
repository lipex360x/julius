const transactionsModule = {
  state: {
    transactions: [
      {
        id: Math.random().toString(36).substr(2, 8),
        value: 300,
        description: 'receita',
        date: '2020-03-01'
      },

      {
        id: Math.random().toString(36).substr(2, 8),
        value: -1300,
        description: 'despesa',
        date: '2020-01-01'
      },

      {
        id: Math.random().toString(36).substr(2, 8),
        value: 250,
        description: 'receita',
        date: '2020-07-01'
      }
    ],
    balance: 0,
  },

  getters: {
    getTransactions: (state) => state.transactions,
    getBalance: (state) => state.balance
  },

  actions: {
    saveTransaction: ( { commit }, transaction ) => {
      commit('createTransaction', transaction );
      commit('setBalance')
    },

    updateBalance: ({ commit }) => {
      commit('setBalance')
    },

    deleteTransaction: ({ commit }, id) => {
      commit('setTransactions', id);
      commit('setBalance')
    }
  },

  mutations: {
    createTransaction: (state, transaction) => {
      state.transactions.unshift(transaction)
    },

    setBalance: (state) => {
      const balance = state.transactions.length > 0 
        ? state.transactions
          .map(transaction => transaction.value)
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