/**
 * @desc 删除
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 权限值 */
  val;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/auth/del', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
