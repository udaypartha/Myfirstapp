import React from 'react';
class ClMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color : 'white'
    }
    console.log("Constructor Method Called");
  }
  increment = () => {
    this.setState((count) => ({ count: this.state.count + 1 }));
  }
    static getDerivedStateFromProps(props, state) {
        // console.log(props)
        // console.log(state)
        console.log('getDerivedStateFromProps called')
        if (props.favColor === state.color) {
            return ({ color: state.color });
        } else {
            return ({ color: props.favColor });
        }
    }
    componentDidMount() {
        console.log('componentDidMount called');
    }   render() {
            console.log("Render Method Called");
            return (
                <>
                    <p>This is Class Component</p>
                    <p>Count: {this.state.count}</p>
                    <p>Favorite Color: {this.state.color}</p>
                    <button onClick={this.increment}>Increment</button>
                </>
            )
        }
    }
    export default ClMethod;