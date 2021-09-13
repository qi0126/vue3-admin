/**
 * @desc 查询企业员工账号
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 企业id */
  companyId;
  /** 页码 */
  page;
  /** 搜索字段 */
  search;
  /** 条数 */
  size;
}

export const init = new defs.PageDTO();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/company/selectUserList', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
