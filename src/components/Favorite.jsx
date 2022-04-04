import React from "react";

function Favorite(props) {

  return (
      <div>
          {props.favorites.map((item, index) => <div key={index}>{item.title}</div>)}
      </div>
  );
}

export default Favorite;
