import { useState, useEffect} from 'react'


export default function Example(){
    const [items, setItems] = useState([]);
    //const addItem = () => setItems([...items, ])
    useEffect(()=>{
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:5238/WeatherForecast');
                const data = await response.json();
                setItems([...items, data]);
            }catch(error){
                console.log('error');
            }
        }
        fetchPosts();
    })
    return(
        <>
        {items.map(item => (
                <p key={item}>{item}</p>
                ))}
        </>
    )
}


