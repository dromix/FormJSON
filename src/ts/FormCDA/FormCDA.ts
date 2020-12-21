import {postData} from '../service/PostService';

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

    onSubmit(event: Event) {
        event.preventDefault();
        const formData:FormData = new FormData(this.form);
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        console.log(json, formData, event);
        debugger;
        alert(1);
        postData('http://localhost:3000/posts', json)
        .then((data: Response) => {
            console.log(data);
        })
    }

    connectForm(form: HTMLFormElement): void{
        if (!this.connected) {
            this.connected = true;
            this.form = form;
            this.form.addEventListener('submit', this.onSubmit);
            console.log('Connection successful');
            console.log(this.form);
        }
    }


    reset() {
        this.form.removeEventListener('submit', this.onSubmit);
        this.connected = false;
        this.form = null;
    }
}