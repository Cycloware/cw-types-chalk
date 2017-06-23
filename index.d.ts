/**
 * Modified type definitions for `chalk` `1.1.3`
 * that allows passing `number`, `boolean` and `any` like the
 * javascript API.  Original typings could only handle `string` and
 * `any`.
 */

export = Chalk;

declare namespace Chalk {
  export var enabled: boolean;
  export var supportsColor: boolean;
  export var styles: ChalkStyleMap;

  export function stripColor(value: string): any;
  export function hasColor(str: string): boolean;

  type TColorable = string | number | boolean | any;

  export interface ChalkChain extends ChalkStyle {
    (): boolean;
    (...text: TColorable[]): string;
  }

  export interface ChalkStyleElement {
    open: string;
    close: string;
  }

  // General
  export var reset: ChalkChain;
  export var bold: ChalkChain;
  export var dim: ChalkChain;
  export var italic: ChalkChain;
  export var underline: ChalkChain;
  export var inverse: ChalkChain;
  export var hidden: ChalkChain;
  export var strikethrough: ChalkChain;

  // Text colors
  export var black: ChalkChain;
  export var red: ChalkChain;
  export var green: ChalkChain;
  export var yellow: ChalkChain;
  export var blue: ChalkChain;
  export var magenta: ChalkChain;
  export var cyan: ChalkChain;
  export var white: ChalkChain;
  export var gray: ChalkChain;
  export var grey: ChalkChain;

  // Background colors
  export var bgBlack: ChalkChain;
  export var bgRed: ChalkChain;
  export var bgGreen: ChalkChain;
  export var bgYellow: ChalkChain;
  export var bgBlue: ChalkChain;
  export var bgMagenta: ChalkChain;
  export var bgCyan: ChalkChain;
  export var bgWhite: ChalkChain;


  export interface ChalkStyle {
    // General
    reset: ChalkChain;
    bold: ChalkChain;
    dim: ChalkChain;
    italic: ChalkChain;
    underline: ChalkChain;
    inverse: ChalkChain;
    hidden: ChalkChain;
    strikethrough: ChalkChain;

    // Text colors
    black: ChalkChain;
    red: ChalkChain;
    green: ChalkChain;
    yellow: ChalkChain;
    blue: ChalkChain;
    magenta: ChalkChain;
    cyan: ChalkChain;
    white: ChalkChain;
    gray: ChalkChain;
    grey: ChalkChain;

    // Background colors
    bgBlack: ChalkChain;
    bgRed: ChalkChain;
    bgGreen: ChalkChain;
    bgYellow: ChalkChain;
    bgBlue: ChalkChain;
    bgMagenta: ChalkChain;
    bgCyan: ChalkChain;
    bgWhite: ChalkChain;
  }

  export interface ChalkStyleMap {
    // General
    reset: ChalkStyleElement;
    bold: ChalkStyleElement;
    dim: ChalkStyleElement;
    italic: ChalkStyleElement;
    underline: ChalkStyleElement;
    inverse: ChalkStyleElement;
    hidden: ChalkStyleElement;
    strikethrough: ChalkStyleElement;

    // Text colors
    black: ChalkStyleElement;
    red: ChalkStyleElement;
    green: ChalkStyleElement;
    yellow: ChalkStyleElement;
    blue: ChalkStyleElement;
    magenta: ChalkStyleElement;
    cyan: ChalkStyleElement;
    white: ChalkStyleElement;
    gray: ChalkStyleElement;

    // Background colors
    bgBlack: ChalkStyleElement;
    bgRed: ChalkStyleElement;
    bgGreen: ChalkStyleElement;
    bgYellow: ChalkStyleElement;
    bgBlue: ChalkStyleElement;
    bgMagenta: ChalkStyleElement;
    bgCyan: ChalkStyleElement;
    bgWhite: ChalkStyleElement;
  }

  export const constructor: {
    new (options: { enabled: boolean }): Chalk;
  }

  export interface Chalk extends ChalkStyle {
    enabled: boolean;
  }
}
