
export interface user_register_request_add_data {
    name: string;
    employeeNumber: string;
    authUserId: number;
    authUserRole: number;
}
export interface user_register_request_edit_data {
    id: number;
    name: string;
    employeeNumber: string;
    authUserId: number;
    authUserRole: number;
}
export interface user_register_request_view_data {
    id: number;
    authUserId: number;
    authUserRole: number;
}
export interface user_register_request_list_data {
    authUserId: number;
    authUserRole: number;
}
export interface user_register_request_delete_data {
    id: number;
    authUserId: number;
    authUserRole: number;
}

export interface user_register_request_accept_data {
    id: number;
    password: string;
    email: string;
    mobile: string; 
    department: number;
    designation: number;
    authUserId: number;
    authUserRole: number;
}
export interface user_register_request_reject_data {
    id: number;
    authUserId: number;
    authUserRole: number;
}

