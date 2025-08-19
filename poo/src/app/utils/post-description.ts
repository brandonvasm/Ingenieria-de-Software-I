
export default class PostDescription{
  public value: string;

  constructor(value: string) {
    this.isValid(value);
    this.value = value;
  }

  private isValid(description: string) {
    if (typeof description!== 'string' || description.length > 100) {
      throw new Error('Invalid title format');
    }
  }
}
