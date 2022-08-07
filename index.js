/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let metaBalls = []


let numberBlobs = canvas.width / 10

 

 function init(){
    for(let i = 0; i < numberBlobs; i++){
        let x = Math.random() * canvas.width ;
        let y = -5;
        metaBalls.push(new Ball(x, y))
    }
 }
init()
function animate(){
ctx.clearRect(0, 0, canvas.width, canvas.height)

for(let i = 0; i< metaBalls.length; i++){
metaBalls[i].draw()
metaBalls[i].update()
metaBalls[i].edges()
}
requestAnimationFrame(animate)
}
animate()

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    metaBalls = []
    init();
    
    
})