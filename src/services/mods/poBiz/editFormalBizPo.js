/**
 * @desc 订单管理编辑
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/pobiz/editFormalBizPo', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
