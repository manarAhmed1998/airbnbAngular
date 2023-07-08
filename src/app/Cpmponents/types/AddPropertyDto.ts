export class AddPropertyDto{
 propertyType:string='';
 pricePerNight:string='';
 insuranceTax:string='';
 description:string='';
 guestNumber:string='';
 propertyTitle:string='';
 country:string='';
 city:string='';
 street:string='';
 hostId:string='';
 rooms:Room[]=[];
 propertyRules:Rule[]=[];
 PropertyAmenities:Amenity[]=[];
}
export class Room{
    roomType:string='';
    numberOfBeds:string='';
    propertyId:string='';
    images:string='';
}
export class Image{
    path:string='';
}
export class Rule{
    rule:string='';
}
export class Amenity{
    amenity:string='';
}
