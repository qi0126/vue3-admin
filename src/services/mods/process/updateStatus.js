/**
 * @desc 更新状态
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** id */
  id;
  /** 状态: 1:启用 2:禁勇 */
  status;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/process/updateStatus', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
