declare type ErrorResponss = {
  message: string;
  success: boolean;
};

declare type SuccessResponse = {
  success: boolean;
};

declare type ApiResetResponse = ErrorResponss | SuccessResponse;
