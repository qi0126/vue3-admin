/**
 * @desc 查看员工(自己)详情
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.AccountTable();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/account/myInfo', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
