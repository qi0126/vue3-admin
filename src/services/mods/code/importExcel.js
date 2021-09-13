/**
 * @desc 导入基础数据
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 文件 */
  file;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/code/import', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
