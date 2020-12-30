import { postService } from '../../service/post-service';
interface DOMEvent<T extends EventTarget> extends Event {
  target: T;
}
declare global {
  interface ObjectConstructor {
    fromEntries(xs: [string | number | symbol, any][]): object;
  }
}

const fromEntries = (xs: [string | number | symbol, any][]) =>
  Object.fromEntries
    ? Object.fromEntries(xs)
    : xs.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
export class Singleton {
  private static INSTANCE: Singleton;

  private connected = false;
  private form: HTMLFormElement;

  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.INSTANCE) {
      Singleton.INSTANCE = new Singleton();
    }

    return Singleton.INSTANCE;
  }

  onSubmit = (e: DOMEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = fromEntries([...new FormData(this.form)]);
    console.log(formData);
    postService(formData);
  };

  connectForm(form: HTMLFormElement): void {
    if (!this.connected) {
      this.connected = true;
      this.form = form;
      this.form.addEventListener('submit', this.onSubmit);
      console.log('Connection successful');
    }
  }

  reset() {
    this.form.removeEventListener('submit', this.onSubmit);
    this.connected = false;
    this.form = null;
  }
}
