import { defineDescription } from 'sonata-api'

export const [Pizza, description] = defineDescription({
  $id: 'pizza',
  icon: 'user',
  properties: {
    price: {
      type: 'number'
    },
    ingredients: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {
            enum: [
              'calabresa',
              'mussarela',
              'catupiry',
              'frango',
              'champignon',
            ]
          },
          percentage: {
            type: 'number',
            minimum: 0,
            maximum: 100
          }
        }
      }
    },
    name: {
      type: 'string',
      getter: (value: any) => {
        const suffix = value.ingredients[1]
          ? value.ingredients[1].name
          : 'à moda'

        return `${value.ingredients[0]?.name} ${suffix}`
      }
    }
  },
  presets: [
    'crud'
  ],
  formLayout: {
    fields: {
      name: {
        if: {
          operator: 'exists',
          term1: '_id'
        }
      }
    }
  }
})
