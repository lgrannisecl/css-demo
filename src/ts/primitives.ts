const str: string = 'hello';
const num: number = 10;
const big: bigint = BigInt(Number.MAX_VALUE);
const bool: boolean = false;
const und: undefined = undefined;
const sym: Symbol = Symbol('ten');
const nul: null = null;
let hello: 'hello' = 'hello';
hello = 'hello';

type Option = {
  name: 'string',
  value: string | number
}

const setting: Option | 'auto' = 'auto';

export default {};
