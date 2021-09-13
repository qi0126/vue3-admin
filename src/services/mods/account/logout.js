/**
 * @desc 退出登录
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/account/logout', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
