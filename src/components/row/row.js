import React from 'react';
import './row.css';


const Row = ({left,right}) => {
    return (
           <div className = "people-page">
              <div className="row mb2">
              <div className="col-md-6 g-3">
               {left}
              </div>
              <div className="col-md-6 g-3 ">
                {right}
              </div>
            </div>
            </div>
    )
  }

  export default Row;