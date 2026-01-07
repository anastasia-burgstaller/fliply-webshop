import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-success',
  imports: [
    RouterLink
  ],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css',
})
export class SuccessComponent {
  @ViewChild('successSound') sound!: ElementRef<HTMLAudioElement>;

  playSound() {
    this.sound.nativeElement.play();
  }

}
