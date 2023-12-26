import { useFunctions } from 'sonata-api'
import { description, Person } from './description'

export const person = () => ({
  item: Person,
  description,
  functions: {
    ...useFunctions<typeof Person>()([
      'get',
      'getAll',
      'insert',
      'remove',
    ]),
  }
})