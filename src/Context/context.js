import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';


const rootUrl = 'https://api.github.com';


const GithubContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  const checkrequest = () => {
    axios(`${rootUrl}/rate_limit`).then(({ data }) => {
      let { rate } = data;
      // rate.remaining = 0
      setRequests(rate.remaining)
      if (rate.remaining === 0) {
        //throw error
        toggleError(true, 'Sorry Limit Exceeded!! Try After some time!')
      } else {
        toggleError(false, '');
      }
    }).catch((err) => console.log(err))
  }


  function toggleError(show, msg) {
    setError({ show, msg })
  }
  useEffect(checkrequest, [])



  return (<GithubContext.Provider value={{ githubUser, githubRepos, githubFollowers, requests, error }}>{children}</GithubContext.Provider >)
}

export { GithubContext };
export default ContextProvider;