
import './App.css';
import Searchbar from './features/searchBar/Searchbar';
import Subreddits from './features/subreddits/subreddit';
//try
// import { getPosts } from './api/axios';
// import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom"
import Post from './features/Post/Post';
import { activeSubreddit } from './features/subreddits/subRedditsSlice';
import { useSelector } from 'react-redux';


function App() {
  // const [posts, setPosts] = useState('')
  // const [searchResults, setSearchResults] = useState('')

  // useEffect(() => {
  //   getPosts().then(json => {
  //     setPosts(json)
  //     return json
  //   }).then(json => {
  //     setSearchResults(json)
  //   })
  // }, [])
  const active = useSelector(activeSubreddit)

  return (
    <>
      <Searchbar />
      <Routes>
        <Route path="/" element={<Subreddits />} />
        <Route path="/post:id" component={Post}/>
        <Route path={active} element={<Subreddits />} />

      </Routes>
    </>
  );
}

export default App;
