import React from "react";


const CatList = (props) => {

  console.log(props.cats);
    return (
      <div>
        {props.cats.map((cat, index) => {
          return (
            <div key={index}>
              <li>{cat}</li>
              </div>
          )
        })}
      </div>
    )
  }



export default CatList;
