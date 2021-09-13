/**
 * @desc 根据企业类型查询可用应用
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 企业类型 */
  type;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/lower/companyTypeApp', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
