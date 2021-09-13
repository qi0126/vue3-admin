/**
 * @desc 保存企业的应用
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 应用列表，用逗号分割 */
  apps;
  /** 企业id */
  companyId;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/company/saveApp', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
