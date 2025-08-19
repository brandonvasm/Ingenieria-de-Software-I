
export default class PostAutor{
  public value: string;

  constructor(value: string) {
    this.isValid(value);
    this.value = value;
  }

  private isValid(autor: string) {
    if (typeof autor!== 'string' || autor.length > 30) {
      throw new Error('Invalid title format');
    }
  }
}
