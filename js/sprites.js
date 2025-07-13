const gravity = 0.2

class Sprite {
    constructor({position, velocity, dimesions}){

        this.position = position
        this.velocity = velocity
        this.width = dimesions.width
        this.height = dimesions.height
    }
    draw(){
        ctx.fillStyle = "white"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(){
        

        if (this.position.y+this.height >= canvas.height){
            this.velocity.y = canvas.height - (this.position.y+this.height)
        } else{
            this.velocity.y += gravity
        }
        
        this.position.x += this.velocity.x 
        this.position.y += this.velocity.y

        this.draw()
    }
};

const player = new Sprite({
    position: {
        x: 100,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    },
    dimesions:{
        width: 50,
        height: 150
    }
})