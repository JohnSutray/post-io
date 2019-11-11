import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly storage = window.localStorage;

  put(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get<TValue>(key: string): TValue {
    return JSON.parse(this.storage.getItem(key));
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }
}
