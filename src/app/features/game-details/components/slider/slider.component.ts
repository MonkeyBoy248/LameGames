import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Screenshot} from "../../../../shared/interfaces/game";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {
  slideWidth: number;

  constructor(private renderer: Renderer2) { }

  @ViewChild('slides') slides: ElementRef;

  ngOnInit (): void {
  }

  ngAfterViewInit () {
    this.slideWidth = this.slides.nativeElement.offsetWidth ;
    this.moveToActiveSlide();
  }

  moveToActiveSlide () {
    const offset = -this.slideWidth * this.activeSlideIndex;
    this.renderer.setStyle(this.slides.nativeElement, 'transform', `translateX(${offset}px)`);
    console.log('offset', offset);
  }

  selectActiveSlide (index: number) {
    this.activeSlideIndex = index;
    this.moveToActiveSlide();
    console.log('active now', this.activeSlideIndex);
    console.log('width', this.slideWidth);
  }

  showPreviousSlide () {
    this.activeSlideIndex--;
    this.moveToActiveSlide();
  }

  showNextSlide () {
    this.activeSlideIndex++;
    this.moveToActiveSlide();
  }

  @Input() screenshots: Screenshot[];
  @Input() activeSlideIndex: number;
}
