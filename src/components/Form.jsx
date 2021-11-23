import {useContext} from 'react'
import MyContext from '../context/MyContext'


const Form = () => {
     const context = useContext (MyContext);
    const {cityInput, setCityInput, handleFormSubmit} = context




    return (
        <form>
            <h1></h1>
            
            <input 
            type="text" 
            placeholder='Enter City...' 
            value={cityInput} 
            onChange={(e)=> setCityInput(e.target.value)}
           />
            
            <button onClick={(e)=> handleFormSubmit(e)}>Submit</button>

        </form>


    )
}

export default Form
