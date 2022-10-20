import { SortingAlgorithm } from "./SortingAlgorithm";

export class SelectionSort extends SortingAlgorithm {
  private min: number;

  constructor(array: number[]) {
    super(array);
    this.min = this.array.indexOf(Math.min(...this.array));
    this.selected = [this.step, this.min];
  }

  executeStep(): void {
    if (this.step != this.min) this.array = this.swap(this.step, this.min);

    this.step++;
    if (this.step > this.arrayLength) {
      this.step = 0;
    }

    this.min = this.step;

    for (let j = this.step + 1; j < this.arrayLength; j++) {
      if (this.array[this.min] > this.array[j]) {
        this.min = j;
      }
    }

    this.selected = [this.step, this.min];
  }
}
