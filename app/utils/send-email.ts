import { MyFormData } from './../app/(auth)/contact/page';

export interface IResponse {
    message:string;
    status: "pending" | "success" | "failed";
}
export async function sendEmail(data: MyFormData): Promise<IResponse> {
    let resObj: IResponse = {
        message: "",
        status: "pending"
    };

    const apiEndpoint = '/api/email';

    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
        resObj.message = responseData.message;
        resObj.status = "success";
    } catch (err) {
        resObj.message = err instanceof Error ? err.message : "An unknown error occurred";
        resObj.status = "failed";
    }

    return resObj;
}


