import axios from 'axios'

import { FETCH_TESTS } from '../types/types'

export const fetchTests = () => {
  const data = axios.get('/api/tests')
                    .then((resp) => resp.data)
                    .catch((err) => console.error(err))

  return {
    type   : FETCH_TESTS,
    payload: data
  }
}
