import React from 'react'
import './screen.css'

export default function Screen(props) {

    console.log("display:", props.result);// rsult state value is comming correct because once the function inside which it is present
    // isexecuted completely[ here it is Calculator () for result state variable]
    //asycn method is called and state vlaue is updated.
    return (
        <div className='screenBoxWrapper'>
               <div className='screenBox' >
                    {props.result}
                </div>
                <div className='clearbtn' onClick={props.clearScreen}>clr</div>
        </div>
     
    )
}
