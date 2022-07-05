import React from "react";

const ImageList = (props) => {
  const images = props.images.map((item) => {
    console.log(item.id);
    return <img src={item.urls.regular} key={item.id} />;
  });

  return (
    <>
      <div>{images}</div>
    </>
  );
};

export default ImageList;
