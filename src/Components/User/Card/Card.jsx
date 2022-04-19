import React from 'react'
import './Card.css'
import {Work} from '@styled-icons/material';
import {TwitterWithCircle} from '@styled-icons/entypo-social'


const Card = ({avatar_url, html_url,name, company, blog, bio, location, twitter_username}) => {
  return (

    <div className="card">
      <div className="banner"><img src={avatar_url} /></div>
      <div className="menu">
        <div className="opener"><span /><span /><span /></div>
      </div>
      <h2 className="name">{name}</h2>
      <div className="title">{blog}</div>
      <div className="actions">
        <div className="follow-info">
          <h2><a href="#"><span><Work/></span><small>{company===null ? 'Not Available' : company}</small></a></h2>
          <h2><a href={`https://twitter.com/${twitter_username===null ? 'dishant0406' : twitter_username}`} target="_blank"><span><TwitterWithCircle/></span><small>{twitter_username===null ? 'Not Available' : `@${twitter_username}`}</small></a></h2>
        </div>
        <div className="follow-btn"><a href={html_url} target="_blank"><button>Follow</button></a></div>
      </div>
      <div className="desc">{bio}</div>
    </div>
  );
}

export default Card