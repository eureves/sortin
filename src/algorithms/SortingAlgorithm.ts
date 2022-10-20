export abstract class SortingAlgorithm {
  protected array: number[];
  protected arrayLength: number;
  protected step: number = 0;
  protected selected: number[] = [0, 1];

  constructor(array: number[]) {
    this.array = array;
    this.arrayLength = array.length;
  }

  abstract executeStep(): void;

  public getArray(): number[] {
    return this.array;
  }

  public getSelected(): number[] {
    return this.selected;
  }

  protected swap(index1: number, index2: number) {
    const tempArr = [...this.array];
    const temp = tempArr[index1];
    tempArr[index1] = tempArr[index2];
    tempArr[index2] = temp;
    return tempArr;
  }
}
