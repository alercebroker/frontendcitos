export abstract class Entity<T> {
  protected props: T;
  constructor(props: T) {
    this.props = props;
  }

  getProps(): T {
    return this.props;
  }
}
