import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ResultAccording.css';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    padding:"5%",
    

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  coloring: {
    backgroundColor: "#1a202c ",
    color: "#cfd8dc",
    
  }
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();
  const [Salary, setSalary] = useState(props.CarriedVocation-props.ConsumedConvocation-Math.ceil(props.CarriedVocation/2));
  
  
  return (
    
    
    <div className={classes.root}>
      <Accordion className={classes.coloring}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Result</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <div  >
             <div className="ResultShow" >
             <h5>  Leaves that Conver to Salar : {Salary>0 ? Salary: 0}</h5>
            </div>
            <div className="ResultShow" >
             <h5>  Leave To Cleared By 31 Dec 2020 : {Salary>0 ? Salary-9 : 0}</h5>
            </div>
           </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
