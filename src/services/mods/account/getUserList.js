/**
 * @desc 查看登录用户企业里员工列表
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
  /** 状态,是否禁用，1=启用,2=禁用 */
  state;
}

export const init = new defs.PageDTO();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/account/getUserList', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
