class Singleton {
    private static INSTANCE: Singleton;

    private _number: number;

    private constructor() {
        this._number = 0;
    }

    static getInstance(): Singleton {
        if (!Singleton.INSTANCE) {
            Singleton.INSTANCE = new Singleton();
        }

        return Singleton.INSTANCE;
    }

    getNumber(): number{
        return this._number;
    }

    setNumber(n: number) {
        this._number = n;
    }
}

const firstInstance: Singleton = Singleton.getInstance();
const secondInstance: Singleton = Singleton.getInstance();

firstInstance.setNumber(5);
console.log('############');
console.log(firstInstance.getNumber());
console.log(secondInstance.getNumber());
console.log('############ change number');
secondInstance.setNumber(10);
console.log(firstInstance.getNumber());
console.log(secondInstance.getNumber());