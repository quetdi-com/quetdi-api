export interface IApiErrorOption {
  errorId?: string;
  message?: string;
  statusCode?: number;
  code?: string;
  errors?: IErrorItem[] | [];
}

export interface IErrorItem {
  errorId: string;
  field: string;
  message: string;
}
