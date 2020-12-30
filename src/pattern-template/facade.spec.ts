class TV {
  turnOn() {
    console.log('TV turning on..');
  }

  turnOff() {
    console.log('TV turning off..');
  }
}

class Lights {
  turnOn() {
    console.log('Light turning on..');
  }

  turnOff() {
    console.log('Light turning off..');
  }
}

class BlurayPlayer {
  on() {
    console.log('Bluray player turning on...');
  }

  turnOff() {
    console.log('Bluray turning off..');
  }

  play() {
    console.log('Playing bluray disc...');
  }
}

class PopcornMaker {
  turnOn() {
    console.log('Popcorn maker turning on..');
  }

  turnOff() {
    console.log('Popcorn maker turning off..');
  }

  pop() {
    console.log('Popping corn!');
  }
}

class HomeTheaterFacade {
  private bluray: BlurayPlayer;
  private light: Lights;
  private tv: TV;
  private popcornMaker: PopcornMaker;

  constructor(
    bluray: BlurayPlayer,
    light: Lights,
    tv: TV,
    popcornMaker: PopcornMaker
  ) {
    this.bluray = bluray;
    this.light = light;
    this.tv = tv;
    this.popcornMaker = popcornMaker;
  }

  watchMovie() {
    this.tv.turnOn();

    this.bluray.on();

    this.popcornMaker.turnOn();
    this.popcornMaker.pop();

    this.light.turnOff();

    this.bluray.play();
  }

  endMovie() {
    this.light.turnOn();
    this.popcornMaker.turnOff();
    this.bluray.turnOff();
    this.tv.turnOff();
  }
}

const tv = new TV();
const light = new Lights();
const player = new BlurayPlayer();
const popcornMaker = new PopcornMaker();

const homeTheater = new HomeTheaterFacade(player, light, tv, popcornMaker);
homeTheater.watchMovie();
homeTheater.endMovie();
