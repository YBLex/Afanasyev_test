import { STORAGE_NAME } from './consts.js';

export function writeLocalData(data) {
  const stringifiedData = JSON.stringify(data);
  window.localStorage.setItem(STORAGE_NAME, stringifiedData);
}

export function extractLocalData() {
  const data = JSON.parse(window.localStorage.getItem(STORAGE_NAME));
  return data;
}
