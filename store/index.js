/* eslint-disable */
// import cookie  from 'cookie'
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: { token: null },
    actions: {
      nuxtServerInit ({ state, commit }, { req }) {
        // if (!context.req.headers['cookie']) return
        // let cookies = cookie.parse(context.req.headers['cookie'])
        // if (cookies.UJSSESSID) token = cookies.UJSSESSID
      }
    }
  })
}

export default createStore
