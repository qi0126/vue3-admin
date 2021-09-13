/**
 * @description notFound
 */

import http from '@/api/http.tsx';

export function request(params) {
  return http.get('/pageNotFound', params);
}
