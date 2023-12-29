import { defineDescription } from "sonata-api";
import { animal } from "../animal";

export const [Checkin, description] = defineDescription({
    $id: 'checkin',
    required: [
        'animal',
        'weight',
        'type',
        'reason',
        
    ],
    properties: {
        animal: {
            description: 'Animal',
            $ref: 'animal', 
            indexes: ['name'],   
        },
        weight: {
            description: 'Peso',
            type: 'number',
        },
        temperature: {
            description: 'Temperatura',
            type: 'number'
        },
        type: {
            description: 'Emergência?',
            type: 'boolean',
        },
        reason: {
            description: 'Motivo',
            type: 'string',
        },
    }
})