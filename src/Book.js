export default function Book({ title, img = false,  authorName = "No Author Found" , publibsher="No Publisher" , publishyear ="Not Provided" }) {
  return (
    <div>
      <div className="card">
        <img
          src={
            img
              ? `https://covers.openlibrary.org/b/id/${img}-M.jpg`
              : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnriyZ1TkBrE_AFgrp231IQJ3O0tC0k-IzQ&usqp=CAU`
          }
          className="card-img-top"
          
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title h6 fw-bold">{title}</h5>
          <p className="card-text">Author: {authorName[0]}</p>
          <small>Published by {publibsher} at {publishyear[publishyear.length-1]}</small>
        </div>
      </div>
    </div>
  );
}



