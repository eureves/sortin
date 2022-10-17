export abstract class SortingAlgorithm {
  protected array: number[];
  protected arrayLength: number;
  protected step: number = 0;

  constructor(array: number[]) {
    this.array = array;
    this.arrayLength = array.length;
  }

  abstract executeStep(step: number): void;
}
