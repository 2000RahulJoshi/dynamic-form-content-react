import React, { useState } from 'react'
import './dynamicFields.css'

function DyamicFiedls() {
    let obj = {
        inputVal : '',
        marks : '',
        totalMarks : '',
        board : ''
    }

    const [formVal,setFormVal] = useState([obj]);

    function setInputVal(index,event,Field){
        const newArr = [...formVal];
        switch(Field){
            case "degree" : newArr[index].inputVal = event.target.value;
                            break;

            case "university" : newArr[index].board = event.target.value;
                                break;

            case "marks" :  newArr[index].marks = event.target.value;
                            break;

            case "totalMarks" : newArr[index].totalMarks = event.target.value;
                                break;

            default : break;
        }
        setFormVal(newArr)
    }

    function addField(index,event){
        event.preventDefault();
        const newArr = [];
        const newObj = {
            inputVal : '',
            marks : '',
            totalMarks : '',
            board : ''
        }

        formVal.forEach( (val,i)=>{
            newArr.push(val);
            if(i === index){
                newArr.push(newObj)
            }
        })
        setFormVal(newArr);
    }

    function removeField(index,event){
        event.preventDefault();
        if(formVal.length === 1){
            return;
        }
        const newArr = [];
        formVal.forEach( (val,i)=>{
            if(i !== index){
                newArr.push(val);
            }
        })
        setFormVal(newArr);
    }

  return (
    <div>
      <form>
        {   
            formVal.map( (val,index)=>{
                return (
                    <div className='inputFields d-flex gap-2 justify-content-center'>
                        <div className='d-flex flex-column inputWidth'>
                            <label className='fw-bold mb-2 mt-5'>Degree Name</label>
                            <input id={"degree"+index} onChange={(event)=>setInputVal(index,event,"degree")} placeholder='Enter Your Degree' value={val.inputVal}></input>
                        </div>

                        <div className='d-flex flex-column inputWidth'>
                            <label className='fw-bold mb-2 mt-5'>University Name</label>
                            <input id={"university"+index} onChange={(event)=>setInputVal(index,event,"university")} placeholder='Enter University/Board Name' value={val.board}></input>
                        </div>

                        <div className='d-flex flex-column marksWidth'>
                            <label className='fw-bold mb-2 mt-5'>Marks</label>
                            <input id={"marks"+index} onChange={(event)=>setInputVal(index,event,"marks")} value={val.marks} placeholder='Enter Your Marks' ></input>
                        </div>

                        <div className='d-flex flex-column marksWidth'>
                            <label className='fw-bold mb-2 mt-5'>Total marks</label>
                            <input id={"total"+index} onChange={(event)=>setInputVal(index,event,"totalMarks")} value={val.totalMarks} placeholder='Enter Total Marks'></input>
                        </div>

                        <div className='mt-auto d-flex gap-2'>
                            <button className='border border-0 bg-success text-white' onClick={(event)=>addField(index,event)} ><i class="bi bi-plus"></i></button>
                            <button className='border border-0 bg-danger text-white' onClick={(event)=>removeField(index,event)} ><i class="bi bi-x"></i></button>
                        </div>
                    </div>
                )
            })
        }
      </form>
    </div>
  )
}

export default DyamicFiedls;
