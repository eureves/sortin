import { SortingAlgorithm } from "./SortingClass";

class BubbleSort extends SortingAlgorithm {
  private offset: number = 0;

  public executeStep() {
    if (this.step + 2 > this.arrayLength - this.offset) {
      this.offset++;
      this.step = 0;
    }
    if (this.array[this.step] > this.array[this.step + 1]) {
      this.array = this.swap(this.step, this.step + 1);
    }
    this.step++;
  }

  public getArray(): number[] {
    return this.array;
  }

  private swap(index1: number, index2: number) {
    const tempArr = [...this.array];
    const temp = tempArr[index1];
    tempArr[index1] = tempArr[index2];
    tempArr[index2] = temp;
    return tempArr;
  }
}

export default BubbleSort;
