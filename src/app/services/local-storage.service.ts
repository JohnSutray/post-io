import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  put(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get<DataType>(key: string): DataType {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : null;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
