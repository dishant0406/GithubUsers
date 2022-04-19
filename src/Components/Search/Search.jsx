import React from 'react'
import {SearchAlt} from '@styled-icons/boxicons-regular'
import {Error} from '@styled-icons/boxicons-regular'
import './Search.css';
import {GithubContext} from '../../Context/context'

const Search = () => {
  const [user, setUser] = React.useState('')
  const {requests, error} = React.useContext(GithubContext);

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(user){
      //logic
    }
  }
  return (
    <div className="searchcontainer">
    <div className="containerrr">
      <div className="search-box">
        <input type="text" className="search-input" placeholder="Search.." value={user} onChange={(e)=> setUser(e.target.value)}/>
        <button className="search-button" disabled={requests>0?false:true} onClick={handleSubmit}>
          <SearchAlt/>
        </button>
      </div>
        <h3 className='searchh3'>Requests: {requests}/60</h3>
        {error.show===true && <div className='errorcontainer'>
        <div className="alert alert-error">
          <div className="icon__wrapper">
              <Error/>
          </div>
          <p>
            {error.msg}
          </p>
        </div>  
        </div>}
    </div>
    </div>
  );
}

export default Search