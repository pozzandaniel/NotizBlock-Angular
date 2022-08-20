export class AnimationFloat {
    ctx;
    width;
    height;
    animationFrame;
    angle;

    

    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.ctx.strokeStyle = 'white';
        this.width = width;
        this.height = height;
        this.angle = 0;
      
      
      
    }

    draw(x, y) {
        const length = 500;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + length, y + length);
        this.ctx.stroke();
        
    }

    animate() {
        this.angle += 0.1;
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.draw(this.width/2 + Math.sin(this.angle) * 130, this.height/2 + Math.cos(this.angle)* 130);
        this.animationFrame = requestAnimationFrame(this.animate.bind(this));
    
    }

    

}