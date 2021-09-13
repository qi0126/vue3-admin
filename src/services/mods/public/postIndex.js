/**
 * @description index
 */

import http from '@/api/http.tsx';

export function request(params) {
  return http.post('/index', params);
}
