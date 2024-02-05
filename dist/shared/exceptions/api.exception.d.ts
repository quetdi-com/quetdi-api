import { IApiErrorOption, IErrorItem } from '../interfaces';
export declare class ApiException extends Error implements IApiErrorOption {
    errorId?: string;
    code: string;
    statusCode: number;
    errors?: IErrorItem[] | [];
    constructor(options: IApiErrorOption);
}
