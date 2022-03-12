import { type } from '@testing-library/user-event/dist/type';
import React, {useState} from 'react'
import Buttonbox from '../buttonGrid/Buttonbox'
import Screen from '../calculatorScreen/Screen'
import './calculator.css'
export default function Calculator() {
    const [calRes, setResult] = useState("");
    const[result,setResultagain] = useState("");
    const[count,setCount] = useState(1);
    const [checkSign,setSign] = useState(0);
    let [previous,setPrevious] = useState('');

    // check number of sign clicked
    const singCount=(signValue)=>{
        console.log("++++++++++++++++++++==",signValue);
        if(signValue === "+" || signValue === "-" || signValue === "%" || signValue === "*"){
        setSign(checkSign=>checkSign+1);
        console.log("sign vlaue is incresed by one", checkSign);
        }
    }


    // Screen result as required on sign click
    // const resultantScreen=(equation)=>{
    //         console.log("inside resultantScreen", equation);
    //         console.log("type of equation",typeof(equation));
    //         let pos = 0;
    //         let left = 0;
    //         let right = 0;
    //         let holder = 0;
    //         for(let i =equation.length-1;i>=0;i--){
    //             if(equation.charAt(i) === "+" || equation.charAt(i) === "-" || equation.charAt(i) === "%" || equation.charAt(i) === "*"){
    //                 pos = i;
    //                 break;
    //             }
    //         }
    //         console.log("position of sign is ", pos);
    
    //         left = parseInt(equation.slice(0,pos)) || 0;
    //         right = parseInt(equation.slice(pos+1)) || 0;

                
    //         console.log("left",left);
    //         console.log("right",right);
    //         console.log(equation.charAt(pos));
    //         console.log("checksign,",checkSign);
    //         if(equation.charAt(pos).toString() === '+'&& checkSign === 1){
    //             // console.log(left+right);
    //             holder = parseInt(left)+parseInt(right);
    //             // left = holder;
    //             console.log("inside pos",holder);
    //             setResultagain(holder);
    //         console.log("holder==================", typeof(holder));
                
    //         }else if(equation.indexOf(pos) === "-"){
    //             console.log(left-right);
    //             holder = parseInt(left)-parseInt(right);
    //             // left = holder;
    //             setResultagain(holder);
    //         }else if(equation.indexOf(pos) === "*"){
    //             console.log(left*right);
    //             holder = parseInt(left)*parseInt(right);
    //             // left = holder;
    //             holder.toString();
    //             setResultagain(holder);
    //         }
    //         else if(equation.indexOf(pos) === "%"){
    //             console.log(left/right);
    //             holder = parseInt(left)/parseInt(right);
    //             // left = holder;
            
    //             setResultagain(holder);
    //         }
    //     console.log("holder ............",holder);

    //         // setResultagain(calRes);

    // }
    // console.log("after first =",result);

    // to calculate output
    const displayResult=(result)=>{
        // console.log("result after calculation");
        // console.log("hiiii",calRes,"result",result);
        // // console.log("screen data",result);
        // console.log("type of calRes",typeof(calRes));
        // console.log("type of result",typeof(result));
        // //converting equation to result 
        // resultantScreen(result);
        console.log("here result is calculated after pressing =");

        console.log("result is", eval(result));
        setResultagain(eval(result));
        
    }

    //update screen
    const updateScreen=(childValue)=>{

        console.log("typd of clicked btn",typeof(childValue));
        if(['1','2', '3' , '4' , '5' , '6' , '7' , '8' , '9' ,'0' ,'.'].includes(childValue)){
            console.log("child value", childValue);
            setResultagain(result+childValue);
        }

        else if(['*','/','+','-'].includes(childValue)){
            console.log("sign child value", childValue);
            setPrevious(result);
            setResultagain(result+childValue);

        }
        else if(childValue === "%"){
            console.log("percentage of any number");
            setResultagain(parseInt(result)/100);
        }

    //     console.log("inside screen state value",calRes);
    //    let newString = resultantScreen(calRes)+childValue;    //converting equation to result 
    //     // setResultagain(newString);
    //     console.log("correct", calRes+childValue);
    //     if(count === 1){
    //         setResultagain(calRes=>childValue);
    //         setCount(count=>count+1);
    //         console.log("inside count",count);
    //     }
    //     else{
    //     setResultagain(calRes=>calRes+childValue)
    //     }
    //     console.log("Result here");
    }
    console.log("outside count",count);

    //get btn clicked data
    const getChildData=(childValue)=>{
        console.log("inside parent child data is", childValue);
        console.log("result is:", typeof calRes);
        setResult(calRes=>calRes+childValue);
        console.log(calRes);// updating state using setState method won't match update update state variable right away
        // as setState is asycronous (will exicute once function is executed first in which it is called);
        if(childValue === "="){
            console.log("resultant value is printed here");
            displayResult(result);
        }else {
         updateScreen(childValue);
        }
    }

    const cleardata=()=>{
        setResultagain("");
    }

    return (
        <div className='container'>
           <Screen result = {result} clearScreen = {cleardata}/>
           <Buttonbox  getChildDatas = {getChildData} screendata={result} clickCount = {singCount}/>
        </div>
    )
}
