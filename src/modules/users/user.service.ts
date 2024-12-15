import { Injectable } from '@nestjs/common';
import { createUseInputDto } from './input/create-user.input';
import { User } from './object-types/user.object-type';
@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: '1',
      firstname: 'Alice',
      lastname: 'Smith',
      age: 25,
      createdDate: new Date('2024-01-01T10:00:00'),
    },
    {
      id: '2',
      firstname: 'Bob',
      lastname: 'Smith',
      age: 30,
      createdDate: new Date('2024-01-02T11:30:00'),
    },
    {
      id: '3',
      firstname: 'Charlie',
      lastname: 'Brown',
      age: 28,
      createdDate: new Date('2024-01-03T15:45:00'),
    },
    {
      id: '4',
      firstname: 'Diana',
      lastname: 'Prince',
      age: 27,
      createdDate: new Date('2024-01-04T08:15:00'),
    },
    {
      id: '5',
      firstname: 'Ethan',
      lastname: 'Hunt',
      age: 35,
      createdDate: new Date('2024-01-05T09:20:00'),
    },
    {
      id: '6',
      firstname: 'Fiona',
      lastname: 'Gallagher',
      age: 22,
      createdDate: new Date('2024-01-06T12:50:00'),
    },
    {
      id: '7',
      firstname: 'George',
      lastname: 'Miller',
      age: 31,
      createdDate: new Date('2024-01-07T17:10:00'),
    },
    {
      id: '8',
      firstname: 'Hannah',
      lastname: 'Montana',
      age: 29,
      createdDate: new Date('2024-01-08T14:25:00'),
    },
    {
      id: '9',
      firstname: 'Ian',
      lastname: 'McKellen',
      age: 40,
      createdDate: new Date('2024-01-09T18:35:00'),
    },
    {
      id: '10',
      firstname: 'Jane',
      lastname: 'Doe',
      age: 26,
      createdDate: new Date('2024-01-10T07:50:00'),
    },
  ];
  findById(id: string) {
    return this.users.find((user) => user.id == id);
  }

  filterByName(name: string) {
    return this.users.filter(
      (user) => user.firstname == name || user.lastname == name,
    );
  }

  create(data: createUseInputDto) {
    const createdUser: User = {
      ...data,
      id: String(Date.now()),
      createdDate: new Date(),
    };
    this.users.push(createdUser);
    return createdUser;
  }
}
