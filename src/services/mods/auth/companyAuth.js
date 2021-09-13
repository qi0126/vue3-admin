/**
 * @desc 查询企业的权限树
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 应用标识 */
  appName;
  /** 企业id */
  companyId;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/auth/companyAuth', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
