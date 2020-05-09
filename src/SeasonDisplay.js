import React from "react"
import "./SeasonDisplay.css"

/*const seasonCongfig={
  Sumer:{
    text:"Let's hit the beach",
    iconName:'sun'
  },
  Winter:{
    text:"Burr it is cold!",
    iconName:'sonwflake'
  }
}*/
const getSeason=(lat,month)=>{
  
  if(month>2 && month<9){
    return lat>0 ? 'Summer':'Winter'
  }
  else{
    return lat>0?'Winter':'Summer'
  }
 }

 const SeasonDisplay=(props)=>{
  const Season=getSeason(props.lat,new Date().getMonth())
  const text=Season==='Winter'?"Burr it is cold!":"Let's hit the beach"
  const icon=Season==='Winter'?"sonwflake":"sun"
  return(
    <div className={` season-display ${Season}`}>
    <i className={`summer icon-left massive ${icon} icon`}/>
    <h1>{text}</h1>
    <i className={`winter icon-right massive ${icon} icon`}/>
    </div>
  )
}
export default SeasonDisplay