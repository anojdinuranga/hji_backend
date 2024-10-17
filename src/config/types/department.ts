export interface department_add_data {    
    departmentName: string;    
    authUserId: number;    
    authUserRole: number;
    designations: string[];
}
export interface department_edit_data {
    id: number;
    departmentName: string;
    authUserId: number;
    authUserRole: number;
    designations: string[];
}
export interface department_list_data {
    authUserId: number;
    authUserRole: number;

}
export interface department_view_data {
    id: number;
    authUserId: number;
    authUserRole: number;

}