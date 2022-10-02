
import { IEmployees } from './type';


  export const getEmployeeList = async (): Promise<IEmployees[]> => {
      const response = await fetch("https://61cd49d97067f600179c59eb.mockapi.io/getList");
     
      return response.json()
    }