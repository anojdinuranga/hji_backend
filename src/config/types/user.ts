export interface user_login_data {    
    employeeNumber: string;    
    password: string;
    authUserId: number;
    authUserRole: number;
    ipAddress: string;
    osName: string;
}
export interface user_check_data {
    authUserId: number;
    authUserRole: number;
}
export interface user_logout_data {
    authUserId: number;
    authUserRole: number;
    hashToken: string;
}
export interface user_add_data {
    employeeNumber: string;
    name: string;
    password: string;
    email: string;
    mobile: string;
    department: number;
    designation: number;
    authUserId: number;
    authUserRole: number;
}
export interface user_edit_data {
    userId: number;
    employeeNumber: string;
    name: string;
    email: string;
    department: number;
    designation: number;
    mobile: string;
    authUserId: number;
    authUserRole: number;
}
export interface user_view_data {
    userId: number;
    authUserId: number;
    authUserRole: number;
}
export interface user_list_data {
    authUserId: number;
    authUserRole: number;
}
export interface user_delete_data {
    userId: number;
    authUserId: number;
    authUserRole: number;
}
