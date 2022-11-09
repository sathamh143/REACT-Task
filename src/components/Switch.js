import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

export default function SwitchesSize() {
  return (
    <div className='switch'>
      
      <Switch {...label} defaultChecked />
      <p style={{ fontSize :'20px',marginTop : '1px',fontFamily:'serif'}}> Mandatory To Attempt</p>
    </div>
  );
}
