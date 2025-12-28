declare type ErrorResponss = {
  message: string;
  success: boolean;
};

declare type SuccessResponse = {
  success: boolean;
} & T;

declare type ApiResponse<T> = ErrorResponss | SuccessResponse<T>;
