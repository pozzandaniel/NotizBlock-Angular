import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AnimationFloat } from 'src/models/animationFloat'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'todolistAngular';
  canvas;
  ctx; 
  animation;

  mouse = {
    X: 0,
    y: 0,
  }

 

  
  ngOnInit(): void {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.ctx = this.canvas?.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.animation = new AnimationFloat(this.ctx, this.canvas.width, this.canvas.height);
    this.animation.animate();
    
  }
  
  ngOnChanges(): void {
  
    
    
    
  }
  
  onResize(event) {
    cancelAnimationFrame(this.animation.animationFrame);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.animation = new AnimationFloat(this.ctx, this.canvas.width, this.canvas.height);
    this.animation.animate();
  }
  

 
}
