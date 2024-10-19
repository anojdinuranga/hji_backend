export interface enquiry_data_add_data {
    enquiryId: number;
    enquiryAccessoriesFabrics: Array<{
        knitStructure: string;
        blend: string;
        gsm: number;
        placement: string;
    }>;
    enquiryMainFabrics: Array<{
        knitStructure: string;
        blend: string;
        gsm: number;
        finish: string;
        dryMethod: string;
        placement: string;
    }>;
    enquirySpecSheets: Array<{
        pointOfMeasure: string;
        code: string;
        howToMeasure: string;
        critical: number;
        type: number;
        tolerance: number;
        s: number;
        m: number;
        l: number;
        xl: number;
    }>;
    enquiryTrims: Array<{
        type: number;
        description: string;
        content: string;
        placement: string;
    }>;
    enquiryCombo: Array<{
        comboNo: string;
        size: string;
        pieces: string;
    }>;
    values: Array<string>;
    authUserId: number;
    authUserRole: number;
}

export interface enquiry_data_edit_data {
    enquiryId: number;
    enquiryAccessoriesFabrics: Array<{
        knitStructure: string;
        blend: string;
        gsm: number;
        placement: string;
    }>;
    enquiryMainFabrics: Array<{
        knitStructure: string;
        blend: string;
        gsm: number;
        finish: string;
        dryMethod: string;
        placement: string;
    }>;
    enquirySpecSheets: Array<{
        pointOfMeasure: string;
        code: string;
        howToMeasure: string;
        critical: number;
        type: number;
        tolerance: number;
        s: number;
        m: number;
        l: number;
        xl: number;
    }>;
    enquiryTrims: Array<{
        type: number;
        description: string;
        content: string;
        placement: string;
    }>;
    authUserId: number;
    authUserRole: number;
}

export interface enquiry_data_list_data {
    authUserId: number;
    authUserRole: number;
}

export interface enquiry_data_view_data {
    enquiryId: number;
    authUserId: number;
    authUserRole: number;
}

export interface enquiry_data_delete_data {
    enquiryId: number;
    authUserId: number;
    authUserRole: number;
}
