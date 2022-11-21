import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AddLinkIcon from '@mui/icons-material/AddLink';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';


const InputExampleActionLabeledButton = (props) => (
      
       <>
       <div>
                <h4 className='lin'> Choice</h4>
                <h4 className='math'> Match</h4>

             <div className='choice'>
                
                {props.users.length > 0? (
                    props.users. map((user) =>(
                        <>
                         <div>

                        <header className='span'sx={{width:{xs:140}}}><DragIndicatorIcon/></header>

                        <Input  
                        className='text'
                        size="small" 
                        style={{border:'1px solid gray'}}
                        sx={{width:{xs:120}}} 
                        defaultValue=
                        {user.choice}/>
            
                        <Button size = "small" sx={{width:{xs:10}}}style={{color:'black',border:'1px solid gray'}}><AddLinkIcon/></Button> 
                         
                        <h1 style={{color:'green',fontSize:'large'}}><ArrowRightAltIcon/></h1>
                        <div className=''>
                        <Input size="small"
                        className='match'
                        style={{border:'1px solid gray'}} 
                        sx={{width:{xs:120}}} 
                        defaultValue={user.match}
                        
                        />    
                        <Button size = "small" style={{color:'gray',border:'1px solid gray'}} ><DeleteIcon/></Button> 
                          </div>
                        </div>
                </>
                ))
                ):(
                    <p> no user</p>
                )
                    }     
             </div>
            </div>
        </>
);
export default InputExampleActionLabeledButton 

