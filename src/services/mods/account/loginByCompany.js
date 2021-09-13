/**
 * @desc 登录(选择公司)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 公司id */
  companyId;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/account/loginByCompany', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
