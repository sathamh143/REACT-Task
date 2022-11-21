import './App.css';
import Prompt from './components/Prompt';
import Choice from './components/Choice';
import Score from './components/Score';
import { Container } from '@mui/system';
import Checkbox from './components/Checkbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { useState } from 'react';
import Typography from '@mui/material/Typography';

function App() {

const userData = [
 { id :1,choice :' This is Choice 1', match : 'This is Match 1'},
 { id :2,choice :' This is Choice 2', match : 'This is Match 2'},
 { id :3,choice :' This is Choice 3', match : 'This is Match 3'},
]

 const[users,setUsers] = useState(userData)

  return (
    <>
      <div className='div'>
       
          <Container className='flex' 
          sx={{
            height:900,
            width:{
              xs :500,
              sm :700,
              lg :700,
              md :700,
              xl :700,
            }}}>

              <Button style={{float:'right'}}><MoreVertIcon/></Button> 
              <Button style={{float:'right'}}><ExpandMoreIcon/></Button>
              <Typography className='out'>Score</Typography>
                    <Prompt/>
                    <Choice users ={users}/>
                    <Score/>
                    <Checkbox/>
          </Container>

         <footer  className='end' >
            <Card className="two" 
            sx={{ 
                width:{
                  xs:500,
                  sm :700,
                  lg :700,
                  md :700,
                  xl :700,
                }
              }}>
              <Button><AddIcon/>Evaluation Tool</Button> 
            </Card>  
           
         </footer>
         <Button variant="text"style={{marginLeft:'30px',marginTop:'950px'}}><AddIcon/>Add Prompt</Button>
         
      </div>
    
      </>  
      
  );
}

export default App;
