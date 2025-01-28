import { UseSelector,useDispatch } from "react-redux";
import { addtodo, removetodo } from "../redux/actions";

function Todos(){
    const TodosList = UseSelector(state => state.todo);
    const dispatch = useDispatch();
    return(
        <ul>
            {TodosList.map(item => 
                <li>{ }</li>
                )    }
        </ul>
    );
}

export default Todos;