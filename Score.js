import * as React from 'react';
import Switch from '@mui/material/Switch';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

export default function SwitchesSize() {
  return (
    <>
      <div className='label' >
         <Switch {...label} defaultChecked sx={{ width:{xs:50,}}}/>
         <Typography variant="h6"style={{marginTop:'5px'}}>Random Choice</Typography>
         <Button  variant="text" style ={{ marginLeft:'40px'}} sx={{ width:{
              sm:200,
              xs:250,
              lg:250,
              md:450,
            } }} >  
            <AddIcon/>Add Another Choice</Button>  
      </div>
    </>
  );
}

