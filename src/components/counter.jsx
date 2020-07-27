import React, { Component } from 'react';

class Counter extends Component {
    /*state={
        value:this.props.counter.value
    };*/

    /*constructor() {
        super();
        this.handleIncreement = this.handleIncreement.bind(this);
    }*/
    /*renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return  <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }*/
    /*handleIncreement = (product) => {
      this.setState({value: this.state.value + 1});
    };*//*
    dohandleIncreement = () => {
      this.handleIncreement({id:1});
    };*/
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevProps',prevProps);
    }

    componentWillUnmount() {
        console.log("Counter - Unmount");
    }

    render() {
        console.log('counter rendered')
        return (
            <div >
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncreement(this.props.counter)}
                        className="btn btn-secondary btn-sm">Increement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }
    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero":value;
    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;