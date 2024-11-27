import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  public screenHeight?: number;  
  public thirdScreenHeight?: number;
    
  ngOnInit() {  
      this.screenHeight = window.innerHeight-176;
      this.thirdScreenHeight = this.screenHeight/3;
  }  
    
  @HostListener('window:resize', ['$event'])  
  onResize() { 
    this.screenHeight = window.innerHeight-176;
    this.thirdScreenHeight = this.screenHeight/3;
  } 
}
