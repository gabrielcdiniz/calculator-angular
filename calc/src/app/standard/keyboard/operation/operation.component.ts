import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'std-key-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
  @Input() val!: number | string;
  @Input() color!: ThemePalette;

  constructor() { }

  ngOnInit(): void {
  }

}
