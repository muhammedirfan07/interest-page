
import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'
TextField

function App() {
    const [interest,Setinterest]=useState(0)
    const [principale,SetPrincipale]=useState(0)
    const [rate,SetRate]=useState(0)
    const [year,SetYear]=useState(0)

    const [inavalidePrinciple,setInavalidePrinciple]=useState(false)
    const [inavalideRate,setInavalideRate]=useState(false)
    const [inavalideYear,setInavalideYear]=useState(false)

  const validateInput=(inputTag)=>{
    console.log( inputTag.value);
    const {name,value} =inputTag
    // console.log(!!value.match(/^[0-9]*\.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));
    console.log(!!value.match(/^\d+(\.\d)?$/));

    if( name =='principale'){
      SetPrincipale(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInavalidePrinciple(false)
      }else
      {
        setInavalidePrinciple(true)
      }
      
    }else if( name==='rate'){
       SetRate(value)
       if(!!value.match(/^\d+(\.\d)?$/)){
        setInavalideRate(false)
       }else{
        setInavalideRate(true)
       }
    }else if( name==='year'){
      SetYear(value)
      if(!!value.match(/^\d+(\.\d)?$/)){
       setInavalideYear(false)
      }else{
       setInavalideYear(true)
      }
  } 
}
 const handleCalculate =(e)=>{
    e.preventDefault()
   console.log("Button Click");
   if(principale && rate && year){
    Setinterest((principale*rate*year)/100)
   }else{
    alert("Please fill the form complitity..")
   }
   
 }

 const handleReset=()=>{
  Setinterest(0)
  SetPrincipale(0)
  SetRate(0)
  SetYear(0)
  setInavalidePrinciple(false)
  setInavalideRate(false)
  setInavalideYear(false)
 }

  return (
    <>
    <div style={{width:"100%",minHeight:"100vh", backgroundColor:"#BFD4BF"}} className='d-flex justify-content-center align-items-center  p-3'>
        <div style={{backgroundColor:"#F5FFFA"}} className='p-3 shadow rounded'>
             <h1>Simple Intrest Calculation</h1>
             <p> calculate your simple Intrest Easily  </p>
            <div style={{backgroundColor:"#BFD4BF"}} className=' p-2  rounded text-center '>
              <h1 name='interest' className='mt-3' style={{fontFamily:"arila"}} > ${interest}</h1>
              <p className='fw-bolder'> Total Simple intrest</p>
            </div>
            <form className='mt-5'>
              {/* principle */}
              <div  className='mb-3'>
              <TextField  value={principale||""} name='principale' onChange={(events)=>validateInput(events.target)} className='w-100' id="outlined-principale" label="$ Price Amount" variant="outlined" />  
              </div>
              {/* InvalidePriciple */}
              { inavalidePrinciple && <div className='text-danger mb-3 fw-bold'>
                enter a invalide principle
              </div> }
              {/* rate */}
              <div  className='mb-3'>
              <TextField value={rate||""} name='rate' onChange={(events)=>validateInput(events.target)} className='w-100' id="outlined-rate" label=" % Rate" variant="outlined" />
              </div>
              {/* InvalideRate */}
              { inavalideRate && <div className='text-danger mb-3 fw-bold'>
                enter a invalide Rate
              </div> }
              {/* year */}
              <div  className='mb-3'>
              <TextField value={year||""} name='year' onChange={(events)=>validateInput(events.target)} className='w-100' id="outlined-year" label="Time period(Yr)" variant="outlined" />
              </div>
              {/* InvalideYear */}
              { inavalideYear && <div className='text-danger mb-3 fw-bold'>
                enter a invalide year
              </div> }
              {/* Button */}
              <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled={inavalidePrinciple || inavalideRate || inavalideYear} style={{width:"50%",height:"45px"}} className='bg-dark text-light'  variant="contained">Calculate</Button>
              <Button onClick={handleReset} style={{width:"50%",height:"45px"}} className='border border-dark text-dark' variant="outlined">Reset</Button>
              </Stack>
            </form>
        </div>
    </div>
    
      
    </>
  )
}

export default App
