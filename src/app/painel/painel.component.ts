import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0

  constructor() {
    this.atualizarRodada()
  }

  ngOnInit() {
  }

  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  public verificarResposta(): void {
    // console.log('Verificar resposta: ', this.resposta)
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta.')

      //Incrementa rodada
      this.rodada++
      
      //Atualiza o objeto da rodada
      this.atualizarRodada()

      //Atualiza Progresso
      this.progresso = this.progresso + (100 / this.frases.length)

      // Limpar a respota
      
    } else {
      alert('A tradução está errada')
    }

  }
  
  public atualizarRodada():void{
    // Define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada]
    // Limpar a respota
    this.resposta=""

  }
}
