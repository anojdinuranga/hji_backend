
export interface order_add_data {
    crNumber: string;
    buyerId: number;
    enquiryDate: string;
    styleNo: string;
    image: string | null;
    fabricBlend: string;
    comboNo: string;
    valueAddedProcess: 'yes' | 'no';
    projectedQtyPieces: number;
    samPerPiece: number;
    lapdipNo: string;
    expectedOrderPlacementDate: string;
    quotedPrice: number;
    fabricPrice: number;
    fabricConsumption: number;
    yarnPrice: number;
    lapdipCost: number;
    trimCost: number;
    techPack: string | null;
    gsm: number;
    authUserId: number;
    authUserRole: number;
}
export interface order_edit_data {
    id: number;
    crNumber: string;
    buyerId: number;
    enquiryDate: string;
    styleNo: string;
    image: string | null;
    fabricBlend: string;
    comboNo: string;
    valueAddedProcess: 'yes' | 'no';
    projectedQtyPieces: number;
    samPerPiece: number;
    lapdipNo: string;
    expectedOrderPlacementDate: string;
    quotedPrice: number;
    fabricPrice: number;
    fabricConsumption: number;
    yarnPrice: number;
    lapdipCost: number;
    trimCost: number;
    techPack: string | null;
    gsm: number;
    authUserId: number;
    authUserRole: number;
}
export interface order_view_data {
    id: number;
    authUserId: number;
    authUserRole: number;
}
export interface order_list_data {
    authUserId: number;
    authUserRole: number;
}
export interface order_delete_data {
    id: number;
    authUserId: number;
    authUserRole: number;
}

