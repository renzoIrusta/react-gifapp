import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( (  ) => {
        getGifs( category )
        .then( img => { 
                setstate( 
                    {
                        data: img,
                        loading: false
                    }
                 )
        })
    }, [ category ])
    // Ese arreglo del useEffect es el equivalente al componentDidMount.

    // setTimeout(() => {
    //     setstate({
    //         data: [ 1, 2, 3, 4,],
    //         loading: false
    //     })
    // }, 3000)

    return state;

}