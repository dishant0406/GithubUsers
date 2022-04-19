import React from 'react'
import './Followers.css'
import {GithubContext} from '../../../Context/context'

const Followers = () => {
  const {githubFollowers} = React.useContext(GithubContext)
  return (
    <div>
      <div className="list-wrapper">
  <ul className="list">
    {githubFollowers.map((el, index)=>{
      return <li  key={index} className="list-item">
      <div>
        <img src={el.avatar_url}  className="list-item-image"/>
      </div>
      <div className="list-item-content">
        <h4>{el.login}</h4>
        <p>{el.html_url}</p>
      </div>
    </li>
    })}
  </ul>
</div>
    </div>
  )
}

export default Followers