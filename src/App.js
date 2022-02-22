import './App.css';
import Dashboard from './components/Dashboard';
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  app: {
    "min-height": "100%",
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div id="BroekingApp" className={classes.app}>
      <header className="Where Have I Been"></header>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
