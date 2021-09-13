/**
 * @desc 查询权限树
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** appName */
  appName;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/auth/select', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
