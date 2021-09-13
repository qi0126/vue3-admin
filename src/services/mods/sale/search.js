/**
 * @desc 查询销售商列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 页码 */
  page;
  /** 搜索字段 */
  search;
  /** 条数 */
  size;
}

export const init = new defs.PageDTO();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/sale/search', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
