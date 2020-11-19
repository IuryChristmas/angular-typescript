import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';
import { Contato } from './contato.model';
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html',
})
export class ContatosListaComponent implements OnInit {

    contatos: Contato[] = [];
    mensagem: {};
    classesCss: {};
    private currentTimeout: any;

    constructor(private contatoService: ContatoService,
        private dialogService: DialogService) {}

    ngOnInit() {
        this.contatoService.getContatosSlowly()
            .then((contatos: Contato[]) => {
                this.contatos = contatos;
            }).catch(err => {
                this.mostrarMensagem({
                    tipo: 'danger',
                    texto: 'Ocorreu um erro ao buscar a lista de contatos'
                });
            });
    }

    onDelete(contato: Contato): void {
        this.dialogService.confirm('Deseja deletar o contato ' + contato.nome + '?')
            .then((canDelete: boolean) => {
                if(canDelete) {
                    this.contatoService.delete(contato)
                        .then(() => {
                            this.contatos = this.contatos.filter(c => c.id != contato.id);

                            this.mostrarMensagem({
                                tipo: 'success',
                                texto: 'Contato deletado!'
                            });
                        }).catch(err => {
                            console.error(err);
                            this.mostrarMensagem({
                                tipo: 'danger',
                                texto: 'Ocorreu um erro ao deletar o contato!'
                            });
                        });
                }
            });
    }

    private mostrarMensagem(mensagem: {tipo: string, texto: string}): void {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        
        if(mensagem.tipo != 'danger') {
            if(this.currentTimeout) {
                clearTimeout(this.currentTimeout);
            }

            this.currentTimeout = setTimeout(() => {
                this.mensagem = undefined;
            }, 30000);
        }
    }

    private montarClasses(tipo: string) {
        this.classesCss = {
            'alert': true
        };

        this.classesCss['alert-' + tipo] = true;
    }
}