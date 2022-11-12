import * as React from 'react';
import Switch from '@mui/material/Switch';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';




const label = { inputProps: { 'aria-label': 'Size switch demo' } };

export default function SwitchesSize() {
  return (
    <>
    <div className='label'>

         <Switch {...label} defaultChecked sx={{ width:{
        xs:50,
      } 
    }} />

         <p style={{ fontSize :'20px' ,fontFamily:'serif'}}> Random Choice</p>

         

         <Button  variant="text" style ={{ marginLeft:'40px'}}  
         sx={{ width:{
              sm:10,
              xs:100,
              lg:200,
            } 
    }}> <AddIcon/>Add Another Choice</Button>
        
    </div>


    </>
  );
}

