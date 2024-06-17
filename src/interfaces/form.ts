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
    step1: stepOneFormData;
    step2: stepTwoFormData;
    step3: stepThreeFormData;
    step4: stepFourFormData;
}
