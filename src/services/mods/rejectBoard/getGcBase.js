/**
 * @description 工厂拒单看板
 */

import http from '@/api/http.tsx';

export function request(params) {
  return http.post('/reject/getGcBase', params);
}
