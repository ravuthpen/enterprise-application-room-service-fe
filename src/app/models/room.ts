import { GenderPreference, PropertyType, RoomType } from "./enum";
import { RoomLocation } from "./room-location";

export interface Room {
  id?: string;
  name?: string;
  price?: number;
  floor?: number;

  location?: RoomLocation;

  hasFan?: boolean;
  hasAirConditioner?: boolean;
  hasPrivateBathroom?: boolean;
  hasParking?: boolean;
  hasBalcony?: boolean;
  hasKitchen?: boolean;
  hasFridge?: boolean;
  hasWashingMachine?: boolean;
  hasTV?: boolean;
  hasWiFi?: boolean;
  hasElevator?: boolean;

  maxOccupants?: number;

  isPetFriendly?: boolean;
  isSmokingAllowed?: boolean;
  isSharedRoom?: boolean;

  genderPreference?: GenderPreference;
  roomType?: RoomType;
  propertyType?: PropertyType;

  distanceToCenter?: number;
  nearbyLandmarks?: string[];

  isUtilityIncluded?: boolean;
  depositRequired?: boolean;
  minStayMonths?: number;

  hasPhotos?: boolean;
  photoCount?: number;

  hasVideoTour?: boolean;
  verifiedListing?: boolean;

  availableFrom?: string;   //IOS string
  availableTo?: string;     //IOS string

  createdAt?: string;
  lastUpdated?: string;

  extraAttributes?: Record<string, any>;

  /*

    "id": "room_1003",
        "name": "ratione Room 1003",
        "price": 306.06045982983665,
        "floor": 1,
        "roomSize": 30.937720207178252,
        "location": {
            "country": "Cambodia",
            "city": "Wuckertburgh",
            "district": "Eddy Corners",
            "street": "95496 Upton Hollow",
            "fullAddress": "Apt. 764 44442 Grady Fort, West Akilah, NH 33234-5225"
        },
        "hasFan": false,
        "hasAirConditioner": true,
        "hasParking": true,
        "hasPrivateBathroom": false,
        "hasBalcony": false,
        "hasKitchen": true,
        "hasFridge": true,
        "hasWashingMachine": false,
        "hasTV": false,
        "hasWiFi": true,
        "hasElevator": true,
        "maxOccupants": 2,
        "isPetFriendly": true,
        "isSmokingAllowed": true,
        "isSharedRoom": true,
        "genderPreference": "FEMALE",
        "roomType": "DOUBLE",
        "propertyType": "SHARED_HOUSE",
        "distanceToCenter": 1.237720180391214,
        "nearbyLandmarks": [
            "gym",
            "mall"
        ],
        "isUtilityIncluded": false,
        "depositRequired": true,
        "minStayMonths": 2,
        "hasPhotos": true,
        "photoCount": 9,
        "hasVideoTour": false,
        "verifiedListing": true,
        "availableFrom": "2025-08-27T11:09:50.624",
        "availableTo": "2026-01-06T11:09:50.624",
        "createdAt": "2025-08-20T11:09:50.624",
        "lastUpdated": "2025-08-20T11:09:50.624",
        "extraAttributes": {}
    */
}
