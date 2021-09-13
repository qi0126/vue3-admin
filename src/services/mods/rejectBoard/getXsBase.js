/**
 * @description 销售拒单看板
 */

import http from '@/api/http.tsx';

export function request(params) {
  return http.post('/reject/getXsBase', params);
}
