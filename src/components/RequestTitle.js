import React from 'react'
import styled from 'styled-components'

const StyledRequestTitle = styled.div`  
  float:left;
  height:48px
`

const Title = styled.p`
font-size:20px;
margin: 0px;
color: #252525;
`
const Subtitle = styled.p`
  
  font-size:12px;
  color: #252525;
`

const RequestTitle = ({
  title,
  subtitle
}) => (
  <StyledRequestTitle>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </StyledRequestTitle>
)

export default RequestTitle