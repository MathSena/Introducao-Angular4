import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizarRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    
  }

  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  public verificarResposta(): void {
    // console.log('Verificar resposta: ', this.resposta)
    if (this.rodadaFrase.frasePtBr == this.resposta) {

      //Incrementa rodada
      this.rodada++

      // Informando vitória
      if(this.rodada === 5){
        this.encerrarJogo.emit('vitoria')
  
      }
      
      //Atualiza o objeto da rodada
      this.atualizarRodada()

      //Atualiza Progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      
    } else {
      this.tentativas--

      if(this.tentativas===-1){
        this.encerrarJogo.emit('derrota')

      }else{

      }
    }

  }
  
  public atualizarRodada():void{
    // Define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada]
    // Limpar a respota
    this.resposta=""

  }
}
