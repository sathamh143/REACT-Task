import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AddLinkIcon from '@mui/icons-material/AddLink';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';


const InputExampleActionLabeledButton = () => (
    <>

        <h4 className='lin'> Choice</h4>
        <h4 className='math'> Match</h4>
    
        <div className='choice'
         sx={{
            
            width:{
              xs:40,
              sm :200,
              lg :300,
              md :400,
              xl :500,
            }
          }}>

            <header className='span'
            sx={{ width:{
                xs:140,
              } 
            }}><DragIndicatorIcon/></header>

            <Input  size="small" style={{border:'1px solid gray'}}
             sx={{
                 width:{
                      xs:150
                     } }} 
               defaultValue='This  is Choice 1'/>

            <Button sx={{
                 width:{
                      xs:10
                     } }} style={{color:'black',border:' 1px solid gray',}}> <AddLinkIcon/> </Button> 

            <h1 style={{color:'green'}}><ArrowRightAltIcon/></h1>

            <Input size="small" style={{border:'1px solid gray'}} defaultValue='This is Match 1'/>

            <Button style={{color:'black',border:'1px solid gray'}}> <AddLinkIcon/> </Button> 

            <Button style={{color:'gray',border:'1px solid gray'}}><DeleteIcon/></Button> 

        </div>
    </>
)


export default InputExampleActionLabeledButton 

