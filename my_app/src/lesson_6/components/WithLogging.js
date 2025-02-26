export default function WithLogging(Component) {
    return function WithLogging(props) {
        console.log(props);
        return(
            <>
            <Component ></Component>
            
            </>
        )
    }
}