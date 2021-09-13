/**
 * @desc 保存企业的权限
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 应用标识 */
  appName;
  /** 权限，用逗号分割 */
  auths;
  /** 企业id */
  companyId;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/auth/saveCompanyAuth', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
