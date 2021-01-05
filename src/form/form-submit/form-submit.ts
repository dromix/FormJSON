import { postService } from '../../service/post-service';

interface DOMEvent<T extends EventTarget> extends Event {
  target: T;
}

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

    const formData = Object.fromEntries([...new FormData(this.form)]);

    postService(formData);
  };

  connectForm(form: HTMLFormElement): void {
    if (!this.connected) {
      this.connected = true;
      this.form = form;

      this.form.addEventListener('submit', this.onSubmit);
    }
  }

  reset() {
    this.form.removeEventListener('submit', this.onSubmit);
    this.connected = false;
    this.form = null;
  }
}
