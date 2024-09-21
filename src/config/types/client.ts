
export interface client_add_data {
    name: string;
    contactNumber: string;
    email: string;
    pocName: string;
    pocContactNumber: string;
    headOfficeAddress: string;
    logo: string | null;
    authUserId: number;
    authUserRole: number;
}
export interface client_edit_data {
    id: number;
    name: string;
    contactNumber: string;
    email: string;
    pocName: string;
    pocContactNumber: string;
    headOfficeAddress: string;
    logo: string | null;
    authUserId: number;
    authUserRole: number;
}
export interface client_view_data {
    id: number;
    authUserId: number;
    authUserRole: number;
}
export interface client_list_data {
    authUserId: number;
    authUserRole: number;
}
export interface client_delete_data {
    id: number;
    authUserId: number;
    authUserRole: number;
}

