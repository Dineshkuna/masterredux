import { useSelector } from "react-redux";


const CounterDisplay =()=>{

     const countValue = useSelector((state) => state.counter.count)

    return (
        <div>
            <p>CounterDisplay: { countValue} </p>
        </div>
    )
}
export default CounterDisplay;