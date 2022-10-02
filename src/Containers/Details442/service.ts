
import { IEmployees } from './type';

const sampleData = [{
    id: 1,
    name: "Test Employee 1",
    description: "Test Employee 1 description",
    age: 36,
    department: "Maths",
    address: {
        street: "Street 1",
        city: "City 1",
        district: "District 1",
        state: "Kerala",
        zip: 666666
    },
    avatar: 'https://picsum.photos/200'
  },{
    id: 2,
    name: "Test Employee 1",
    description: "Test Employee 1 description",
    age: 36,
    department: "Maths",
    address: {
        street: "Street 1",
        city: "City 1",
        district: "District 1",
        state: "Kerala",
        zip: 666666
    },
    avatar: 'https://picsum.photos/300'
  },{
    id: 3,
    name: "Test Employee 1",
    description: "Test Employee 1 description",
    age: 36,
    department: "Maths",
    address: {
        street: "Street 1",
        city: "City 1",
        district: "District 1",
        state: "Kerala",
        zip: 666666
    },
    avatar: 'https://picsum.photos/400'
  },{
    id: 4,
    name: "Test Employee 1",
    description: "Test Employee 1 description",
    age: 36,
    department: "Maths",
    address: {
        street: "Street 1",
        city: "City 1",
        district: "District 1",
        state: "Kerala",
        zip: 666666
    },
    avatar: 'https://picsum.photos/500'
  },{
    id: 5,
    name: "Test Employee 1",
    description: "Test Employee 1 description",
    age: 36,
    department: "Maths",
    address: {
        street: "Street 1",
        city: "City 1",
        district: "District 1",
        state: "Kerala",
        zip: 666666
    },
    avatar: 'https://picsum.photos/600'
  }
]
export function getEmployeeList(): Promise<{ data: IEmployees[]; }> {
    return new Promise<{ data: IEmployees[] }>((resolve) =>
      setTimeout(() => resolve({ data: sampleData }), 500)
    );
}
  