import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons"
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons"
import { faComment } from "@fortawesome/free-regular-svg-icons"
import './Post.css';
import acc from './acc.png'
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../posts/postsSlice';
import { activeSubreddit } from '../subreddits/subRedditsSlice';
import { useEffect } from 'react';
import { selectPosts } from '../posts/postsSlice';
import { useParams } from 'react-router-dom';
import { activepost } from './postSlice';

const Post = () => {
    const dispatch = useDispatch()
    const active = useSelector(activeSubreddit);

    useEffect(() => {
        dispatch(loadPosts(active));
    }, [dispatch, active])

    const { id } = useParams();
    const posts = useSelector(selectPosts)

    const post = posts.find((post) => post.id === id);


    // selectam toate posturile din state
    // const posts = useSelector(selectPosts)
    // //selectam postul care trebuie sa il afisam
    // const activePostId = useSelector(activepost);

    // const selectedPost = posts.filter(post => activePostId.id === post.id )

    return (
        <>
            <div className='post'>
                <div className='upvotes'>
                    <FontAwesomeIcon icon={faArrowAltCircleUp} className="comi" />
                    <h2 className="votes">{post.ups}</h2>
                    <FontAwesomeIcon icon={faArrowAltCircleDown} className="comi" />
                </div>
                <div className="containerpost">
                    <div className="postcontent">
                        <div className="postinitials">
                            <img src={acc} alt="" />
                            <a href=""><h4>{post.url}</h4></a>
                            <p>Posted By {post.author}</p>
                        </div>
                        <div className="titlecontent">
                            <h2 className="titlu">{post.title}</h2>
                        </div>
                        <div className="continutcontent">
                            <p>{post.selftext}
                            </p>
                            <img src={post.image} alt="" />
                        </div>
                        <div className="buttonsa">
                            <a href="www.google.com">
                                <p> <FontAwesomeIcon icon={faComment} className="comi" />Comments</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="commentscontainer">
                <div className="inputcontent">
                    <input type="textarea" className='areat' />
                    <button>Comment</button>
                </div>
                <dic className="comments">
                    <div className="comment">
                        <div className="info">
                            <img src={acc} alt="" />
                            <h5>User</h5>
                            <p>2 days ago</p>
                        </div>
                        <div className="commentcontent">
                            <p>Cel mai ciment bun il gasesti la ceresit!</p>
                        </div>
                        <div className='upvotescom'>
                            <FontAwesomeIcon icon={faArrowAltCircleUp} className="comicom" />
                            <h2 className="votescom">28K</h2>
                            <FontAwesomeIcon icon={faArrowAltCircleDown} className="comicom" />
                        </div>

                    </div>
                </dic>
            </div>


        </>
    )
}

export default Post