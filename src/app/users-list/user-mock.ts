export class User {
  userid: number;
  name: string;
  surname: string;
  foto: string;
  vehicles: Car[];
}

export class Car {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

export const USERS: User[] = [
  {
    userid: 1,
    name: 'AAAA',
    surname: 'Aaaaaa',
    foto: 'Test 1',
    vehicles: [new Car('Volvo', 'S70'), new Car('BMW', 'M3')]
  },
  {
    userid: 2,
    name: 'BBBB',
    surname: 'Bbbbbb',
    foto: 'Test 2',
    vehicles: [new Car('Audi', 'S8')]
  },
  {
    userid: 3,
    name: 'CCCC',
    surname: 'Cccccc',
    foto: 'Test 3',
    vehicles: [new Car('Land Rover', 'Discovery 4')]
  },
  {
    userid: 4,
    name: 'DDDD',
    surname: 'Dddddd',
    foto: 'Test 4',
    vehicles: [new Car('Audi', 'TT')]
  },
  {
    userid: 5,
    name: 'EEEE',
    surname: 'Eeeeee',
    foto: 'Test 5',
    vehicles: [
      new Car('BMW', '530'),
      new Car('BMW', '530'),
      new Car('BMW', '530')
    ]
  },
  {
    userid: 6,
    name: 'FFFF',
    surname: 'Ffffff',
    foto: 'Test 6',
    vehicles: [new Car('Audi', 'A4'), new Car('Land Rover', 'Discovery')]
  }
];
