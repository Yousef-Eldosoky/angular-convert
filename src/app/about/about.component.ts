import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
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
