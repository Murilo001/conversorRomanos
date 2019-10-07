# O Guia do Desenvolvedor
O primeiro passo para ser um desenvolvedor é definir as variáveis com o menor nome possível para economizar espaço na memória, exemplo: 
```
    function a(b) {
        c = b*b
        return c;
    }
```
Bricandeiras à parte, com o exemplo acima é fácil entender porque é necessário um guia de desenvolvedor, mas você pode pensar: "isso não acontece onde trabalho, ninguém declara variáveis e funções dessa forma". Realmente é difícil ver um exemplo desses, mas existem muitos outros casos sutís que levam o mesmo conceito.

Por exemplo, em JavaScript, temos partes de programação funcional focadas em arrays como o "map". Um exemplo comum de se encontrar é:

```
    let nomes = pessoas.map(a => {
            return a.nome 
        })
```
Nesse exemplo, apesar do "a" incomodar alguns, pode-se chegar à conclusão, que todos os objetos pessoas estão sendo transformados em apenas nomes. Mas o que seria o nome? Um nome completo? O primeiro nome? O último nome + primeiro nome?

Com nomes muito curtos é difícil inferir do que se trata a variável, mesmo que a primeira vista pareça trivial acaba causando dificuldades na legibilidade.

E é com base nisso que começamos nosso "Guia do Desenvolvedor", demonstrando boas práticas de desenvolvimento em prol de uma fácil manutenção do software, tanto para outros desenvolvedores quanto para si mesmo no futuro.