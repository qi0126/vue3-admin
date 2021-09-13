/**
 * @desc 查询登录用户的企业的应用里的角色
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** appName */
  appName;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/lower/myCompanyRole', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
