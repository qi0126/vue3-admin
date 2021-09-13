/**
 * @desc 查询角色的权限树
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 角色id */
  roleId;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/auth/roleAuth', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
