import React from 'react';
import insta from '../../components/images/insta.png';
import links from '../../components/images/links.png';
// import './SearchBar.css';
 

function SearchBar() {
    return (
        <div>
        <img src={insta} alt="instagizam" />
        <p>SearchBar</p>
        <img src={links} alt="links" />
        </div>
    )
}

export default SearchBar;