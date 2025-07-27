export interface IFormatResponse<T> {
  message: string;
  status: number;
  data: T[];
}
