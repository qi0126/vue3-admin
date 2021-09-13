/**
 * @desc 编辑角色名称
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 应用名称 */
  appName;
  /** 角色id */
  roleId;
  /** 角色名称 */
  roleName;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/role/edit', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
