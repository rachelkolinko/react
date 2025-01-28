

const initialState = {
    todo:[],
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case ADDTODO :
            return {...state, todo: [...state.todo, action.payLoad]};
        case REMOVETODO :
            return {...state, todo: state.todo.filter(task => task != action.payLoad)};
        default :
            state;
    }
}