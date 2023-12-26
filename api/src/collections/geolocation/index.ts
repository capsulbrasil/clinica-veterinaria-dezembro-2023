import { useFunctions } from 'sonata-api'
import { description, Geolocation } from './description'

export const geolocation = () => ({
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