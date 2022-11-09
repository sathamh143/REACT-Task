import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

export default function FullWidthTextField() {
  return (
     <div>
        <Box
          sx={{
            width: 670,
            maxWidth: '100%',
            marginLeft:'200px'
          }}>
          <TextField fullWidth label="Type Prompt Here" id="Type Prompt Here" />
        </Box>
        <p className='blue'>  < AddIcon/> Add Instructions/Description/Attachments</p>
        <p className='icon'>  < AddIcon/>  Add Hint</p>
        <h4 className='lin'> Choice</h4>
        <h4 className='math'> Match</h4>


      </div>
    
  );
}
