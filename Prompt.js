import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

export default function DisabledOptions() {
  return ( 
  <>
    <div className='left'>
      

        <Box
            sx={{
              display: '',
              flexDirection: 'column',
              alignItems: 'center',
              '& > *': {
                m: 1,
                xs:100,
              }}}>
            
           <ButtonGroup style={{color:'black'}} variant="outlined" aria-label="outlined button group">
            <Button 
            style={{color:'black'}}
            sx={{  
              width:{
             xs:10,
             sm :10,
             lg :10,
             md :10,
             xl :10,
           } }}>e.g 10</Button>
            <Button style={{color:'black'}} >%<ArrowDropDownIcon/></Button>   
          </ButtonGroup>   
       </Box>
    </div>

    <div  className='drop'>
    
       <Typography className='parah'>  Prompt Category</Typography>  
       <Autocomplete

      id="disabled-options-demo"
      options={timeSlots}
      getOptionDisabled={(option) =>
        option === timeSlots[0] || option === timeSlots[2]
      }
      sx={{ width:{
        sm:300,
        xs:240,
        lg:300,
        xl:300,
        md:300,
      }}}
      renderInput={(params) => <TextField {...params} label="SELECT TYPE" />}/>
     <p className='pro'>Prompt</p>
   
    </div>

     <div className='switch'> 
        <Switch  sx={{        
            width:{
              xs:50,
              sm :50,
              lg :50,
              md :50,
              xl :50,
            }
          }} {...label} defaultChecked />
       <Typography style={{ fontSize :'20px',marginTop : '1px',fontFamily:'serif'}}> Mandatory To Attempt</Typography>
     </div>

     <div  className='drop'> 
         <Typography className='parah'>Type </Typography> 
         <Autocomplete
           id="disabled-options-demo"
           options={timeSlots}
           getOptionDisabled={(option) =>
             option === timeSlots[0] || option === timeSlots[2]
           }
           sx={{  
             width:{
            xs :240,
            sm :300,
            lg :300,
            md :300,
            xl :300,
          } }}
           renderInput={(params) => <TextField {...params} label="SELECT TYPE" />} />
     </div>
     <div>
        <Box
          sx={{  
            width:{
              xs:390,
              sm :450,
              lg :400,
              md :450,
              xl :500,
            }}}>
          <TextField  style={{marginLeft:'20px'}}fullWidth label="Type Prompt Here" id="Type Prompt Here" />
        </Box>
        <Button style={{marginTop:'10PX',marginLeft:'20px'}} ><AddIcon/>Add Instructions/Description/Attachments</Button>
        <Button style={{marginTop:'10PX'}}><AddIcon/>Add Hint</Button> 
      </div>    
  </>   
);
}
const timeSlots = Array.from(new Array(24*2)).map(
  (_, index) =>
  
    `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${
      index % 2 === 0 ? '00' : '30'
    }`,
);