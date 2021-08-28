import { HOME } from '../shared/home';
import { ABOUT } from '../shared/about';
import { CONTACT } from '../shared/contact';

export const initialState = 
{
    HomeData:HOME,
    ContactData:CONTACT,
    AboutData:ABOUT
};

export const Reducer = (state=initialState,action)=>{
    return state;
};
