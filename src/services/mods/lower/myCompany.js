/**
 * @desc 查询登录用户所属企业
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/lower/myCompany', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
