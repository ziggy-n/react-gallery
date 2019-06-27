import React from 'react';

class NotFound extends React.Component{

  componentDidMount(){
    document.title = this.props.pageTitle;
  }

  render(){
    return (
      <div>
        <h2> Sorry. This Page Doesn't Exist. </h2>
      </div>
    );
  }

}

export default NotFound;
