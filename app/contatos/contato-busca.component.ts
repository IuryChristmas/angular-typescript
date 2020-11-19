import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contato } from './contato.model';
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html',
})
export class ContatoBuscaComponent implements OnInit {

    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();

    constructor(private contatoService: ContatoService) { }

    ngOnInit() {
        this.termosDaBusca.debounceTime(300)
            .subscribe(term => {
                this.contatos =  term ? this.contatoService.search(term) : Observable.of<Contato[]>([]);

                this.contatos.subscribe((contatos: Contato[]) => {
                    console.log('retornou do servidor', contatos);
                });
            });
    }

    search(termo: string): void {
        this.termosDaBusca.next(termo);
    }

}