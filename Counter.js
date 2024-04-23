import { useState } from "react"
import Counter2 from "./Counter2"
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";
import { useGetAllPostsQuery } from "../redux/postsSlice";

export default function Counter(){

    
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

     const {data, isLoading, isError} = useGetAllPostsQuery(5)

    return (
        <div>
            
            <h1>Count is {count}</h1>
            <button 
            
            onClick={() => dispatch(increment())}

            >
                Increments
            </button>
            
            <button 
            onClick={() => dispatch(decrement())}
            >
                Decrements
            </button>
            
            <button 
            
            onClick={() => dispatch(incrementByAmount(20))}

            >
                Increment by amount
            </button>
        </div>
    )

}