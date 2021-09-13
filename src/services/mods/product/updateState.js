/**
 * @desc 更新产品状态
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** id */
  id;
  /** 是否启用:1:制单 2:待启用 3:已启动 4:禁用 */
  state;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pro/updateState', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
