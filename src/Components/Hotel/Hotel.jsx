
    

const Hotel = ({id,name,address1,address2,starRating,images,adults,children})=>{
    console.log('ida',id)
    return(
        <div className="hotel-container">
                
                <div className="top-heading">
                    <div className="hotel-heading">
                        <div className="left-heading">
                            
                                
                                    <div className="center-heading">
                                        <h3>{name}</h3>
                                        <h4>{address1}</h4>
                                        <h5>{address2} </h5>
                                    </div>
                         </div>
                    
                       
                    </div>
                </div>
 
         <div>
        </div>
          
        </div>
    )
}

export default Hotel;   