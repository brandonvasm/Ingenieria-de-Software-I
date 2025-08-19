
export default class PostTitle {
  public value: string;

  constructor(value: string) {
    this.isValid(value);
    this.value = value;
  }

  private isValid(title: string) {
    if (typeof title!== 'string' || title.length > 40) {
      throw new Error('Invalid title format');
    }
  }
}
