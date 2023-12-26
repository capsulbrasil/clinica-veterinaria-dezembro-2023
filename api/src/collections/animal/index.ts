import { useFunctions } from 'sonata-api'
import { description, Animal } from './description'

export const person = () => ({
  item: Animal,
  description,
  functions: {
    ...useFunctions<typeof Animal>()([
      'get',
      'getAll',
      'insert',
      'remove',
    ]),
  }
})