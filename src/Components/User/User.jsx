import React from 'react'
import './User.css';
import Card from './Card/Card'
import Followers from './Followers/Followers'
import { GithubContext } from '../../Context/context';



const User = () => {
  const {githubUser} = React.useContext(GithubContext);
  const {avatar_url, html_url, name, company, blog, bio, location, twitter_username} = githubUser;
  console.log(githubUser)
  return (
    <div className='users'>
      <Card avatar_url={avatar_url} name={name} company={company} html_url={html_url} blog={blog} bio={bio} location={location} twitter_username={twitter_username}/>
      <Followers/>
    </div>
  )
}

export default User