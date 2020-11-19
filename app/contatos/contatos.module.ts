import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContatoBuscaComponent } from './contato-busca.component';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoService } from './contato.service';
import { ContatosListaComponent } from './contatos-lista.component';

@NgModule({
    imports: [
        CommonModule,
        ContatoRoutingModule,
        FormsModule,
    ],
    declarations: [
        ContatoBuscaComponent,
        ContatosListaComponent,
        ContatoDetalheComponent,
    ],
    exports: [
        ContatoBuscaComponent,
        ContatosListaComponent,
        ContatoDetalheComponent,
    ],
    providers: [
        ContatoService,
    ]
})
export class ContatosModule {

}