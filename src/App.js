import './assets/style.css';
import './components/profile/FullName.js';
import './components/profile/Address.js';
import Profilphoto from './components/profile/Profilphoto.js';
import FullName from './components/profile/FullName.js';
import Address from './components/profile/Address'

function App() {
  return (
    <div className="App">
    <div className='Card'>
     <Profilphoto/>
     
     <FullName/>
    
     <Address/>
     
  
       
     </div>
     

     
     </div>
  
  
  

    
  );
}

export default App;
