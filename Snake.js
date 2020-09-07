(function () {

window.onload = function () {   
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    
    document.addEventListener("keydown", function (e) {
        console.log(e)
        switch(e.keyCode) {
            case 37:
                velX = -1
                velY = 0
                break
            case 38:
                velX = 0
                velY = -1
                break
            case 39:
                velX = 1
                velY = 0
                break
            case 40:
                velX = 0
                velY = 1
                break
        }
    })
    
    setInterval(jogo, 1000/10)
}

snake = []
positionX = 11
positionY = 11
foodX = 11
foodY = 11
velX = 0
velY = 0
grid = 22

function jogo () {
    positionX += velX
    positionY += velY

    if (positionX < 0) {
        positionX = 21
    } 

    if (positionX > 21) {
        positionX = 0
    } 

    if (positionY < 0) {
        positionY = 21
    } 

    if (positionY > 21) {
        positionY = 0
    } 
    
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "white"
    for (var i = 0; i < snake.length; i++) {
            ctx.fillRect(snake[i].x * grid, snake[i].y * grid, grid -1, grid -1)
            if (snake[i].x == positionX && snake[i].y == positionY) {
                
                tamanho = 3
            }
    }

    snake.push({x: positionX, y: positionY})

    while(snake.length > tamanho) {
        snake.shift()
    }

    ctx.fillStyle = "red"
    ctx.fillRect(foodX * grid, foodY * grid, grid -1, grid -1)

    if (positionX == foodX && positionY == foodY) {
        tamanho++
        foodX = Math.floor(Math.random() * grid)
        foodY = Math.floor(Math.random() * grid)
    }
}

}) ()
