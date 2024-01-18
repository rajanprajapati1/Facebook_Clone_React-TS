import React from 'react'

interface Props {
  
}

const Loader = (props: Props) => {
  return (
    <div style={{width:'100%',height:'100vh',display:'grid',placeItems:'center'}}>
   <div className="spinner center">
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
</div> </div>
  )
}

export default Loader
