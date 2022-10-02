import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    getEmployees,
    selectList,
    selectIsFetching
} from './Slice';
import { IEmployees } from './type';
import { Item } from '../../Components/Employees/Item';

export default function Employees(){
    const list = useAppSelector(selectList);
    const isFetching = useAppSelector(selectIsFetching);
    const dispatch = useAppDispatch(); 

    useEffect(()=>{
        dispatch(getEmployees());
    }, []);

    if(isFetching){
        return <div>Loading...</div>
    }

    return (
        <div>
            {list.map((item: IEmployees) => (
                <Link to={"/details85"} className="navbar-brand">
                <Item {...item} />
              </Link>
            ))}
        </div>
    );
}