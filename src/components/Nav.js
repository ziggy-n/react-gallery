import React from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends React.Component {

  handleClick = async (term) => {
    console.log("handle Click");
    await this.props.getImages(term);
  }


  render(){
    return (
      <div className="main-nav">
        <ul>
          <li><NavLink to='/search_mountain' onClick={() => this.handleClick("mountain")}>Mountains</NavLink></li>
          <li><NavLink to='/search_ocean' onClick={() => this.handleClick("ocean")}>Oceans</NavLink></li>
          <li><NavLink to='/search_desert' onClick={() => this.handleClick("desert")}>Deserts</NavLink></li>
        </ul>
      </div>
    );
  }

}

export default Nav;
