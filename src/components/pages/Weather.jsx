import {useContext} from 'react';
import MyContext from '../../context/MyContext'



const Weather = () => {
  const context = useContext(MyContext)
    const {loading, error, results} = context


    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>{error}</h2>
  
    
    return (
      <div className='temperature'>
        <h4>{results.name}, {results.sys.country}</h4>
        <div className='main-temp'>
        <p className='temp'
        >{Math.round (results.main.temp)}°C</p>


      <p className='feelslike'> feels like {Math.round (results.main.feels_like)}°C</p>

      <div className='maxmin'>
      <p>max. {Math.round (results.main.temp_max)}°C</p>
      <p>min. {Math.round (results.main.temp_min)}°C</p>
     
      </div>

         
      
      </div>
     
   

      </div>
    
     
    )
    
    
}

  
export default Weather;
