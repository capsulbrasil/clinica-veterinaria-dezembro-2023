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
       
        owner: {
            description: 'Dono',
            $ref: 'person',
            indexes: ['name']
        },
        age: {
            description: 'Idade',
            type: 'number'
        },
        pictures: {
            $ref: 'file',
        },
        
    },
    presets: [
        'crud'
    ],
})