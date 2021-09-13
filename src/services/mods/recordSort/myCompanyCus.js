/**
 * @desc 查询登录用户企业的客户
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 只查看自己的客户：true(是)  */
  isMy;
  /** 搜索字段 */
  search;
  /** 设置id  必填 */
  setId;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/recordSort/myCompanyCus', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
