import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'std-key-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  @Input() val!: number | string;
  @Input() color!: ThemePalette;

  constructor() { }

  ngOnInit(): void {
  }

}
