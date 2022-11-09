import './App.css';
import Dropdown from './components/Dropdown';
import Drop from './components/Drop';
import Switch from './components/Switch';
import Input from './components/Input';
import Choice from './components/Choice';
import Box from './components/Box';
import Span from './components/Span';
import { Container } from '@mui/system';
import Checkbox from './components/Checkbox';
import  Button from './components/Button';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from 'react-bootstrap/Card';


function App() {
  return (

     <div className='div'>
      
        <Container className='flex'>

          <h1 className='expand'><ExpandMoreIcon/></h1> 

              <Box/>           
              <Switch/>
              <Dropdown/>
              <Drop/>
              <Input/>
              <Choice/>
              <Span/>
              <Checkbox/>
              <Button/>

        </Container>
                 
                  <footer  className='end'>

                    <Card.Footer className="two">

                      <p className='con'><AddIcon/>Evaluation Tool</p> 

                    </Card.Footer>

                  </footer>

                  <p className='name'><AddIcon/>Add Prompt</p> 
                  

      </div>
      
  );
}

export default App;
