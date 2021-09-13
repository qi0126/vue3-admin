/**
 * @desc 导入产品excel
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 文件 */
  file;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pro/import', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
