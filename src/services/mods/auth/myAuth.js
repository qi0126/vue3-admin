/**
 * @desc 查询登录用户的权限
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/auth/myAuth', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
