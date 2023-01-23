p1y=p2y=40;
pt=10;
ph=100;
bx=by=50;
bd=6;
xv=yv=4;
score1 =score2=0;
ais=2;
isGameOver = false;
isPaused = false;
interval = -1;


window.onload=function(){
    c=document.getElementById('gc');
    cc=c.getContext('2d');
    c.addEventListener('mousemove',function(e){
        p1y = e.offsetY;
        console.log(p1y);
    });
    resumeGame();



}
function reset(){
    bx=c.width/2;
    by=c.height/2;
    xv=xv;
    yv=3;
}
function update(){
    bx+=xv;
    by+=yv;
    if(by<0 && yv<0) {
        yv=-yv;
    }
    if(by>c.height && yv>0) {
        yv=-yv;
    }
    if(bx<0) {
        if(by>p1y && by<p1y+ph){
            xv=-xv;
            dy=by-(p1y+ph/2);
            yv = dy*0.3; 
             
        } else{
            score2++;
            reset();
        }
    }
    if(bx>c.width) {
        if(by>p2y && by<p2y+ph){
            xv=-xv;
            dy=by-(p2y+ph/2);
            yv = dy*0.3; 
             
        } else{
            score1++;
            reset();
        }
    }

    if(p2y+ph/2<by){
        p2y+=ais;
    } else {
        p2y-=ais
    }

    cc.fillStyle='#525252';
    cc.fillRect(0,0,c.width,c.height);
    cc.fillStyle='#fff';
    cc.fillRect(0,p1y,pt,ph);
    cc.fillRect(c.width-pt,p2y,pt,ph);
    cc.fillRect(bx-bd/2,by-bd/2,bd,bd)
    cc.textAlign ="left";
    cc.textBaseline ="top"
    cc.fillText(score1,100,100);
    cc.fillText(score2,c.width-100,100);

}

var isPaused = false
document.addEventListener('keyup', function(e)
 { 
    
    if(e.keyCode === 32 && isGameOver == false)
    {
        isPaused    ? resumeGame() :  pauseGame();
    }
 });

function pauseGame()
{
    clearInterval(interval);
    isPaused = true;
    c.style.opacity = 0,5;
    cc.font = "9px tahoma";
    cc.fillStyle = "white"
    cc.textAlign = "center";
    cc.textBaseline = "middel";
    cc.fillText("game Paused", 40, 25);
    
}

function gameOver()
{
    isGameOver = true;
    c.style.opacity = 0.5; 
    cc.font = "9px tahoma";
    cc.fillStyle = "white"
    cc.textAlign = "center";
    cc.textBaseline = "middel";
    cc.fillText("Game Over", 40, 17);
    cc.fillText("Your Score" + score1, 40, 33);
}

function resumeGame()
{
    isPaused = false
    cc.clearRect(0, 0, c.width, c.height);
    c.style.opacity = 1;
    interval=setInterval(update,1000/30);
}

 //runGame()