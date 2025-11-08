
export interface Page<T> {
  page?: number;
  size?: number;
  totalElement?: number;
  totalPage?: number;
  content: T[];

  /**
  "page": 1,
  "size": 2,
  "totalElement": 100002,
  "totalPage": 50001,
  "content": [
     */
}
