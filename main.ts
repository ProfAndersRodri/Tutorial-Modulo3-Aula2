controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Tony_Shark.sayText("Olá! eu sou o Tony Shark!")
})
let Tony_Shark: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(assets.image`Cenario`)
Tony_Shark = sprites.create(assets.image`Tony_Shark`, SpriteKind.Player)
Tony_Shark.sayText("Aperte obotão A para iniciar!")
controller.moveSprite(Tony_Shark)
Tony_Shark.setStayInScreen(true)
