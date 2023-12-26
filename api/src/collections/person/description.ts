import { defineDescription } from "sonata-api";

export const [Person, description] = defineDescription({
    $id: 'person',
    required: [
        'name',
        'email',
        'phone',
        'type',    
    ],
    properties: {
        name: {
            description: 'Nome',
            type: 'string',    
        },
        document: {
            description: 'Documento',
            type: 'string',
            hint: 'cpf ou cnpj',
        },
        email: {
            description: 'E-mail',
            type: 'string'
        },
        phone: {
            description: 'Telefone',
            type: 'string',
            mask: '(##)#####-####'
        },
        
        type: {
            description: 'Usuário',
            $ref: 'user',
        },
        ie: {
            description: 'Inscrição Estadual',
            type: 'string'
        },
        
        adress: {
            description: 'Endereço',
            $ref: 'geolocation',
            indexes: ['country','state','district','street','number']
            
        },
    }
})