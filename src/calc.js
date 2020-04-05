import {create,all} from 'mathjs'

const math=create(all)

function backspace(response,setResponse,answer,setAnswer) {
    if(response.length===1){
        setResponse('0')
        return;
    }
    
    if(answer===true){
        setAnswer(false)
        setResponse('0')
    }
    
    setResponse(response.substring(0, response.length - 1))
}

function handleKey(value,response,setResponse){
    if(response==='0'){
        setResponse(value)
    }else{
        setResponse(response+value)
    }
}

function expression(response,setResponse,answer,setAnswer){
    setResponse(math.round(math.evaluate(response),4)+'')
    setAnswer(answer===true?true:false)
}

module.exports={backspace,handleKey,expression,math}