// merge.ts

export function merge(collection1: number[], collection2: number[]): number[] {
    let result: number[] = [];
    let i = 0;
    let j = 0;
  
    while (i < collection1.length && j < collection2.length) {
      if (collection1[i] < collection2[j]) {
        result.push(collection1[i]);
        i++;
      } else {
        result.push(collection2[j]);
        j++;
      }
    }
  
    // If there are remaining elements in collection1 or collection2, add them to the result
    while (i < collection1.length) {
      result.push(collection1[i]);
      i++;
    }
  
    while (j < collection2.length) {
      result.push(collection2[j]);
      j++;
    }
  
    return result;
  }