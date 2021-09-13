/**
 * @desc 根据登录用户查询可用应用
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/lower/myCompanyApp', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
