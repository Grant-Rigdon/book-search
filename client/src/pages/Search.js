import React, { Component } from "react";
import API from "../utils/API";


class Search extends Component {
    state = {
    books: []    
    }

    handleSubmit = event => {
        event.preventDefault()
        API.searchGb(this.refs.search.value)
            .then(res =>                
                this.setState({books: res.data.items})
            )
            .catch(err => console.log(err));
    }
        
        
    saveBook = book => {       
        
          API.saveBook({
            title: book.title,
            author: book.author,
            description: book.description,
            // image: book.image,
            // link: book.link
          })            
            .catch(err => console.log(err));
        }
      


    
      render() {
        return (
          <div className="container">   
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search by Title or Author" aria-describedby="button-addon2" ref="search"/>
                <div className="input-group-append">
                <button className="btn btn-dark" type="button" id="button-addon2" onClick={this.handleSubmit} >Search</button>
                </div>
            </div> 
                {this.state.books.length ? (
                  <div>
                    {this.state.books.map(book => (
                      <div className="card" key={book.id}>
                        <h4 className="card-header">
                          {book.volumeInfo.title}
                        </h4>
                        <div className="card-body">
                          <h5 className="card-title"> by {book.volumeInfo.authors[0]}</h5>
                          <image src={book.thumbnail}/>
                          <p className="card-text">{book.volumeInfo.description}</p>
                          <a href={book.link} className="btn btn-primary">Google Books Link</a>                          
                          <button  onClick={() => this.saveBook({title:book.volumeInfo.title, author:book.volumeInfo.authors[0], description:book.volumeInfo.description})} className="btn btn-primary">Save Book</button>
                        </div>
                      </div>
                      
                    ))}
                  </div>
                ) : (
                    <div>
                        <div className="alert bg-warning text-center">
                            <h4>No Results to Display</h4>
                        </div>
                    </div>
                )}              
            
          </div>
        );
      }

    
}

export default Search