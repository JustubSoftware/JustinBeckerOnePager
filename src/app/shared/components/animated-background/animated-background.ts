import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  HostListener
} from '@angular/core';
import { Particle } from './particle';


@Component({
  selector: 'app-animated-background',
  standalone: false,
  templateUrl: './animated-background.html',
  styleUrl: './animated-background.scss'
})
export class AnimatedBackground implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrameId!: number;
  private canvas!: HTMLCanvasElement;

  ngAfterViewInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.resizeCanvas();
    this.initParticles();
    this.animate();
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeCanvas();
    this.initParticles();
  }

  private resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private initParticles(count: number = 80) {
    this.particles = Array.from({ length: count }, () => new Particle(this.canvas));
  }

  private animate = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const particle of this.particles) {
      particle.update();
      particle.draw(this.ctx);
    }
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrameId);
  }

  private mouse = {
    x: 0,
    y: 0,
    radius: 500 // Einflussradius für Reaktion
  };

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  }
}
