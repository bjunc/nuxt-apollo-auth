import Vuex     from 'vuex'
import cookie   from 'cookie'

const createStore = () => {
	return new Vuex.Store({
		state: { token: null },
		actions: {
			nuxtServerInit ({ state, commit }, { req }) {
				if (req.headers['cookie']) {
					let cookies = cookie.parse(req.headers['cookie'])
					if (cookies.UJSSESSID) state.token = cookies.UJSSESSID
				}
			}
		}
	})
}

export default createStore
