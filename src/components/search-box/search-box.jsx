import React, {useState, useEffect} from 'react';
import './search-box.style.css';

/*const SearchBox = (props) => {
    const [searchField, setSearchField] = useState('');

    const searchFieldHandler = (e) => {
        setSearchField((preValue) => e.target.value); 
    }
    useEffect(() => {
        props.searchHandler({search: searchField});
    },[searchField]);
    console.log("SearchBox render");
    return (
        <input 
          type="search" 
          placeholder={props.placeholder} 
          onChange={(e)=> searchFieldHandler(e)}
        />
    );
}*/



class SearchBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            searchField: ''
        };
        
    }

    searchFieldHandler (e) {
        this.setState({searchField: e.target.value}, () => this.props.searchHandler({search: this.state.searchField}));
    }
    render() {
        return (
            <input 
                className="search"
                type="search" 
                placeholder={this.props.placeholder} 
                onChange={this.searchFieldHandler.bind(this)}
            />
        );
        
    }
}

export default SearchBox;