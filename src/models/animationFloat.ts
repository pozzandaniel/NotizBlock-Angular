

export class AnimationFloat {
    ctx;
    width;
    height;
    animationFrame;
    cellSize;
    lastTime;
    interval;
    timer;
    gradient;
    radius;
    velocityRadius;

    mouse = {
        'x': 0,
        'y': 0
    }

    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.ctx.lineWidth = 1;
        this.width = width;
        this.height = height;
        this.lastTime = 0;
        this.interval = 1000/60;
        this.timer = 0;
        this.cellSize = 15;
        this.gradient;
        this.createGradient();
        this.ctx.strokeStyle = this.gradient;
        this.radius = 0;
        this.velocityRadius = 0.03;
    }

    createGradient() {
        this.gradient = this.ctx.createLinearGradient(0, 0, this.width, this.height);
        this.gradient.addColorStop('0.1', '#ff5c33');
        this.gradient.addColorStop('0.2', '#ff66b3');
        this.gradient.addColorStop('0.4', '#ccccff');
        this.gradient.addColorStop('0.6', '#b3ffff');
        this.gradient.addColorStop('0.8', '#80ff80');
        this.gradient.addColorStop('0.9', '#ffff33');
    }

    draw(angle, x, y) {
        const length = 15;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length );
        this.ctx.stroke();
        
    }

    animate(timeStamp) {
        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        if(this.timer > this.interval){
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.radius += this.velocityRadius;
            if(this.radius > 5 || this.radius < -5) this.velocityRadius *= -1;
            for(let y = 0;  y < this.height; y += this.cellSize) {
                for(let x = 0; x < this.width; x += this.cellSize) {
                    const angle = ((Math.cos(x * 0.01) + Math.sin(y * 0.01))*this.radius);
                    this.draw(angle, x, y);
                }
            }
            this.timer = 0;
        } else {
            this.timer += deltaTime;
        }
        this.animationFrame = requestAnimationFrame(this.animate.bind(this));
    
    }

    

}