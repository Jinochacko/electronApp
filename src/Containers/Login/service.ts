import appFirebase from '../../config/firebase';
import {  } from './type';
const auth = appFirebase.auth();
export function login(): Promise<{ data: boolean; }> {
    return new Promise<{ data: boolean }>((resolve) =>
      setTimeout(() => resolve({ data: true }), 1500)
    );
}

export const socialMediaAuth = (provider: any) => {    
    return auth.signInWithPopup(provider);
    // .then((res: any)=>{
    //             return res.user;
    //         }).catch((err: any)=>{
    //             console.log('errrrrrrrrrrrr',err);
    //         });
}