import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useSelector, useDispatch } from "react-redux";
import { searchActive } from './searchbarSlice';
import "./searchbar.css"
import logo from './reddit-logo.png'

const Searchbar = () => {
    const dispatch = useDispatch();

    const searchValue = useSelector(state => state.searchbar)
    const textCh = (e) => {
        //dispatchuim reducerul din slice cu valoarea inputului
        dispatch(searchActive(e.target.value))
    }

    return (
        <header className='heads'>
            <div className='titluc'>
                <h2 className='titlu'><img src={logo} alt="logo" /> by catutz</h2>
            </div>
            <form className='formular'>
                <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                <input id="Search"
                    value={searchValue}
                    type="text"
                    placeholder='Search Reddit'
                    onChange={textCh}
                />

            </form>
        </header>
    )
}

export default Searchbar