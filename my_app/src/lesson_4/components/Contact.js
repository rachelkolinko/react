import Thank from "./Thank";

import { useNavigate } from "react-router-dom";
function Contact(){
    const navigate = useNavigate();
    const goToThank = () =>{
        navigate('/Thank');
    };

    return(
        <>
            <h1>contact</h1>
            <input></input>
            <button onClick={goToThank}>go to thank</button>
        </>
    )
}
export default Contact;