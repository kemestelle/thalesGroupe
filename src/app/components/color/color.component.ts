import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'black';
  bgc = this.defaultColor;
  constructor() {}

  ngOnInit(): void {}
  changeColor(color: string): void {
    this.bgc = color;
  }
}
