import React,{useState} from 'react';
import {
  fade,
  
  withStyles,
  makeStyles,
  
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import SimpleAccordion from './ResultAccordian';
import '../App.css';
const BootstrapInput = withStyles((theme) => ({
  
  root: {
    'label + &': {
      marginBottom: theme.spacing(2),
      width:"100%",

    },
  },
  input: {
    borderRadius: 12,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 10px',
    paddingRight:"auto",
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    marginBottom: theme.spacing(0),
  },
}));


export default function FormsAndResult() {
  const classes = useStyles();
  const [TemporaryCarrVocation, setTemporaryCarrVocation] = useState(-1);
  const [TemporaryConsVocation, setTemporaryConsVocation] = useState(-1);
  const [FullData, setFullData] = useState([]);
    let Validate=(e)=>{
          if(TemporaryCarrVocation<=0){
             alert("Please Enter Your Leave Carried Forward From 2019 to 2020")
           }
           else if(TemporaryConsVocation<=0){
              alert("Please Enter Your Leave Consumed  By 31 Dec 2020");
           }
           else{
                
                       setFullData([...FullData,{
                         CarriedVocation:TemporaryCarrVocation,
                         ConsumedConvocation:TemporaryConsVocation,
                           }]
                        )
           }
   }
  return (
     <>
      <form className={classes.root} >
       <InputLabel shrink htmlFor="bootstrap-email" style={{color:"white"}}>
         Leave Carried Forward From 2019 to 2020
            </InputLabel>
        <BootstrapInput type="number"  onChange={(e)=>{setTemporaryCarrVocation(e.target.value)}}  id="bootstrap-email" required/>
          <InputLabel shrink htmlFor="bootstrap-password" style={{color:"white"}}>
               Leave Consumed By 31 Dec 2020
             </InputLabel>
               <BootstrapInput type="number"   onChange={(e)=>{setTemporaryConsVocation(e.target.value)}} id="bootstrap-password" required/>
                <br/>
                      <Button variant="contained"  onClick={Validate}  
                      style={{marginLeft:"37%"}} >Default</Button>      
     
    </form>  
    <ul>
      {
        FullData.map(x=>{
        return <li>{<SimpleAccordion CarriedVocation={x.CarriedVocation} ConsumedConvocation={x.ConsumedConvocation}/>}</li>
        })
      }
    </ul>
  </>
    
  );
}





