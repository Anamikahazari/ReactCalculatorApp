import React from 'react'
import './buttonbox.css'
export default function Buttonbox(props) {
    //calculating Result

    // const calculation = (holder)=>{
    //     console.log("calculate final holder",holder);
    // }

    // called when text is entered by buttons
    const enterDetail = (e)=>{
        e.preventDefault();
     
        // if((e.target.innerText === "+") || (e.target.innerText === "-") || (e.target.innerText === "*") || (e.target.innerText === "%") || (e.target.innerText === "=")){
        //     let equation = props.screendata;
        //     let pos = -1;
        //     let left = 0;
        //     let right = 0;
        //     let holder = 0;
        //     for(let i =0;i<equation.length-1;i++){
        //         if(equation.charAt(i) === "+" || equation.charAt(i) === "-" || equation.charAt(i) === "%" || equation.charAt(i) === "*"){
        //             pos = i;
        //             break;
        //         }
        //     }
        //     console.log("position of sign is ", pos);
        //     if(pos === -1){
        //        right = parseInt(0);
        //        left = parseInt(equation.slice(0,-1))
        //        holder = left+right;
        //        if(e.target.innerText === "="){
        //         calculation(holder);}
        //     }
        //     else{
        //         left = parseInt(equation.slice(0,pos));
        //         right = parseInt(equation.slice(pos+1));

                    
        //         console.log("left",left);
        //         console.log("right",right);
        //         if(equation[pos] === "+"){
        //             console.log(left+right);
        //             holder = left+right;
        //             left = holder;
        //         }else if(equation[pos] === "-"){
        //             console.log(left-right);
        //             holder = left - right;
        //             left = holder;
        //         }else if(equation[pos] === "*"){
        //             console.log(left*right);
        //             holder = left * right;
        //             left = holder;
        //         }
        //         else if(equation[pos] === "%"){
        //             console.log(left/right);
        //             holder = left/right;
        //             left = holder;
        //         }
        //         else if(e.target.innerText === "="){
        //             calculation(holder);
        //         }
        //     }
        //     console.log("holder ............",holder);
        // }
        // props.clickCount(e.target.innerText);
        props.getChildDatas(e.target.innerText);
      
    }

    return (
        <div className='gridbox'>
            <div className='row1'>
            <div className='col1' onClick={enterDetail}>1</div>
            <div className='col2' onClick={enterDetail}>2</div>
            <div className='col3' onClick={enterDetail}>3</div>
            <div className='col4' onClick={enterDetail}>+</div>
            </div>
            <div className='row2'>
            <div className='col1' onClick={enterDetail}>4</div>
            <div className='col2' onClick={enterDetail}>5</div>
            <div className='col3' onClick={enterDetail}>6</div>
            <div className='col4' onClick={enterDetail}>-</div>
            </div>
            <div className='row3'>
            <div className='col1' onClick={enterDetail}>7</div>
            <div className='col2' onClick={enterDetail}>8</div>
            <div className='col3' onClick={enterDetail}>9</div>
            <div className='col4' onClick={enterDetail}>*</div>
            </div>
            <div className='row4'>
            <div className='col1' onClick={enterDetail}>0</div>
            <div className='col2' onClick={enterDetail}>.</div>
            <div className='col3' onClick={enterDetail}>=</div>
            <div className='col4' onClick={enterDetail}>%</div>
            </div>
        </div>
    )
}
