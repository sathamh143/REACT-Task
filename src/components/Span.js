import * as React from 'react';
import Switch from '@mui/material/Switch';
import AddIcon from '@mui/icons-material/Add';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

export default function SwitchesSize() {
  return (
    <div className='label'>

         <Switch className=''{...label} defaultChecked />

         <p style={{ fontSize :'20px' ,fontFamily:'serif'}}> Random Choice</p>

         <h1 style ={{marginLeft:'220px',marginTop:'1px',color:'blue'}}><AddIcon/></h1>

         <span style ={{color:'blue',marginTop:'10px'}} >Add Another Choice</span>
        
    </div>
    
  );
}

