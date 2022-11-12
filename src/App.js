import './App.css';
import Prompt from './components/Prompt';
import Choice from './components/Choice';
import Span from './components/Span';
import { Container } from '@mui/system';
import Checkbox from './components/Checkbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';


function App() {
  return (

      <div className='div'>
         <Button variant="text" className='' style ={{ marginLeft:'10px',marginTop:'950px'}}> <AddIcon/>Add Prompt</Button>
          <Container className='flex' 
          sx={{
            height:900,
            width:{
              xs:500,
              sm :700,
              lg :700,
              md :800,
              xl :700,
            }
           
          }}
          
          
          >
              <Button className='down'><MoreVertIcon/></Button> 
              <Button className='expand'><ExpandMoreIcon/></Button>
                    <Prompt/>
                    <Choice/>
                    <Span/>
                    <Checkbox/>
          </Container>

         
          
         <footer  className='end' >
            <Card className="two" 
            sx={{
                
                width:{
                  xs:500,
                  sm :700,
                  lg :700,
                  md :800,
                  xl :700,
                }
              }}  >
              <Button><AddIcon/>Evaluation Tool</Button> 
            </Card>  
         </footer>
      </div>
      
  );
}

export default App;
