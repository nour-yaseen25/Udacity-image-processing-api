import _ from 'lodash';

declare module 'lodash' {
  interface LoDashStatic {
    multiply(multiplier: number, multiplicand: number): number;
  }
}
//as defines in node_modules/lodash/common/math.d.ts
