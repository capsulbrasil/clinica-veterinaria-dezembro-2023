import { defineDescription } from "sonata-api";

export const [Animal, description] = defineDescription({
    $id: 'animal',
    required: [
        'name',
        'owner',
        'age',
    ],
    properties: {
        name: {
            description: 'Nome',
            type: 'string',    
        },
        /* Fixar Ref */
        owner: {
            description: 'Dono',
            type: 'string'
        },
        age: {
            description: 'Idade',
            type: 'number'
        },
        
    }
})