/**
 * @desc 根据供应商id查询供应商
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 供应商id */
  supplierId;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/supplier/get', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
