
import { Input } from 'reactstrap';
import React from 'react';
 
class SearchIndex extends React.Component {
  constructor() {
    super();
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 
     'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     searchFilter: []
   }
 }


 componentDidMount() {
   this.searchFunction();
 }


 searchFunction = () => {
   let searchResult = document.getElementById('searchHere').value.toLowerCase();
   if (searchResult === '') {
     this.setState({
       searchFilter: this.state.things
     })
   } else {


    let thingFilter = this.state.things.filter((things) => {
      if (things.toLowerCase().includes(searchResult)) {
        return things
      }
    })


    this.setState({
      searchFilter: thingFilter
    })


    console.log(this.state.searchFilter)
   }
 } 

 render() {
   return (
     <div>
       <Input placeholder='Search Here' id="searchHere" onChange={this.searchFunction} />
       <h3>Results:</h3>
       <h4>{this.state.searchFilter}</h4>
     </div>
     )
    } 
 }

 
export default SearchIndex;
