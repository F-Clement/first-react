import React, { Component } from 'react';
import importedNames from '../names';

export class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            names: importedNames,
        };
    }

    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase();
        const filteredNames = importedNames.filter(name => {
            return name.toLowerCase().includes(inputText);
        });
        this.setState({
            names: filteredNames
        });
    };
    render() {
        return (
            <div>
                <h1>Name Search</h1>
                <p>Matching names found: {this.state.names.length}</p>
                <form>
                    <input
                        type='text'
                        placeholder='search names'
                        onChange={this.handleChange}
                    />
                    <div style={{ margin: 'auto' }}>
                        We will render names here
                    </div>
                </form >

                {
                    this.state.names.map(name => {
                        return <p key={name}>{name}</p>;

                    })

                }



            </div >
        );
    }
}

export default SearchBar;