/**
 * @desc 查询柜台
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 柜台名称 */
  counterName;
  /** 1 启用/2 禁用 */
  lockStatus;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/counter/list', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
