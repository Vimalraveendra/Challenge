import "./HotelCollections.css"
import Hotel from "../Hotel/Hotel"
const HotelCollections=({hotels,adults,children})=>{
    return(
        <div className="hotel-collections">
        {
            hotels.map(hotel=>{
           return <Hotel
           key ={hotel.id}
           id={hotel.id}
           address1={hotel.address1}
           address2={hotel.address2}
           starRating={hotel.starRating }
           images={hotel.images}
           name={hotel.name}
           adults={adults}
           children={children}
           />
        })}
        
        </div>
    )
}

export default HotelCollections;