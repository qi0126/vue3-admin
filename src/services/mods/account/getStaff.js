/**
 * @desc 查看员工详情
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 用户id */
  uid;
}

export const init = new defs.AccountTable();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/account/getStaff', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
