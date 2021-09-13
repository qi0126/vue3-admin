/**
 * @desc 查询产能列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 名称 */
  search;
  /** 供应商id */
  supplierId;
  /** type */
  type;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/proMigra/selectProCapacity', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
