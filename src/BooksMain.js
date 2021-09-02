import Book from "./Book";

export default function BooksMain({checker,books}) {
  return (
    <div className="BookMain">
      <div>{checker()}</div>
      <div className="row">
        {books.map((item) => {
          return (
            <div key={item.key} className="col-12 col-lg-3 col-md-3 col-sm-6 my-3">
              <Book
                publibsher ={item.publisher}
                publishyear ={item.publish_year}
                title={item.title}
                img={item.cover_i}
                authorName={item.author_name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
