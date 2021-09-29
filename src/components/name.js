import React from 'react';

function Name(props) {
   return (
      <h4 className="card-title">
         Name: { props.name }
      </h4>
   )
}

export default Name;