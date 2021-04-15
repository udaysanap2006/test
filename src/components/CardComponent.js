import React from 'react'
import styled from 'styled-components'
import RequestControls from './RequestControls'
import RequestTitle from './RequestTitle'
import RequestDetails from './RequestDetails'
import { BsFillEnvelopeFill, BsFillInboxFill,BsChevronDown} from "react-icons/bs";

const StyledContainer = styled.div`
  border:  1px solid #252525;
  max-width: 780px;
  width: 100%;
  margin-left: 5px;
  height:100px;
`

const CardComponent = () => {
    const buttons = [
        {
          label: (
            <>
              <BsFillEnvelopeFill /> 
            </>
          ),
        },
        {
            label: (
              <>
                <BsFillInboxFill /> 
              </>
            ),
          },
          {
            label: (
              <>
                Reject
              </>
            )
          },
          {
            label: (
              <>
                Authorize
              </>
            )
          },
      ]
  return (
      <StyledContainer>
        <div>
            <RequestTitle
            title="Cancel / recall payment, GBP 1,000.00"
            subtitle="1234567890123456 (GB), KUIML Business Company"
            />
            <RequestControls actions={buttons}/>
         </div>
         <div>
             <RequestDetails requestRef='SET29383ABCH' cat='Payment' status='Pending Authorization' />
             <span className="fullDetails">Full details <BsChevronDown /></span>
         </div>
         
      </StyledContainer>
  )
}

export default CardComponent
