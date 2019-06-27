import React from 'react';


class NoResults extends React.Component {

  componentDidMount(){
    document.title = this.props.pageTitle;
  }
  
  render(){
    return (
      <div className="main-nav">
        <h2>
          No Results Found
        </h2>
      </div>
    );
  }

}

export default NoResults;
