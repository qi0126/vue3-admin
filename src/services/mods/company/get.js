/**
 * @desc 查询企业详情
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 企业id */
  companyId;
}

export const init = new defs.EnterpriseOperatingEntity();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/company/get', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
