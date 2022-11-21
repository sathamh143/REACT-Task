import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default function CheckboxLabels() {
  return (
    <>
    

    <FormGroup className='check'>
      
      <FormControlLabel control={<Checkbox/>}label="Incorrect Score"/>
     
    </FormGroup>

    <Button variant="outlined" disabled style={{marginLeft:'20px',color:'black'}}>
        e.g -1
      </Button>    
      
    </>
  );
}