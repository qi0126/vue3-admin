/**
 * @desc 保存角色的权限
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 权限，用逗号分割 */
  auths;
  /** 角色id */
  roleId;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/auth/saveRoleAuth', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
