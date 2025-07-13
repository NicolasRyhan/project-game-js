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
        

        if (this.position.y+this.height > canvas.height){
            this.position.y = canvas.height - this.height
            this.velocity.y = 0
        } else{
            this.velocity.y += gravity
        }
        
        this.position.x += this.velocity.x 
        this.position.y += this.velocity.y

        this.draw()
    }
};

class Fighter extends Sprite {
    constructor({
        position,
        velocity,
        dimesions
    }){
        super({
            position,
            velocity,
            dimesions
        })

    this.velocity = velocity
    this.width = dimesions.width
    this.height = dimesions.height

    this.lastKeyPressed

    }

}

const player = new Fighter({
    position: {
        x: 100,
        y: 0
    },
    velocity: {
        x: 0,
        y: 10
    },
    dimesions:{
        width: 50,
        height: 150
    }
})

const player2 = new Fighter({
    position: {
        x: 500,
        y: 20
    },
    velocity: {
        x: 0,
        y: 0
    },
    dimesions:{
        width: 50,
        height: 200
    }
})