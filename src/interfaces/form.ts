export interface stepOneFormData {
    name: string;
    email: string;
    phone : string;
}

export interface stepTwoFormData {
    plan : string;
    subscription : string;
}

export interface stepThreeFormData {
    online : boolean;
    storage : boolean;
    profile : boolean;
}
export interface stepFourFormData {
    confirmation: boolean;
}

export interface FormData {
    1: stepOneFormData;
    2: stepTwoFormData;
    3: stepThreeFormData;
    4: stepFourFormData;
}
