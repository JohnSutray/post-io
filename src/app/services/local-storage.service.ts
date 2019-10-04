import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  put(key: string, data: any) {
    localStorage.setItem(key, data);
  }

  get<DataType>(key: string): DataType {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : null;
  }
}
