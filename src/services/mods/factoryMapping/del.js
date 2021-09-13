/**
 * @desc 删除
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 供应商企业id */
  supplierId;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/factory_mapping/del', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
