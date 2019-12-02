package br.com.caelum.leilao.teste;

import org.junit.Assert;
import org.junit.Test;

import br.com.caelum.leilao.dominio.Lance;
import br.com.caelum.leilao.dominio.Leilao;
import br.com.caelum.leilao.dominio.Usuario;
import br.com.caelum.leilao.servico.Avaliador;

public class TesteAvaliador {

	@Test
	public void entenderLancesEmOrdemCrescente() {
		Usuario joao = new Usuario("João");
		Usuario alice = new Usuario("Alice");
		Usuario manuel = new Usuario("Manuel");
		
		Leilao leilao = new Leilao("Vaca leiteira gorda");
	
		Lance menorLance = new Lance(joao, 300.0);
		Lance maiorLance = new Lance(joao, 3000.0);
		leilao.propoe(menorLance);
		leilao.propoe(new Lance(alice, 1500.0));
		leilao.propoe(maiorLance);
		leilao.propoe(new Lance(manuel, 3000.0));
		
		Avaliador leiloeiro = new Avaliador();
		leiloeiro.avaliar(leilao);
		
		Assert.assertEquals(leiloeiro.getMaiorLance(), maiorLance);
		Assert.assertEquals(leiloeiro.getMenorLance(), menorLance);
	}
}
