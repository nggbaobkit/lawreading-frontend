import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import LinkCard from './LinkCard';
import { Segment, Responsive } from 'semantic-ui-react'

class SearchPage extends Component {
    state = { myLink:"" , errorMessage: ""}

    render() { 
        return (
            <SearchBar /> 
        );
    }
}
 
export default SearchPage;