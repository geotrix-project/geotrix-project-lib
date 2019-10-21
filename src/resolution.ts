import { Step } from './step';

export class Resolution {

  private error: string = '';
  private steps: Step[] = [];

  public getError(): string {
    return this.error;
  }

  public setError(error: string): void {
    this.error = error;
  }

  public getSteps(): Step[] {
    return this.steps;
  }

  public getLastStep(): Step {
    return this.steps[this.steps.length];
  }

  public addStep(title: string, step: string): void {
    this.steps.push(new Step(title, step));
  }
}
