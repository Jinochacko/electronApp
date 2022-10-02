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
import img0 from '../../assets/img0.jpg';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';
import img10 from '../../assets/img10.jpg';
import img11 from '../../assets/img11.jpg';
import img12 from '../../assets/img12.jpg';
import img13 from '../../assets/img13.jpg';
import img14 from '../../assets/img14.jpg';
import img15 from '../../assets/img15.jpg';
import img16 from '../../assets/img16.jpg';
import img17 from '../../assets/img17.jpg';
import img18 from '../../assets/img18.jpg';
import img19 from '../../assets/img19.jpg';
import img20 from '../../assets/img20.jpg';
import img21 from '../../assets/img21.jpg';
import img22 from '../../assets/img22.png';
import img23 from '../../assets/img23.png';
import img24 from '../../assets/img24.png';

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
            <img src={img0} />
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img5} />
            <img src={img6} />
            <img src={img7} />
            <img src={img8} />
            <img src={img9} />
            <img src={img10} />
            <img src={img11} />
            <img src={img12} />
            <img src={img13} />
            <img src={img14} />
            <img src={img15} />
            <img src={img16} />
            <img src={img17} />
            <img src={img18} />
            <img src={img19} />
            <img src={img20} />
            <img src={img21} />
            <img src={img22} />
            <img src={img23} />
            <img src={img24} />
            {list.map((item: IEmployees) => (
                <Link to={"/details4"} className="navbar-brand">
                <Item {...item} />
              </Link>
            ))}
        </div>
    );
}