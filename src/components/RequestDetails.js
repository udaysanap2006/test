import React from 'react'
import styled from 'styled-components'
import { BsFillExclamationCircleFill } from "react-icons/bs";

const StyledRequestDetails = styled.div`  
  
`
const RequestRefs = styled.p`
font-size: 10px;
margin: 0px;
width: 100px;
color: #252525;
float: left;
border-left: 1px solid #767676;
padding-left:5px;
line-height: initial;
`

const Cat = styled.p`
width: 70px;
font-size: 10px;
color: #252525;
float: left;
border-left: 1px solid #767676;
padding-left:5px;
line-height: initial;
`
const Status = styled.p`
width: 115px;
font-size: 10px;
color: #252525;
float: left;
border-left: 1px solid #767676;
padding-left:5px;
line-height: initial;
`

const RequestTitle = ({
    requestRef,
    cat,
    status
}) => (
  <StyledRequestDetails>
    <RequestRefs><span className="textColor">Request reference</span> {requestRef}</RequestRefs>
    <Cat><span className="textColor">Category</span> {cat}</Cat>
    <Status><span className="textColor">Request Status</span><br /><BsFillExclamationCircleFill /> {status}</Status>
  </StyledRequestDetails>
)

export default RequestTitle
