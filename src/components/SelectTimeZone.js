import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Moment from 'react-moment';

function SelectTimeZone() {
    const [timeZones, setTimeZones] = useState([])
    const [selectedZoneTime, setSelectedZoneTime] = useState("")
    const [selectedZone, setSelectedZone] = useState("")
    useEffect(() => {
            // GET request to get timeZone names for dropdown
            axios.get('http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=Europ')
            .then(response => {
                console.log("result",response);
                setTimeZones(response.data.zones);
                setSelectedZone(response.data.zones[0].zoneName);
                axios.get('http://api.timezonedb.com/v2/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone='+ response.data.zones[0].zoneName)
                .then(response => setSelectedZoneTime(response.data.timestamp));
                
            }); 
            const timer = window.setInterval(() => {
                setSelectedZoneTime(selectedZoneTime => selectedZoneTime + 5); // 
              }, 5000);
              return () => {
                window.clearInterval(timer);
              };        
    }, [])

    const onZoneChange = (e) =>{
        setSelectedZone(e.target.value)
        getTime()        
    }

    //method to return current time for selected zone
    const getTime = () => {
        axios.get('http://api.timezonedb.com/v2/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone='+ selectedZone)
        .then(response => setSelectedZoneTime(response.data.timestamp));
    }

    return (
        selectedZoneTime ?
            <div className="zoneContent">
                <label>Select Timezone</label>
                <select onChange={onZoneChange.bind(this)}>
                  {timeZones.map((timezone) => <option key={timezone.zoneName} value={timezone.zoneName}>{timezone.zoneName}</option>)}
                </select>
                <h4>Current date and time at {selectedZone} Zone is :<Moment unix>{selectedZoneTime}</Moment></h4>
            </div> : <div className="zoneContent">Loading...</div>
    )
}

export default SelectTimeZone

