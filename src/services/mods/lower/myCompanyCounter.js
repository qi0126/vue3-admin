/**
 * @desc 查询登录用户企业的柜台
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 只查看自己的客户：true(是)  */
  isMy;
  /** 搜索字段 */
  search;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/lower/myCompanyCounter', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
