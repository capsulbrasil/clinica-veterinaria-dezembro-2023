import { useFunctions } from 'sonata-api'
import { description, Checkin} from './description'

export const checkin = () => ({
  item: Checkin,
  description,
  functions: {
    ...useFunctions<typeof Checkin>()([
      'get',
      'getAll',
      'insert',
      'remove',
    ]),
  }
})