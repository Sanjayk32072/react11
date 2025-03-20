const increment = ()=>{
    return {
        type:"INCR"
    }
}
const decrement = () =>
{
    return {
        type:"DECR"
    }
}
const reset = () =>
{
    return {
        type:"Reset"
    }
}
export {increment,decrement,reset}