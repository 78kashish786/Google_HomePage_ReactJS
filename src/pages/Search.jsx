import React , {useState } from "react"
import "./Search.css"
import {useHistory } from "react-router-dom";
import {Button } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
function Search({hidebutton = false}){

  const [ input,setinput] = useState(" ");
  const history  = useHistory();

  const search = e =>{
    e.preventDefault();
    console.log("you searched >>  ", input)


    //comeback 


    //use history
    history.push("/search")

  };

  return (
    <form className="search">

      <div className="search__input">
        <SearchIcon className = "search__inputIcon"/>
        <input value = {input} onChange = {e => setinput(e.target.value)}/>
        <MicIcon/>
      </div>
      {!hidebutton ? (
      <div className="search__button">

              <Button type ="submit" onClick = {search} variant = "outlined">Google Search</Button>
              <Button variant = "outlined"> I am feeling Lucky</Button>
            </div>
      ):(
        <div className="search__button">
        <Button className = "search__button__hidden"  type ="submit" onClick = {search} variant = "outlined">Google Search</Button>
        <Button className = "search__button__hidden" variant = "outlined"> I am feeling Lucky</Button>
      </div>
      )}


      
    </form> 
    )

}

export default Search;