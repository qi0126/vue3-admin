/**
 * @desc 查询特定类型的企业
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 搜索字段 */
  search;
  /** 企业类型 */
  type;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/lower/select', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
