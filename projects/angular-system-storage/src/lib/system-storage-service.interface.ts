export interface ISystemStorageService {
  /**
   * set item
   */
  setItem(key: string, value: any): void;

  /**
   * get item by key
   */
  getItem(key: string): any;

  /**
   * remove item by key
   */
  removeItem(key: string): void;

  /**
   * clear all items
   */
  clearStorage(): void;
}
