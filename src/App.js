// import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import Header from './componant/Header';
import MpSection1 from './componant/MpSection1';
import ScrollHideContent from './pages/ScrollHideContent';



function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      {/* <ScrollHideContent/> */}
        <MpSection1/>
        
      </Grid>
    </Grid>

  );
}

export default App;
