import React from 'react';
import { IEmployees } from '../../Containers/Employees/type';

export const Item: React.FC<IEmployees> = ({
    id,
    name,
    description,
    age,
    department,
    address: {
        street,
        city,
        district,
        state,
        zip
    },
    avatar
}: IEmployees) => {
        return (
            <div className="card col-md-3" style={{float: 'left', marginBottom: 10}}>
                <img src={avatar} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name} | {age}</h5>
                    <p className="card-text">{department}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{street}, {city}, {district}, {state}, {zip}</p>
                </div>
            </div>
        );
}