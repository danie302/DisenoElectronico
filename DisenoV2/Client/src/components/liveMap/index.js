// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
	GoogleMap,
	LoadScript,
	Marker,
	Polyline
} from "@react-google-maps/api";
import axios from "axios";

// Components

// Assets
import "./livemap.css";

// Import actions
import { getUserTrucks } from "../../actions/profileActions";

class LiveMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTruck: null,
			mapCenter: {
				lat: -3.745,
				lng: -38.523
			},
			mapZoom: 7,
			flightPath: [],
			RPM: 0
		};
		this.onClick = this.onClick.bind(this);
		this.reloadMap = this.reloadMap.bind(this);
	}
	componentDidMount() {
		this.props.getUserTrucks();
	}
	onClick(truckname) {
		this.setState({
			selectedTruck: truckname,
			mapCenter: {
				lat: -3.745,
				lng: -38.523
			},
			mapZoom: 7,
			flightPath: [],
			RPM: 0
		});
	}
	reloadMap() {
		const data = {
			truckname: this.state.selectedTruck
		};
		axios
			.post("/api/v1/user/liveLocation", data)
			.then(res => {
				let location = res.data.location;
				let parseLat;
				let parseLng;
				if (location != null) {
					parseLat = parseFloat(location.Lat);
					parseLng = parseFloat(location.Lng);
				} else {
					parseLat = 0;
					parseLng = 0;
				}
				let latlng = {
					lat: parseLat,
					lng: parseLng
				};
				let RPM = parseFloat(location.RPM);
				if (this.state.flightPath.length < 1 || latlng.lat < 1) {
					this.setState({
						mapCenter: latlng,
						flightPath: [latlng],
						RPM: RPM
					});
				} else {
					let newPath = [...this.state.flightPath, latlng];
					this.setState({
						mapCenter: latlng,
						flightPath: newPath,
						RPM: RPM
					});
				}
			})
			.then(() => {
				setTimeout(() => {
					this.reloadMap();
				}, 1000);
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
				<div className='LiveMapBox'>
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
							<Marker
								onLoad={marker => {
									this.reloadMap();
								}}
								position={this.state.mapCenter}
							/>
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
					<div className='Stat-Box'>
						<p1 className='Stat-title'>{this.state.selectedTruck} Info</p1>
						<div className='line' />
						<p1 className='Stat-rpm'>RPM: {this.state.RPM}</p1>
						<p1 className='Stat-lat'>Latitude: {this.state.mapCenter.lat}</p1>
						<p1 className='Stat-lng'>Longitude: {this.state.mapCenter.lng}</p1>
					</div>
				</div>
			);
		}
		return (
			<div className=''>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<h1 className='display-4'>Live Map</h1>
							<div>
								<p className=' lead text-muted'>Welcome {user.user}</p>
								<p>Choose the truck you want to track</p>
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
								{map}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

LiveMap.propTypes = {
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
	getUserTrucks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile,
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ getUserTrucks }
)(LiveMap);
