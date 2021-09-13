/**
 * @desc 禁用产品(根据状态批量或则单个修改数据)
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** id 多个 则用逗号相隔开  132,456,789 */
  id;
  /** 是否启用:1:制单 2:待启用 3:已启动 4:禁用 */
  state;
}

export const init = new defs.FrontResponse();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/pro/forbidden', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
