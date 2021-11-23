import { useState } from "react";

import MyContext from "./MyContext";
import useFetch from '../customHooks/useFetch'



const MyProvider = (props) => {
    const KEY = process.env.REACT_APP_API_KEY 
    
    const [city, setCity] = useState('hanover');

    const [cityInput, setCityInput] = useState('');

 
  

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setCity (cityInput)

    }

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`
    
    const initialState = {results: {}, loading: true, error: null}

    const data = useFetch (URL, initialState)
    const {results, loading, error} = data

    


    return (
        <MyContext.Provider value ={{handleFormSubmit, city, cityInput, setCityInput, results, loading, error}}>
            {props.children}
        </MyContext.Provider>
    )
};

export default MyProvider;