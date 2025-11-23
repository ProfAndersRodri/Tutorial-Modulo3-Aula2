# 🦈 Tony Shark: O Rei Tubarão Parte 2

## por [Prof. Anderson Rodrigues]

Neste tutorial, vamos continuar a criar nosso jogo simples no MakeCode Arcade criando avisos e falas do nosso Tony Shark.

---

## Passo 1: Vamos começar de onde paramos na nossa Aula 01

Nós ja tinhamos feito a cor do Cenário, a imagem do Cenário com algas, bolhas e movimento da água.

Colocamos nosso tubarão e demos o nome de Tony_Shark e fizemos que ele se movimente pela tela sem sair dela.

Vamos relembrar como ficou...

```blocks
scene.setBackgroundColor(9)
scene.setBackgroundImage(assets.image`Cenario`)
let Tony_Shark = sprites.create(assets.image`Tony_Shark`, SpriteKind.Player)
controller.moveSprite(Tony_Shark)
Tony_Shark.setStayInScreen(true)
```

Caso voce não lembre como fazer volte ao Tutorial da Aula 1 e faça o tutorial para aprender.

---

## Passo 2: Criar o aviso para o jogador.

Para que nosso personagem consiga interagir com os jogadores temos que criar avisos para os jogadores,
em nossos Sprites, assim os jogadores saberão o que fazer para iniciar o jogo.

* :paper plane: Na categoria **Sprites**, arraste o bloco **mySprite say (":)") (+)** para dentro do bloco **on start** abaixo do **set Tony_Shark to sprite [] kind (Player)** não esqueça de trocar a váriavel do Sprite para Tony_Shark.

* :pencil: Clique na **carinha feliz :)** e escreva **Aperte o botão A para iniciar!.** e aparecerá um balão com esta escrita em cima do Sprite.

* :mouse pointer: O balão com o aviso deve permanecer até que o botão **A** seja apertado mudando para fala como veremos adiante.

```blocks
scene.setBackgroundColor(9)
scene.setBackgroundImage(assets.image`Cenario`)
let Tony_Shark = sprites.create(assets.image`Tony_Shark`, SpriteKind.Player)
Tony_Shark.sayText("Aperte o botão A para Iniciar!")
controller.moveSprite(Tony_Shark)
Tony_Shark.setStayInScreen(true)
```

---

## Passo 3: Criar a apresentação do Tony_Shark (Sprite do Jogador)

Agora nosso personagem vai interagir com os jogadores se apresentando após o jogador apertar o botão **A** e iniciar o jogo.

* :paper plane: Na categoria **controller**, arraste o bloco **on A Button Pressed** para próximo do bloco **on start**

* :mouse pointer: Na categoria **Sprites**, arraste o bloco **mySprite say (":)") (+)** para dentro do bloco **on A Button Pressed**

* :pencil: Clique na **carinha feliz :)** e escreva **Olá meu nome é Tony Shark!.** e ao apertar o botão **A** o balão com esta escrita será trocado no Sprite.

* :plug: Fique ligado pois este balão com a apresentação do Tony Shark não pode permanecer ali pois ele irá atrapalhar na jogabilidade.

* :tree: Então para corrigir isso clicamos no sinal de **(+)** no final do bloco e ele abrirá outras opções, configure assim **for 2000** e **ms with animation (false)**.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite: Sprite = null
    mySprite.sayText("Olá meu nome é Tony Shark!.", 2000, false)
})
```
## Fim!

**Parabéns! Você concluiu a configuração de falas e avisos do jogo do Tony Shark - O Rei Tubarão.**

Na próxima aula vamos criar os movimentos do nosso Tony Shark com animações e deixar ele mais divertido.

AULA 02 - https://arcade.makecode.com/#tutorial:77265-32345-66064-24673