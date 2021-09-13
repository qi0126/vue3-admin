/**
 * @desc 新建角色
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 应用名称 */
  appName;
  /** 角色名称 */
  roleName;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/role/add', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
