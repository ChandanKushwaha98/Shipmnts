import React from 'react'
import OtherUser from './rightPanelComponent/OtherUser'
import elon_dp from "../../images/elon-musk.jpg"
import mark_dp from "../../images/mark.png"
import tata_dp from "../../images/Ratan-Tata.jpg"
import satya_dp from "../../images/Satya_Nadella.jpg"


const RightPanel = () => {
    return (
        <div className="rightPanel">
            <OtherUser img={tata_dp} name="Ratan Tata" />
            <OtherUser img={mark_dp} name="Mark ZUckreberg"/>
            <OtherUser img={elon_dp} name="Elon Musk"/>
            <OtherUser img={satya_dp} name="Satya Nadella"/>
            {/* <OtherUser img={ } name={ }/>
            <OtherUser img={ } name={ }/>
            <OtherUser img={ } name={ }/> */}
        </div>
    )
}

export default RightPanel
