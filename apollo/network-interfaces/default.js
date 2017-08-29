
import { createNetworkInterface } from 'apollo-client'

export default createNetworkInterface({
  uri: 'https://edgewiserealty.com/graphql',
  transportBatching: true
})
