// iska km h pk parentka data koi bhi children kbhi bhi get krskta h tu usky liye hm 'context' ka use krty h
// first we ctreate context
// context(warehouse) its easy to create using context
// provider(delivery boy) its also easy to create using context
// consumer(y hm khud hi h) isko create krna kfi lenghty or difficult h tu isky liye hm 'usecontext()' ka use krty h
 
import React, { useContext , useEffect, useState } from 'react';

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_WITH_API}`;

const Appcontext = React.createContext();

const Appprovider = ({ children }) => {

const [isLoading , setIsLoading] = useState(true);
const [movie , setMovies] = useState([]);
const[isError , setIsError] = useState({show : 'false' , msg : ""});
const [query , setQuery] = useState('Hum Aapke Hain Koun');

const  getMovies = async(url) => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if(data.Response === 'True'){
        setIsLoading(false);
        setIsError({
            show :true,
            msg : "",
        });
        setMovies(data.Search);
        }
        else{
            setIsError({
                show :true,
                msg : data.Error,
            });
        }
    } catch(error){
        console.log(error);
    }
};
useEffect(() => {
    let timerOut = setTimeout(() => {
        getMovies(`${API_URL}&s=${query}`);
    } , 800);
    return () => clearTimeout(timerOut);
  }, [query]);

    return <Appcontext.Provider value={{isLoading , isError , movie , query , setQuery}}>{children}</Appcontext.Provider>
};

const useGlobalContext = () => {
    return useContext(Appcontext);
};

export {Appcontext , Appprovider , useGlobalContext  };


