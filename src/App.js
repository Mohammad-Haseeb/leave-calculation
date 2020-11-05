import React,{useState,Provider} from 'react';
import './App.css';
import  FormsAndResult from './Component/FirstInputField';
import InputOneData,{InputTwoData} from './Source/InputeContext';



function App() {
  const CarriedVacation = useState([]);
  const [ConsumedLeave, setConsumedLeave] = useState(-10);
    return (
    <>
   
     <div className="wrapper ">
           <div className="form-wrapper">
                  <div className="InputCentralize">
                       <h2 className="Title">Leave Calculation App</h2>
                          <InputOneData.Provider value={CarriedVacation}>
                              <InputTwoData.Provider value={setConsumedLeave}>
                                 <div className="FormResposive">
                                       <FormsAndResult/>
                                   </div>
                                       </InputTwoData.Provider>
                                          </InputOneData.Provider>
                  </div>
                           </div>

     </div>
     
   </>
  );
}

export default App;
