import React, { Component } from 'react'
import axios from 'axios';

export class SelectTimeZone extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
            timeZones:[],
            selectedZoneTime:"",
            selectedZone:""
       }
   }  

    componentDidMount(){
        // GET request to get timeZone names for dropdown
        axios.get('http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=Europ')
        .then(response => {
            this.setState({
            timeZones: response.data.zones,
            selectedZone:response.data.zones[0].zoneName
          },()=>{
            // call to get getTime method which returns current time for selected zone
            this.getTime();
          })
        }); 
        this.interval = setInterval(() => {this.setState({selectedZoneTime:this.state.selectedZoneTime+5})}, 5000);             
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onZoneChange(e){
        this.getTime()
        this.setState({selectedZone:e.target.value})
    }

    //method to return current time for selected zone
    getTime(){
        axios.get('http://api.timezonedb.com/v2/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone='+ this.state.selectedZone)
        .then(response => this.setState({
            selectedZoneTime: response.data.timestamp
        }));
    }

    render() {
        return (
            <div className="zoneContent">
                <label>Select Timezone</label>
                <select onChange={this.onZoneChange.bind(this)}>
                  {this.state.timeZones.map((timezone) => <option key={timezone.zoneName} value={timezone.zoneName}>{timezone.zoneName}</option>)}
                </select>
                <h4>Current date and time at {this.state.selectedZone} Zone is : {this.timeStampToDateAndTime(this.state.selectedZoneTime)}</h4>
            </div>
        )
    }
    

    timeStampToDateAndTime(ts){
        if(ts!=""){
            var ts_msec = ts * 1000;
            var cdate = new Date(ts_msec);
            var year = cdate.getFullYear();
            var month = ("0" + (cdate.getMonth() + 1)).slice(-2);
            var date = ("0" + cdate.getDate()).slice(-2);
            var hours = ("0" + cdate.getHours()).slice(-2);
            var minutes = ("0" + cdate.getMinutes()).slice(-2);
            var seconds = ("0" + cdate.getSeconds()).slice(-2);
            return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
        } 
    }
}

export default SelectTimeZone
