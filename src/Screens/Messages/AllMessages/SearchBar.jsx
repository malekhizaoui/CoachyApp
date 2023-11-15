import React from "react";
import './searchBar.css'
import ArrowrightIcon from "../../../assets/icons/ArrowrightIcon";
function SearchBar({setSearchTerm,searchUser,coachFiltred}) {
    

  return (
    <div class="wrap">
      <div class="search">
        <input
          type="text"
          class="searchTerm"
          placeholder="What are you looking for?"
          onChange={(e)=>{setSearchTerm(e.target.value);searchUser()}}
        />
        {/* <button type="submit" class="searchButton">
          <i class="fa fa-search"></i>
        </button> */}
      </div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",backgroundColor:"grey",borderRadius:15,marginTop:10}}>
       {coachFiltred.map((coach)=>{
        return (
            <div style={{display:"flex",flexDirection:"space-between",alignItems:"center",width:"90%",backgroundColor:"lightgrey",borderRadius:15,margin:10}}>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",width:"90%"}}>
            <img className="image-user" style={{marginLeft:10}} src={coach.image_user}/>
            <p>{coach.firstName} {coach.lastName}</p>
            </div>
            <ArrowrightIcon/>
        </div>
        )
       }) }
      </div>
    </div>
  );
}

export default SearchBar;
