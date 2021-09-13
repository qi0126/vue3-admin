/**
 * @description 工厂交期差异看板
 */

import http from '@/api/http.tsx';

export function request(params) {
  return http.post('/variant/getGcBase', params);
}
