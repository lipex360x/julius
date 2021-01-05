interface Transaction {
  id: string;
  value: number;
  description: string;
  date: string;
}

interface Transactions {
  transactions: Transaction[];
  balance: number;
}

interface CommitProps {
  mutation: string;
  data: Transaction;
}

const moduleTransactions = {
  state: {
    transactions: [
      {
        id: Math.random().toString(36).substr(2, 5),
        value: 200,
        description: 'Entrada',
        date: '2020-05-01'
      },

      {
        id: Math.random().toString(36).substr(2, 5),
        value: -150,
        description: 'Saída',
        date: '2020-05-01'
      },

      {
        id: Math.random().toString(36).substr(2, 5),
        value: -70,
        description: 'Entrada',
        date: '2020-05-01'
      }
    ],

    balance: 30
  },

  getters: {
    getTransactions: (state: Transactions) => state.transactions,
    getBalance: (state: Transactions) => state.balance
  },

  actions: {
    saveTransaction: ({ commit }, transaction: Transaction) => {
      commit('createTransaction', transaction)
    }
  },

  mutations: {
    createTransaction: (state: Transactions, transaction: Transaction) => {
      state.transactions.unshift(transaction)
    }
  }
}

export default moduleTransactions
