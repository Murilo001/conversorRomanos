package br.com.caelum.leilao.servico;

import br.com.caelum.leilao.dominio.Leilao;
import br.com.caelum.leilao.dominio.Lance;

public class Avaliador {
	
	private Lance maiorLance = null;
	
	private Lance menorLance = null;
	
	public void avaliar(Leilao leilao) {
		for (Lance lanceAtual : leilao.getLances()) {
			if (this.maiorLance == null || lanceAtual.getValor() > this.maiorLance.getValor()) {
				this.maiorLance = lanceAtual;
			} 
			if (this.menorLance == null || lanceAtual.getValor() < this.menorLance.getValor()) {
				this.menorLance = lanceAtual;
			}
		}
	}
	
	public Lance getMaiorLance() {
		return this.maiorLance;
	}
	
	public Lance getMenorLance() {
		return this.menorLance;
	}
}
