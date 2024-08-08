import ClockHeading from "./ClockHeading";
import ClockSlogan from "./ClockSlogan";
import CurrentTime from "./CurrentTime";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
      
    </center>
  );
}

export default App;

