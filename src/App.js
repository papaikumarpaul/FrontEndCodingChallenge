import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import RepositoryList from './Components/RepositoryList';


function App() {
  const[repositories,setRepositories]=useState([]);
  const featchData= async()=>{
    try {
      const responce=await axios.get("https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc");
      console.log(responce.data.items);
      setRepositories(responce.data.items);
    } catch (error) {
      console.log("error")
    }
   
  }
  useEffect(()=>{
featchData();
  })
  return (
    <div className="App">
      <RepositoryList repositories={repositories}/>
    </div>
  );
}

export default App;
