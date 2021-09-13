/**
 * @desc 编辑
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 鼎捷信号识别码 */
  identityCode;
  /** 供应商企业id */
  supplierId;
  /** 供应商企业名称 */
  supplierName;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/factory_mapping/edit', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
