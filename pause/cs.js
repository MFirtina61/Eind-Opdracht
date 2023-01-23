var isPaused = false
            document.addEventListener('keyup', function(e) { if(e.which === 32 && isGameOver == false)(isPaused)
                ? resumeGame() :  pauseGame(); });

            function pauseGame()
            {
                clearInterval(interval);
                isPaused = true;
                canvas.style.opacity = 0,5;
                canvasContext.font = "90px tahoma";
                canvasContext.fillStyle = "white"
                canvasContext.textAlign = "center";
                canvasContext.textBaseline = "middel";
                canvasContext.fillText("game Paused", 40, 25);
            }

            function gameOver()
            {
               isGameOver = true;
               canvas.style.opacity = 0.5; 
               canvasContext.font = "90px tahoma";
               canvasContext.fillStyle = "white"
               canvasContext.textAlign = "center";
               canvasContext.textBaseline = "middel";
               canvasContext.fillText("Game Over", 40, 17);
               canvasContext.fillText("You Score", score, 40, 33);
            }

            function resumeGame()
            {
                isPaused = false
                canvasContext.clearRect(0, 0, canvas.width, canvas.height);
                canvas.style.opacity = 1;
                interval = setInterval(runGame, 20);
            }

            function runGame()

            <canvas id="game" width="800" height="500"></canvas>
<script>
    var canvas = document.getElementById("gp");
    var canvasContext = canvas.getContext("2d");

    var frameNumber = 0;
    var score = 0 

    var isPaused = false

    var spacecraftX = 20;
    var spacecraftY = 120;
    var spacecraftWidth = 40;

</script>

function setup() {
    createCanvas(200, 200);
    button = createButton("play");
    button.mousPressed(toggelplaying)
    background(51);
}

function loaded() {
    console.log("loaded");
}

function toggelplaying() {
    if (!Gamepad.isPlaying()) {
        Gameplad.play();
        button.html("pause");
    } else {
        game.pause();
        button.html("play");
    }
    
}

var isPaused = false
document.addEventListener('keyup', function(e) { if(e.which === 32 && isGameOver == false)(isPaused)
    ? resumeGame() :  pauseGame(); });

function pauseGame()
{
    clearInterval(interval);
    isPaused = true;
    canvas.style.opacity = 0,5;
    canvasContext.font = "90px tahoma";
    canvasContext.fillStyle = "white"
    canvasContext.textAlign = "center";
    canvasContext.textBaseline = "middel";
    canvasContext.fillText("game Paused", 40, 25);
}

function gameOver()
{
    isGameOver = true;
    canvas.style.opacity = 0.5; 
    canvasContext.font = "90px tahoma";
    canvasContext.fillStyle = "white"
    canvasContext.textAlign = "center";
    canvasContext.textBaseline = "middel";
    canvasContext.fillText("Game Over", 40, 17);
    canvasContext.fillText("You Score", score, 40, 33);
}

function resumeGame()
{
    isPaused = false
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.opacity = 1;
    interval = setInterval(runGame, 20);
}

function runGame()


    