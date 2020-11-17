import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Contato } from "./contatos/contato.model";

export class InMemoryDataService implements InMemoryDbService {
    
    createDb(): any {
        let contatos: Contato[] = [
            {id: 1, nome: 'Jose', email: 'jose@email.com', telefone: '(00) 90000-0000'},
            {id: 2, nome: 'Maria', email: 'maria@email.com', telefone: '(00) 90000-0000'},
            {id: 3, nome: 'David', email: 'david@email.com', telefone: '(00) 90000-0000'},
            {id: 4, nome: 'Joana', email: 'joana@email.com', telefone: '(00) 90000-0000'},
            {id: 5, nome: 'PP', email: 'pp@email.com', telefone: '(00) 90000-0000'}
        ];

        return {contatos};
    }

}