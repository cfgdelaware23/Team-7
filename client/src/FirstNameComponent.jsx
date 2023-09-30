import { useState } from 'react';
import { TextField, Box , Button} from "@mui/material";

export default function FirstNameComponent() {
  const [firstName, setFirstName] = useState('');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <label style={{ fontSize: '50px', marginBottom: '16px' }}>
        First Name:
      </label>
      <Box>
        <TextField
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          style={{ width: '600px', fontSize: '40px'}} 
        />
        <Box>
          <Button>Back</Button>
          <Button style={{ marginLeft: '475px' }}>Next</Button>
      </Box>
      </Box>
    </div>
  );
}
