import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-cta-button',
  template: `
    <button class="cta-button">
      <ng-lottie [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>
      <span class="cta-text">APROVEITAR AGORA</span>
    </button>
  `,
  standalone: true,
  imports: [LottieComponent],
  styles: [`
    :host {
      animation: heartbeat 1.5s ease-in-out infinite;
    }

    .cta-button {
      position: relative;
      color: #fff;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 15px 30px;
      font-size: 1.2rem;
      background-color: transparent;
      font-weight: bold;
      text-transform: uppercase;
      transition: background-color 0.3s ease;
    }

    .cta-button:hover {
      background-color: #218838;
    }

    ng-lottie {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      pointer-events: none;
      z-index: 0;
    }

    .cta-text {
      position: relative;
      z-index: 1;
    }

    @keyframes heartbeat {

    0%,
    100% {
      transform: scale(1);
    }

    30%,
    70% {
      transform: scale(1.05);
    }
  }
  `]
})
export class CtaButtonComponent {
  options: AnimationOptions = {
    path: '/assets/animation.json',
    loop: true,
    autoplay: true,
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log('Animação criada:', animationItem);
  }
}
