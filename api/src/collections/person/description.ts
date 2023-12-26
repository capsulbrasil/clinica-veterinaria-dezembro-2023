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
        /* Perguntar sobre tipos de usuário */
        type: {
            description: 'Tipo',
            type: 'boolean',
        },
        ie: {
            description: 'Inscrição Estadual',
            type: 'string'
        },
        /* Entender melhor sobre refs */
        adress: {
            description: 'Caixa Postal(CEP)',
            type: 'string',
            
        },
    }
})