/**
     * @desc 修改收藏备注
如果备注内容为空,会设置默认值'无'
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, body, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/favorite/update', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
