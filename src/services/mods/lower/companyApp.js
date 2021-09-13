/**
 * @desc 根据企业查询可用应用
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 企业id */
  companyId;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/lower/companyApp', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
