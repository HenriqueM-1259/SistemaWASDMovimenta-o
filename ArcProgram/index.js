const canvas = document.getElementById("canvas");
const c = canvas.getContext('2d');


canvas.width = 480;
canvas.height = 270;
console.log(c)



class Player{
    constructor()
    {
        this.Altura = 10,
        this.Largura = 10,
        this.Gravity = 0.5,
        this.Colisao = {
            parede: false,
            chao: false
        }
       this.velocity = 0.9
        this.Pos = {
            x:10,
            y:10
        }
        
        
        
    }

    desenhar = () => {
       
        c.beginPath();
        c.fillStyle = 'green'
        c.fillRect(this.Pos.x,this.Pos.y,this.Altura,this.Largura)
        c.closePath();
    }

    Colider(){
    //verificar se está colidindo
    if((player.Pos.y + player.Altura > chao.pos.y))
    {   
        player.Colisao.chao = true; 
    }
    if((player.Pos.y + player.Altura < chao.pos.y))
    {   
        player.Colisao.chao = false; 
    }
    if((player.Pos.x - player.Largura) > chao.width)
    {   
        player.Colisao.chao = false; 
    }
    //se estiver colidindo ele para o personagem
    if(player.Colisao.chao == false){
        player.Pos.y = player.Pos.y + player.Gravity;
        
    } 
    if(player.Colisao.chao == true){
        player.Pos.y 
    }
    }
    Moviment(){
        document.body.addEventListener('keydown', function (event) {
            const key = event.key;
            const code = event.keyName;
            console.log(`Key: ${key}, Code ${code}`);
            if(key == "d"){
                
                player.Pos.x++
            }
            if(key == "a"){
                player.Pos.x--
            }
            if(key == "w")
            {
                if(player.Colisao.chao == true){
                    player.Pos.y = player.Pos.y -40
                }
                
            }
            if(key == 115){
                player.Pos.y++
            }
          });
    }


}
class Chao{
    constructor(){
        this.width = 100,
        this.height = 200,
        this.pos = {
            x:10,
            y:100
        },
        this.color = 'blue'


    }

    Desenhar(){
        c.beginPath();
        c.fillStyle = this.color
        c.fillRect(this.pos.x,this.pos.y,this.width,this.height)
        c.closePath();
    }
}
player = new Player();
chao = new Chao();
player.Moviment()
setInterval(function(){  
    c.clearRect(10,10,canvas.width,canvas.height);
    player.Colider()
    player.desenhar();
    chao.Desenhar();
}, 1)

console.log(player);
    
