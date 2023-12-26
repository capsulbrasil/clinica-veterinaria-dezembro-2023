import { defineDescription } from "sonata-api";

export const [Geolocation, description] = defineDescription({
    $id: 'Geolocation',
    required: [
        'country',
        'state',
        'district',
        'street',
        'number',
        'zipcode'
    ],
    properties: {
        country: {
            description: 'País',
            type: 'string',    
        },
        state: {
            description: 'Estado',
            type: 'string',
        },
        district: {
            description: 'Bairro',
            type: 'string'
        },
        street: {
            description: 'Rua',
            type: 'string',
        },
        number: {
            description: 'Número',
            type: 'number',
        },
        complement: {
            description: 'Complemento',
            type: 'string'
        },
        zipcode: {
            description: 'Caixa Postal(CEP)',
            type: 'string',
        },
    }
})