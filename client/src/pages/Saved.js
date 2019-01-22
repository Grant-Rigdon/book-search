import React, { Component } from "react";
import API from "../utils/API";


class Saved extends Component {
    state = {
    books: [],
    
    }

    componentDidMount() {
        this.loadBooks();
      }
    
      loadBooks = () => {
        API.getBooks()
          .then(res =>
            this.setState({books: res.data})
          )
          .catch(err => console.log(err));
      };
    
      deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };
    

    
      render() {
        return (
          <div>   
                
                {this.state.books.length ? (
                  <div className="container">
                    {this.state.books.map(book => (
                      <div className="card" key={book._id}>
                        <h4 className="card-header">
                          {book.title}
                        </h4>
                        <div className="card-body">
                          <h5 className="card-title"> by {book.author}</h5>
                          <image src={book.image}/>
                          <p className="card-text">{book.description}</p>
                          <a href={book.link} className="btn btn-primary">Google Books Link</a>
                          <button  onClick={() => this.deleteBook(book._id)} className="btn btn-danger">Delete Book</button>
                        </div>
                      </div>
                      
                    ))}
                  </div>
                ) : (
                  <div className="container">
                      <div className="alert bg-warning text-center">
                          <h4>No Results to Display</h4>
                      </div>
                  </div>
                )}              
            
          </div>
        );
      }

    
}

export default Saved