import { Component, OnChanges, OnInit, HostListener } from '@angular/core';
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
  main;


  

  @HostListener('mousemove', ['$event'])
    onMousemove(event: MouseEvent) {
      this.animation.mouse.x = event.x;
      this.animation.mouse.y = event.y;
  }

  
  ngOnInit(): void {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.main = document.getElementById('main');
    this.ctx = this.canvas?.getContext('2d');
    this.canvas.width = this.main.offsetWidth;
    this.canvas.height = window.innerHeight;
    this.animation = new AnimationFloat(this.ctx, this.canvas.width, this.canvas.height);
    this.animation.animate(0);
    
  }
  
  ngOnChanges(): void {
    
    
    
    
  }
  
  onResize(event) {
    cancelAnimationFrame(this.animation.animationFrame);
    this.canvas.width = this.main.offsetWidth;
    this.canvas.height = window.innerHeight;
    this.animation = new AnimationFloat(this.ctx, this.canvas.width, this.canvas.height);
    this.animation.animate(0);
  }
  
 
 
}
