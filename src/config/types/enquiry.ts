
export interface enquiry_add_data {
    client: number;
    type: number;
    file: string | null;
    file2: string | null;
    developmentType: number | null;
    orderType: number | null;
    sampleType: number | null;
    authUserId: number;
    authUserRole: number;
}
export interface enquiry_edit_data {
    id: number;
    client: number;
    type: number | null;
    file: string | null;
    file2: string | null;
    developmentType: number | null;
    orderType: number | null;
    sampleType: number | null;
    authUserId: number;
    authUserRole: number;
}
export interface enquiry_view_data {
    id: number;
    authUserId: number;
    authUserRole: number;
}
export interface enquiry_list_data {
    authUserId: number;
    authUserRole: number;
}
export interface enquiry_delete_data {
    id: number;
    authUserId: number;
    authUserRole: number;
}

