import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'



export const GifGrid = ( {category} ) => {

    // const [images, setImages] = useState([])
    const { loading, data } = useFetchGifs( category );


    // getGifs(); Si lo hacemos así, sin el useEffect hace que cambie el estado y vuelve a hacer todo infinitamente

    return (
        <>
            <h3>{category}</h3>
            { loading && <p>loading</p> }
            <div className='card-grid'>
                {
                    // el map sin las llaves y con los paréntesis es un return implícito
                    data.map(image => (
                        <GifGridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
