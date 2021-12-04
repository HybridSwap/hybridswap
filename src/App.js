import Home from "./pages/home/Home";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  import {
    Pipeline,
    AlgoButton,
    AlgoSendButton,
    Button,
    Card,
    Modal,
    Box,
    Heading,
    Text,
    Flex,
    Flash,
  } from 'pipeline-ui'
  
  
  var indexerURL = "https://algoexplorerapi.io/idx2/v2/accounts/";
  const myAlgoWallet = Pipeline.init();
  const messageTwo = "Please sign & send transaction";
  const headingTwo = "Complete Transfer";
   updateBalance = () => {
    let url2 = indexerURL + this.state.address;
    fetch(url2)
      .then((response) => response.json())
      .then(data => {
        let myBalance = ". Balance: " + JSON.stringify(data.account.amount / 1000000) + " Algos";
        this.setState({ balance: myBalance });
      }).catch(function () {
        alert("Error occured  " + url2);
      });
  }

  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
