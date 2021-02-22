import { Component, OnInit } from '@angular/core';
import { KeyboardSettings } from 'src/app/interfaces/keyboard/keyboard-settings';

@Component({
  selector: 'std-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  keyboard: KeyboardSettings[] = [
    {
      cols: 4,
      rowHeight: '4.1em',
      rows: [
        {
          pos: 1,
          color: 'accent',
          val: '%',
          isOperation: true,
        },
        {
          pos: 2,
          color: 'accent',
          val: 'CE',
          isOperation: true,
        },
        {
          pos: 3,
          color: 'accent',
          val: 'C',
          isOperation: true,
        },
        {
          pos: 4,
          color: 'accent',
          val: 'DEL',
          isOperation: true,
        },
      ],
    },
    {
      cols: 4,
      rowHeight: '4.1em',
      rows: [
        {
          pos: 1,
          color: 'accent',
          val: '1/x',
          isOperation: true,
        },
        {
          pos: 2,
          color: 'accent',
          val: 'x²',
          isOperation: true,
        },
        {
          pos: 3,
          color: 'accent',
          val: '√x',
          isOperation: true,
        },
        {
          pos: 4,
          color: 'accent',
          val: '÷',
          isOperation: true,
        },
      ],
    },
    {
      cols: 4,
      rowHeight: '4.1em',
      rows: [
        {
          pos: 1,
          color: 'primary',
          val: 7,
          isOperation: false,
        },
        {
          pos: 2,
          color: 'primary',
          val: 8,
          isOperation: false,
        },
        {
          pos: 3,
          color: 'primary',
          val: 9,
          isOperation: false,
        },
        {
          pos: 0,
          color: 'accent',
          val: 'x',
          isOperation: true,
        },
      ],
    },
    {
      cols: 4,
      rowHeight: '4.1em',
      rows: [
        {
          pos: 1,
          color: 'primary',
          val: 4,
          isOperation: false,
        },
        {
          pos: 2,
          color: 'primary',
          val: 5,
          isOperation: false,
        },
        {
          pos: 3,
          color: 'primary',
          val: 6,
          isOperation: false,
        },
        {
          pos: 0,
          color: 'accent',
          val: '-',
          isOperation: true,
        },
      ],
    },
    {
      cols: 4,
      rowHeight: '4.1em',
      rows: [
        {
          pos: 1,
          color: 'primary',
          val: 1,
          isOperation: false,
        },
        {
          pos: 2,
          color: 'primary',
          val: 3,
          isOperation: false,
        },
        {
          pos: 3,
          color: 'primary',
          val: 3,
          isOperation: false,
        },
        {
          pos: 0,
          color: 'accent',
          val: '+',
          isOperation: true,
        },
      ],
    },
    {
      cols: 4,
      rowHeight: '4.1em',
      rows: [
        {
          pos: 1,
          color: 'primary',
          val: '+/-',
          isOperation: true,
        },
        {
          pos: 2,
          color: 'primary',
          val: 0,
          isOperation: false,
        },
        {
          pos: 3,
          color: 'primary',
          val: ',',
          isOperation: false,
        },
        {
          pos: 0,
          color: 'warn',
          val: '=',
          isOperation: true,
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
