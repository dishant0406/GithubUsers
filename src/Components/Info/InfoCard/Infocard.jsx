import React from 'react'
import './InfoCard.css'
import {GithubWithCircle} from '@styled-icons/entypo-social';

const Infocard = ({repos, label, icon}) => {
  return (
    <div>
      <div className="infocard">
        <div className="infoicon">
          {icon}
        </div>
        <div className="infocardtext">
          <div className="infotextdata">
            {repos}
          </div>
          <div className="infolabel">
            {label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Infocard