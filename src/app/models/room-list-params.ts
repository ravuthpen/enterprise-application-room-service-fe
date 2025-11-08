export interface RoomListParams {

    page?: number;
    size?: number;
    sort?: string;
    roomType?:string;
    price?: number;

    priceMin: number | null;
    priceMax: number | null;
}
