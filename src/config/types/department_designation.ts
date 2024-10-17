export interface department_designation_add_data {    departmentId: number;    designation: string;    authUserId: number;
    authUserRole: number;

}
export interface department_designation_edit_data {
    id: number;
    departmentId: number;
    designation: string;
    authUserId: number;
    authUserRole: number;

}
export interface department_designation_list_data {
    authUserId: number;
    authUserRole: number;

}
export interface department_designation_view_data {
    id: number;
    authUserId: number;
    authUserRole: number;

}