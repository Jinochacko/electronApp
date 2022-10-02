export interface ISlice {
    employList: IEmployees[],
    isFetching: boolean
}

export interface IAddress {
    street: string,
    city: string,
    district: string,
    state: string,
    zip: any
}

export interface IEmployees {
    id?: number | null,
    name: string,
    description: string,
    age?: number,
    department: string,
    address: IAddress,
    avatar: string
  }