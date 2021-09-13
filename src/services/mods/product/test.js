/**
 * @desc 导入产品excel
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 文件 */
  file;
  /** 供应商id */
  supplierId;
}

export const init = new defs.FrontResponse();

export function request(params, form, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pro/updateZipFile', params, 'POST'), {
    method: 'POST',
    body: form,

    ...options,
  });
}
