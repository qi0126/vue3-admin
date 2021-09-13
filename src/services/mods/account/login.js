/**
 * @desc 登录
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 账号 */
  loginName;
  /** 密码 */
  password;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/account/login', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
