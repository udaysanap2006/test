import React from 'react'
import styled from 'styled-components'
import { BsChevronDown} from "react-icons/bs";
import RequestControls from './RequestControls'
import RequestTitle from './RequestTitle'
import RequestDetails from './RequestDetails'


const StyledContainer = styled.div`
  border:  1px solid #252525;
  max-width: 780px;
  width: 100%;
  margin-left: 5px;
  height:100px;
`

const CardComponent = () => {
  return (
      <StyledContainer>
        <div>
            <RequestTitle
            title="Cancel / recall payment, GBP 1,000.00"
            subtitle="1234567890123456 (GB), KUIML Business Company"
            />
            <RequestControls />
         </div>
         <div>
             <RequestDetails requestRef='SET29383ABCH' category='Payment' status='Pending Authorization' />
             <span className="fullDetails">Full details <BsChevronDown /></span>
         </div>
         
      </StyledContainer>
  )
}

export default CardComponent
