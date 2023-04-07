
import redd from './redd.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-regular-svg-icons"
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons"
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons"
import './posts.css'
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from './postsSlice';
import { selectPosts, isPostsLoading, error, errMessage } from './postsSlice';
import { useEffect } from 'react';
import { activeSubreddit } from '../subreddits/subRedditsSlice';
import { Link } from 'react-router-dom';
import acc from './acc.png'
import { activepost } from '../Post/postSlice'

import React from 'react'

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const active = useSelector(activeSubreddit);
    const activep = useSelector(activepost)

    useEffect(() => {
        dispatch(loadPosts(active));
    }, [dispatch, active])

    const handlePost = (id) => {
        dispatch(activepost(id))
    }

    return (
        <div className='listaposturi'>
            {posts.map((post) => (
                <div className="content" key={post.id}>
                    <div className='contwraper'>
                        <header className='headp'>
                            <img src={acc} alt={post.author} className='pozar' />
                            <div className='scristit'>
                                <h3><Link className='link' to={active}>{active}</Link></h3>
                                <p className="author"> Posted by {post.author}</p>
                            </div>
                        </header>

                        <div className="postbody">
                            <div className='contentb'>
                                <a className='subtit'><h2 className="title"><Link className='link' to={`/post/${post.id}`} onClick={() => handlePost(post.id)} >{post.title}</Link></h2></a>
                                <div className="buttonsa">
                                    <Link className='link' to="/post">
                                        <p> <FontAwesomeIcon icon={faComment} className="comi" />{post.num_comments} Comments</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="containterpoza">
                                
                                {/* {post.url ? <img src={post.image} alt="" className='pozasub' />: <p></p>} */}
                                <img src={post.image ? post.image : redd} alt="" className='pozasub' />
                            </div>
                        </div>
                    </div>
                    {/* upvotes */}
                    <div className='upvotes'>
                        <FontAwesomeIcon icon={faArrowAltCircleUp} className="comi" />
                        <h2 className="votes">{post.ups}</h2>
                        <FontAwesomeIcon icon={faArrowAltCircleDown} className="comi" />
                    </div>
                </div>

            
            ))}

{/* 
            <div className="content">
                <div className='contwraper'>
                    <header className='headp'>
                        <img src={ciment} alt="ciment" className='pozar' />
                        <div className='scristit'>
                            <h3>r/Zbociment</h3>
                            <p className="author"> Posted by Cata</p>
                        </div>
                    </header>

                    <div className="postbody">
                        <div className='contentb'>
                            <a href="" className='subtit'><h2 className="title">Industria zbocimentului</h2></a>
                            <div className="buttonsa">
                                <a href="www.google.com">
                                    <p> <FontAwesomeIcon icon={faComment} className="comi" />Comments</p>
                                </a>
                            </div>
                        </div>
                        <div className="containterpoza">
                            <img src={cim} alt="" className='pozasub' />
                        </div>
                    </div>
                </div>
                {/* upvotes */}
                {/* <div className='upvotes'>
                    <FontAwesomeIcon icon={faArrowAltCircleUp} className="comi" />
                    <h2 className="votes">28K</h2>
                    <FontAwesomeIcon icon={faArrowAltCircleDown} className="comi" />
                </div>
            </div> */} 



        </div>
    )
}

export default Posts