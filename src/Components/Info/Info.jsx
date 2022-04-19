import React from 'react'
import { GithubContext } from '../../Context/context'
import {GithubWithCircle} from '@styled-icons/entypo-social';
import {UserFollow} from '@styled-icons/remix-fill'
import {ChatFollowUp} from '@styled-icons/remix-line';
import {FileEarmarkCodeFill} from '@styled-icons/bootstrap';
import './Info.css';
import Infocard from './InfoCard/Infocard';


const Info = () => {
  const {githubUser} = React.useContext(GithubContext);
  const {public_repos, followers, following, public_gists} = githubUser;

  const data  = [
    {
      id: 1,
      repos : public_repos,
      label : 'Repos',
      icon: <GithubWithCircle/>
    },
    {
      id: 2,
      repos : followers,
      label : 'Followers',
      icon: <ChatFollowUp/>
    },
    {
      id: 3,
      repos : following,
      label : 'Following',
      icon: <UserFollow/>
    },
    {
      id: 4,
      repos : public_gists,
      label : 'Gists',
      icon: <FileEarmarkCodeFill/>
    }
  ]

  return (
    <div className="info">
    <div className='infocardcontainer'>
      {data.map((el)=>{
        return <Infocard key={el.id} repos={el.repos} label={el.label} icon={el.icon}/>
      })}
    </div>
      </div>
  )
}

export default Info