export const addtodo = (task) => ({
    type: ADDTODO,
    payLoad: task,
})


export const removetodo = (id) => ({
    type: REMOVETODO,
    payLoad: id,
})