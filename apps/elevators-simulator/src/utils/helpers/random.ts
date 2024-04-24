// Todo: you have one stock you can buy and sell once to have maximum profit
// Note: write a function in js that returns the low price to buy and the high price to sell

export const maxProfit = (stock: Array<number>) => {
  if (stock.length < 2) return null;

  let minPrice = stock[0];
  let maxProfit = 0;

  let sellPrice = 0;

  for (let i = 1; i < stock.length; i++) {
    if (stock[i] < minPrice) {
      minPrice = stock[i];
    }

    let currentPrice = stock[i] - minPrice;

    if (currentPrice > maxProfit) {
      maxProfit = currentPrice;
      sellPrice = stock[i];
    }
  }
  return {
    sellPrice,
    buyPrice: minPrice,
    maxProfit,
  };
};

// Todo: Find a peak element which is not smaller than its neighbours
export const findPeak = (array: Array<number>) => {
  let result: Array<number> = [];
  for (let i = 0; i <= array.length; i++) {
    if (i === 0 && array[i + 1] < array[i]) result.push(array[i]);
    else if (array[i - 1] <= array[i] && array[i + 1] <= array[i])
      result.push(array[i]);
    else if (i === array.length && array[i - 2] < array[i - 1])
      result.push(array[i - 1]);
  }
  return result;
};

// Todo: sort an array in ascending order
export const sortArray = (array: Array<number>) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= array[i + 1]) {
      let change = array[i];
      array[i] = array[i + 1];
      array[i + 1] = change;
    }
  }
  return array;
};

// Todo: write a class that reset array
export class MyArray {
  private _number: any[] = [];
  private isReset: boolean = false;
  private resetValue: any;

  // Getter for accessing elements by index
  get(arrayIndex: number): any {
    // If the array has been reset, return the reset value
    if (this.isReset) {
      return this.resetValue;
    }
    return this._number[arrayIndex];
  }

  // Setter for setting elements by index
  set(arrayIndex: number, value: any): void {
    this._number[arrayIndex] = value;
    // Reset flag when a value is set
    this.isReset = false;
  }

  // Method for resetting all elements in the array
  resetArray(value: any): void {
    this.isReset = true;
    this.resetValue = value;
  }
}
