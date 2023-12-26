import { useFunctions } from 'sonata-api'
import { description, Animal } from './description'

export const animal = () => ({
  item: Animal,
  description,
  functions: {
    ...useFunctions<typeof Animal>()([
      'get',
      'getAll',
      'insert',
      'remove',
      'upload',
      'removeFile',
    ]),
  }
})