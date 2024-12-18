import img_1 from '../assest/nature-landscape-lake-snow-wallpaper-thumb.jpg'
import img_2 from '../assest/reflection-hallstattersee-alps-tourism-wallpaper-thumb.jpg'
import img_3 from '../assest/uruguay-montevideo-software-computer-thumbnail.jpg'
import img_4 from '../assest/zermatt-switzerland-alps-snow-wallpaper-thumb.jpg'

import { useState } from 'react'

export default function ChangeImg(){
    const[img, setImg]= useState([img_1, img_2, img_3, img_4]);
    const[index, setIndex]=useState(0);

    return (
        <>
            <button onClick={()=>{ if(index<5) setIndex(index+1)}} >⟪</button>
            <img src={img[index]}></img>
            <button onClick={()=>{ if(index>0 ) setIndex(index-1)}}>⟫</button>
            
            
        </>
    )
}