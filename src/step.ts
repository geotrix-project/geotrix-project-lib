export class Step {
  private title: string;
  private expression: string;

  constructor(title: string, expression: string) {
    this.title = title;
    this.expression = expression;
  }

  public getTitle(): string {
    return this.title;
  }

  public getExpression(): string {
    return this.expression;
  }
}
