import React from 'react'
import styled from 'styled-components'
import * as ConstStrings from './fileWithConstants';
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

const Category = styled.p`
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
    category,
    status
}) => (
  <StyledRequestDetails>
    <RequestRefs><span className="textColor">{ConstStrings.REQUEST_REF}</span> {requestRef}</RequestRefs>
    <Category><span className="textColor">{ConstStrings.CATEGORY}</span> {category}</Category>
    <Status><span className="textColor">{ConstStrings.REQUEST_STATUS}</span><br /><BsFillExclamationCircleFill /> {status}</Status>
  </StyledRequestDetails>
)

export default RequestTitle
