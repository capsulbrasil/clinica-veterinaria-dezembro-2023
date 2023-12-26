import { useFunctions } from 'sonata-api'
import { description, Geolocation } from './description'

export const producer = () => ({
  item: Geolocation,
  description,
  functions: {
    ...useFunctions<typeof Geolocation>()([
      'get',
      'getAll',
      'insert',
      'remove',
    ]),
  }
})