import React from 'react';

const Loading = props => {
  return(
    <div className="loading" style={{
      width: "100%",
      height: "100vh",
      overflow: 'hidden'
    }}>
      <img
        style={{
          margin: '5rem auto',
          display: 'block',
          width: '20%'
        }}
        src="/assets/images/logo/load.gif"
        alt="loading" />
    </div>
  );
}
export default Loading;