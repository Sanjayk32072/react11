import { Component } from "react";

class Cls extends Component {
	constructor(props) {
		console.log("constructor got called")
		super(props)
		this.state = {
			count: 0,
			x: 5,
		}
	}
    // static getDerivedStateFromProps ()
    // {
    //     console.log("getDerivedStateFromProps is getting called")
    //     return this.state;
    // }
    componentDidMount ()
    {
         console.log(" component did mount called")
    }
    shouldComponentUpdate ()
    {
        console.log(" should component get update gor called")
        return true;
    }
    componentDidUpdate ()
    {
        console.log("component did update got called")
    }
    render ()
    {
        console.log("render got called")
		return (
			<div>
				<p>{this.state.x}</p>
				<p>{this.state.count}</p>
				<button
					onClick={() => {
						this.setState({
							count: this.state.count + 1,
							x: this.state.x - 1,
						})
					}}>
					click me
				</button>
				<h1>I'm, a class component </h1>
			</div>
		)
	}
}
export default Cls;