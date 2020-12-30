interface PCBuilder {
  reset(): void;
  setMemory(memory: string): void;
  setMotherCard(motherCard: string): void;
  setVideoCard(videoCard: string): void;
}
class AsusBuilder implements PCBuilder {
  private pc: Asus;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.pc = new Asus();
  }

  setMemory(memory: string) {
    this.pc.memory = memory;
    return this;
  }

  setMotherCard(motherCard: string) {
    this.pc.motherCard = motherCard;
    return this;
  }

  setVideoCard(videoCard: string) {
    this.pc.videoCard = videoCard;
    return this;
  }

  public getProduct(): Asus {
    const result = this.pc;
    this.reset();
    return result;
  }
}
class MacBookBuilder implements PCBuilder {
  private pc: MacBook;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.pc = new MacBook();
  }

  setMemory(memory: string) {
    this.pc.memory = memory;
    return this;
  }

  setMotherCard(motherCard: string) {
    this.pc.motherCard = motherCard;
    return this;
  }

  setVideoCard(videoCard: string) {
    this.pc.videoCard = videoCard;
    return this;
  }

  setSoundCard(soundCard: string) {
    this.pc.soundCard = soundCard;
    return this;
  }

  public getProduct(): MacBook {
    const result = this.pc;
    this.reset();
    return result;
  }
}

class Asus {
  memory: string;
  motherCard: string;
  videoCard: string;
}
class MacBook {
  memory: string;
  motherCard: string;
  videoCard: string;
  soundCard: string;
}
class Director {
  private builder: PCBuilder;

  setBuilder(builder: PCBuilder): void {
    this.builder = builder;
  }

  buildMinimalViableProduct(): void {
    this.builder.setMotherCard('');
  }
}

const myPC = new AsusBuilder()
  .setMotherCard('Sdasd1')
  .setVideoCard('geforce1660ti')
  .getProduct();
console.log(myPC);
