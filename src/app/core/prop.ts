import { BehaviorSubject } from 'rxjs';

/**
 * a small helper class which combines abilities of BehaviorSubject and flexibility of a set/get approach
 */
export class Prop<T> {
  get value(): T {
    return this.$value.getValue();
  }

  set value(value: T) {
    const { target, setterCallback } = this;
    this.changed = true;
    if (target) {
      target.changed = true;
    }
    try {
      this.oldValue = this.value;
      this.$value.next(value);
    } catch (e) {
      console.log(this);
      console.log(e);
    }
    if (typeof setterCallback === 'function') {
      setterCallback(value);
    }
  }

  $value: BehaviorSubject<T>;

  oldValue: T;

  get changed(): boolean {
    return this.$changed.getValue();
  }

  set changed(value: boolean) {
    const { target } = this;
    if (target) {
      target.changed = value;
    }
    try {
      this.$changed.next(value);
    } catch (e) {
      console.log(this);
      console.log(e);
    }
  }

  private target: any;
  private $changed = new BehaviorSubject(false);
  private setterCallback: (value: T) => void;

  /**
   * @param value initial value
   * @param target a target class which owns the property
   * @param setterCallback a routine to invoke during setter routine
   */
  constructor(value: T, target?: any, setterCallback?: (value: T) => void) {
    this.$value = new BehaviorSubject<T>(value);

    if (target && typeof target.changed !== 'undefined') {
      this.target = target;
    }

    if (typeof setterCallback === 'function') {
      this.setterCallback = setterCallback;
    }

    // update changed state if BehaviorSubject was updated directly
    this.$value.subscribe(() => (this.changed = true));
  }
}
