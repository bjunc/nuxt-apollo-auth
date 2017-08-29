import Vuex 	from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: { token: null },
		actions: {
			nuxtServerInit ({ state, commit }, { req }) {
				state.token = 'ABC123'
			}
		}
	})
}

export default createStore
