import React from "react"

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
 console.log(Season)
  return <div>SeasonDispaly: {props.lat}</div>
}
export default SeasonDisplay