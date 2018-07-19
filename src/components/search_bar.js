import React, { Component } from 'react';
// { component } means 'const Component = React.Component;'
// so everytime we can just call 'Component' instead of 'React.Component'

// two types of components: functional and class-based components
// usually start with a functional component, only when you need to add
// functionalities you upgrade it to a class component: take in things other
// than props and render. (e.g methods)
// const SearchBar = () => {
//     return <input />;
// };

// to upgrade above functional component to a class-based component:
// use es6 JS 'class'
class SearchBar extends Component {
    // constructor of this component(class): when instantiate this class,
    // constructor is called first
    // each instance of this component will have its own state
    constructor(props) {
        super(props); // inherite parent properties?

        this.state = { term: '' };
        // new object created will be initilised with this state
        // 'term' can be other names
        // value of 'term' can be a non-empty string to act as placeholder
        // everywhere else, modify state using: this.setState({ term: ... })
    }


    // a render() function, MUST have render() in class based component
    render() {
        // return <input onChange={this.onInputChange} />;
        // this returns a prop(property)
        // onChange is a react defined property, an event listener, calls event handler
        // to make it shorter/one-liner with no event handler defined outside:
        return (
            <div className="search-bar">
                <input
                    // whenever we reference a JS variable, we put it in {} in JSX
                    // e.g Value of the input: {this.state.term}
                    // controlled component: value of input is empty string initially
                    // when user enter text, input value is changed to term's value
                    value = {this.state.term}
                    // one good thing using react is you do not need to addEventListener
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    // event handler
    // take a argument, can be any name, 'event' here.
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
        // console.log(event.target.value); // print the input values
    }
}

export default SearchBar; // so other files can import this file
