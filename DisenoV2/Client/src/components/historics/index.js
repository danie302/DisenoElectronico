// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";
import axios from "axios";

// Components

// Assets
import "react-datepicker/dist/react-datepicker.css";

// Import actions

class Historics extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTruck: null,
			startDate: new Date(),
			endDate: new Date(),
			mapCenter: {
				lat: -3.745,
				lng: -38.523
			},
			mapZoom: 7,
			flightPath: [{ lat: -3.745, lng: -38.523 }]
		};
		this.onClick = this.onClick.bind(this);
		this.handleChangeStart = this.handleChangeStart.bind(this);
		this.handleChangeEnd = this.handleChangeEnd.bind(this);
		this.fetchHistorics = this.fetchHistorics.bind(this);
	}
	componentDidMount() {}
	onClick(truckname) {
		this.setState({
			selectedTruck: truckname
		});
	}
	handleChangeStart(date) {
		this.setState({
			startDate: date
		});
	}
	handleChangeEnd(date) {
		this.setState({
			endDate: date
		});
	}
	fetchHistorics() {
		let sDate = this.state.startDate;
		let sTime = `${sDate.getHours()}:${sDate.getMinutes()}`;
		sDate = `${sDate.getDate()}-${sDate.getMonth() +
			1}-${sDate.getFullYear()} `;
		let fDate = this.state.endDate;
		let fTime = `${fDate.getHours()}:${fDate.getMinutes()}`;
		fDate = `${fDate.getDate()}-${fDate.getMonth() +
			1}-${fDate.getFullYear()} `;

		const data = {
			truckname: this.state.selectedTruck,
			startDate: sDate,
			startTime: sTime,
			endDate: fDate,
			endTime: fTime
		};
		axios.post("/api/v1/user/getLocations", data).then(res => {
			let locations = res.data.locations;
			let paths = [];
			let pathsTimes = [];
			locations.map((path, index) => {
				paths[index] = {
					lat: parseFloat(path.Lat),
					lng: parseFloat(path.Lng)
				};
				pathsTimes[index] = {
					time: path.Time
				};
				return 0;
			});
			console.log(paths);
			this.setState({
				flightPath: paths,
				mapCenter: paths[0],
				mapZoom: 15
			});
		});
	}

	render() {
		const { user } = this.props.auth;
		const { trucks } = this.props.profile;
		const { selectedTruck } = this.state;
		let map;
		if (selectedTruck == null) {
			map = <div />;
		} else {
			map = (
				<div>
					<LoadScript
						id='script-loader'
						googleMapsApiKey='AIzaSyAaUgFuVypDeWug-2htEXKEssI7TpifSg8'
					>
						<GoogleMap
							id='map'
							mapContainerStyle={{
								height: "400px",
								width: "800px",
								borderRadius: "10px",
								margin: "4px"
							}}
							zoom={this.state.mapZoom}
							center={this.state.mapCenter}
						>
							<Polyline
								path={this.state.flightPath}
								options={{
									strokeColor: "#FF0000",
									strokeOpacity: 0.8,
									strokeWeight: 3,
									fillColor: "#FF0000",
									fillOpacity: 0.35,
									clickable: true,
									draggable: false,
									editable: false,
									visible: true,
									radius: 30000,

									zIndex: 1
								}}
							/>
						</GoogleMap>
					</LoadScript>
					<div
						className='btn btn-info btn-block mt-4'
						onClick={this.fetchHistorics}
					>
						Show data
					</div>
				</div>
			);
		}
		return (
			<div className='dashboard'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<h1 className='display-4'>Historics</h1>
							<div>
								<p className=' lead text-muted'>Welcome {user.user}</p>
								<p>Choose the truck you want to see the historics</p>
								<div className='dropdown'>
									<button
										className='btn btn-secondary dropdown-toggle'
										type='button'
										id='dropdownMenuButton'
										data-toggle='dropdown'
										aria-haspopup='true'
										aria-expanded='false'
									>
										{this.state.selectedTruck
											? " " + this.state.selectedTruck + " "
											: " Truck "}
									</button>
									<div
										className='dropdown-menu'
										aria-labelledby='dropdownMenuButton'
									>
										{trucks.map(truck => {
											return (
												<div
													className='dropdown-item'
													key={truck.id}
													type='button'
													onClick={() => {
														this.onClick(truck.truckname);
													}}
												>
													{truck.truckname}
												</div>
											);
										})}
									</div>
								</div>
								<div>Date Picker</div>
								<DatePicker
									selected={this.state.startDate}
									selectsStart
									startDate={this.state.startDate}
									endDate={this.state.endDate}
									onChange={this.handleChangeStart}
									showTimeSelect
								/>

								<DatePicker
									selected={this.state.endDate}
									selectsEnd
									startDate={this.state.startDate}
									endDate={this.state.endDate}
									onChange={this.handleChangeEnd}
									showTimeSelect
								/>
								{map}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Historics.propTypes = {
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile,
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{}
)(Historics);
