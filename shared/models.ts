export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export interface User {
  id: number;
  email: string;
}
