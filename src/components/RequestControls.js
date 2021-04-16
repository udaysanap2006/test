import React from 'react'
import styled from 'styled-components'
import { BsFillEnvelopeFill, BsFillInboxFill} from "react-icons/bs";

const StyledRequestControls = styled.div`
    text-align:right;
    height:48px
`
const Actions = styled.div`
margin: 17px 0px 11px 0px;
`

const Action = styled.button`
  margin:1px;
 `
const RequestControls = () => (
  <StyledRequestControls>
    <Actions>
      <Action><BsFillEnvelopeFill /></Action>
      <Action><BsFillInboxFill /></Action>
      <Action>Reject</Action>
      <Action>Authorize</Action>
    </Actions>
  </StyledRequestControls>
)

export default RequestControls
