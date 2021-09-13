/**
 * @desc 查询企业类型的权限,带勾选
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 应用标识 */
  appName;
  /** 企业类型 */
  type;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/auth/typeAuth', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
