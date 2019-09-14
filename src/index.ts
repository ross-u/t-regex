export default class DummyClass {
  public msg: string | undefined;
  public age: number;

  constructor() {
    this.age = 0;
  }

  public aMethod(a: string) {
    return a;
  }

  public anotherMethod(a: any) {
    // tslint:disable-next-line: no-console
    console.log(a);
  }
}
