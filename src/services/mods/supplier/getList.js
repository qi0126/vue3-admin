/**
 * @desc 查询供应商
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 1 启用/2 禁用 */
  isLock;
  /** 页码 最小1 */
  pageIndex;
  /** 每页行数 最小1 */
  pageSize;
  /** 模糊搜索字段 */
  search;
}

export const init = new defs.PageDTO();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/supplier/list', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
