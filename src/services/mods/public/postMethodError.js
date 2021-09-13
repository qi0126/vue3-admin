/**
 * @description methodError
 */

import http from '@/api/http.tsx';

export function request(params) {
  return http.post('/methodError', params);
}
