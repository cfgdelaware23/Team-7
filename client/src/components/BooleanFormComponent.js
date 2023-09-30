import './../FormPages.css';
import { Button, Typography} from "@mui/material";

export default function BooleanFormComponent({property, setProperty, setModifiedProperty}) {
    
  return (
    <div class="formContainer">
      <Typography variant="h2" sx={{color:"white", paddingBottom:"24px"}}>
        {property}
      </Typography>
        <div class="buttonContainer">
        <Button variant="contained" class="formButton" disableRipple onClick={()=>  {setModifiedProperty(true); setProperty(true);}}>Yes</Button>
        <Button variant="contained" class="formButton" disableRipple onClick={()=> {setModifiedProperty(true); setProperty(false);}}>No</Button>
    </div>
    </div>
  );
}