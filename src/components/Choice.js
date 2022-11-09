import React from 'react'
import { Input } from 'semantic-ui-react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AddLinkIcon from '@mui/icons-material/AddLink';

const InputExampleActionLabeledButton = () => (
   
<div className='choice'>

    <header className='spa'><DragIndicatorIcon/></header>

     <Input defaultValue='This  is Choice 1'/>

     <button style={{color:'black',border:' 1px solid gray',}}> <AddLinkIcon/> </button> 

     <h1 style={{color:'green' , fontSize:''}}> <ArrowRightAltIcon/> </h1>

     <Input defaultValue='This is Match 1'/>

     <button style={{color:'black',border:' 1px solid gray'}}> <AddLinkIcon/> </button> 

     <button style={{color:'gray' , gap :'10px',}}> <DeleteIcon/> </button> 

</div>
  
  

)


export default InputExampleActionLabeledButton 

