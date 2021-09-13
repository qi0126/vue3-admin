/**
 * @desc 查询企业的应用，是否勾选
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 企业id */
  companyId;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/company/selectApp', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
