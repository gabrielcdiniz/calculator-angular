import { ThemePalette } from "@angular/material/core";

export interface KeyboardRow {
    pos: number;
    val: number | string;
    color: ThemePalette;
    isOperation: boolean;
}
