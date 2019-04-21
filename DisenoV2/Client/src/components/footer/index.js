// Dependencies
import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<div className='bg-dark text-white mt-5 p-4 text-center'>
				<footer>
					Copyright &copy; {new Date().getFullYear()} Truck Trackers
				</footer>
			</div>
		);
	}
}

export default Footer;
