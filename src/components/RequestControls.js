import React from 'react'
import styled from 'styled-components'

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
const RequestControls = ({actions}) => (
  <StyledRequestControls>
    <Actions>
    {actions.map(({ label }) => (
        <Action>{label}</Action>
      ))}
    </Actions>
  </StyledRequestControls>
)

export default RequestControls
