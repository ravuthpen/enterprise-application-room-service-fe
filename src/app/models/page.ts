
export interface Page<T> {
  page?: number;
  size?: number;
  totalElements?: number;
  totalPage?: number;
  content: T[];
}
