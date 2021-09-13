/**
 * @desc 保存企业类型的权限
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 应用标识 */
  appName;
  /** 权限，用逗号分割 */
  auths;
  /** 企业类型 */
  type;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/auth/saveTypeAuth', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
