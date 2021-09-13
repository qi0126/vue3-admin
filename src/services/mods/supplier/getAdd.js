/**
 * @desc 查询供应商是否可以添加
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 供应商id */
  supplierId;
}

export const init = false;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/supplier/getAdd', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
