import './App.css';
import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Col } from 'react-bootstrap'
import profile from './Images/profile.jpeg'


function App() {
  return (
    <>

      <div className="Body">

        <Header />
        
          <Image src={profile} roundedCircle width="130" height="130" className="profilePic" />
        


      </div>
    </>
  );
}

export default App;
