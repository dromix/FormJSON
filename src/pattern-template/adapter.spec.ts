interface IPhone {
  useLightning(): void;
}

interface Android {
  useTypeC(): void;
}

class IPhone11 implements IPhone {
  useLightning(): void {
    console.log('Using lightning port...');
  }
}

class PocoF1 implements Android {
  useTypeC(): void {
    console.log('Using type-c charger');
  }
}

class LightningToUSBApadter implements Android {
  iphoneDevice: IPhone;

  constructor(iphone: IPhone) {
    this.iphoneDevice = iphone;
  }

  useTypeC() {
    console.log('Switch on adapter');
    this.iphoneDevice.useLightning();
  }
}

const iphone = new IPhone11();

const adapter = new LightningToUSBApadter(iphone);

adapter.useTypeC();
