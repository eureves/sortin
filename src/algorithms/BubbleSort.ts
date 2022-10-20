import { SortingAlgorithm } from "./SortingAlgorithm";

export class BubbleSort extends SortingAlgorithm {
  private offset: number = 0;

  public executeStep() {
    if (this.array[this.step] > this.array[this.step + 1]) {
      this.array = this.swap(this.step, this.step + 1);
    }
    this.step++;
    if (this.step + 2 > this.arrayLength - this.offset) {
      this.offset++;
      this.step = 0;
    }
    this.selected = [this.step, this.step + 1];
  }

  public getArray(): number[] {
    return this.array;
  }

  public getSelected(): number[] {
    return this.selected;
  }
}
