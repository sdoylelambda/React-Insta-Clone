import React from 'react';
import insta from '../../components/images/insta.png';
import links from '../../components/images/links.png';
import './SearchBar.css';
 

function SearchBar(props) {
    return (
        <div className="navBar">
             <img className="navImage" src={insta} alt="instagizam" />


        {/* <p>SearchBar</p> */}
              <div>
                 <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
                </div>
             <img className="navImage2" src={links} alt="links" />
        </div>
    )
}

export default SearchBar;