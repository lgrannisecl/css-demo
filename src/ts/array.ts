const anyArr: any[] = [undefined, 0, 'ten'];
const numArr: number[] = [0];
const mixedArr: (number | string) [] = [1, 'ten'];
type numOrStr = number | string;
const mixed2Arr: numOrStr[] = [1, 'ten'];

export default {
  anyArr,
  numArr
}

