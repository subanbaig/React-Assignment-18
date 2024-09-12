import React from 'react'
import { useSelector } from 'react-redux'
import Button from './Button'

const Header = () => {
    const {counter} = useSelector((state) => state.counterReducer)

    // console.log('counter' , counter)
    return (
        <div>
            <h1>counter : {counter}</h1>
            {/* <Button /> */}
        </div>

    )
}

export default Header