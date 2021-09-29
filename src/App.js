import React from 'react';
import './App.css';
import Loader from './components/loader';
import Name from './components/name';
import Id from './components/id';
import Email from './components/email';
import Pagination from './components/pagination';

class App extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         users: [],
         page: 2,
         loading: false,
      }  
   }

   apiCall = () => {
      this.setState({loading: true});
      fetch(`https://reqres.in/api/users?page=${this.state.page}`)
         .then(resp => resp.json())
         .then(resp => {this.setState({users: resp.data, loading: false})})
         .catch(err => console.err(err));
   }

   componentDidMount() {
      this.setState({loading: true}, this.apiCall);
   }

   handleNextClick = () => {
      this.setState({page: this.state.page + 1}, this.apiCall);
      
   }

   handlePrevClick = () => {
      if (this.state.page !== 1) {
         this.setState({page: this.state.page - 1}, this.apiCall);
      } else {
         this.setState({page: 1})
      }      
   }

   render() {
      
      return (
         <>
         <div className="full-container">
            <h1>
               U S E R S
            </h1>
            {this.state.loading ?
            <Loader /> :
               <div className="main-container">
                  <div className="container mx-auto mt-4">
                     <div className="row">
                        {this.state.users.map((user, index) => {
                           return (
                              <div key={index} className="col-md-4" >
                                 <div className="card-users">
                                    <img className="user-img" src={ user.avatar } alt="thumbnail" />
                                    <div className="card-body">
                                      <Id id={ user.id } />
                                      <Name name={ user.first_name + " " + user.last_name } />
                                      <Email email={ user.email } />
                                    </div>
                                 </div>
                              </div>
                           )
                        })}
                     </div>
                  </div>
               </div>
            }
            <Pagination prev={this.handlePrevClick} next={this.handleNextClick}/>
         </div>
         </>
      )
   }
}
export default App;
