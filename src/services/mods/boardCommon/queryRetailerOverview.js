/**
 * @desc 销售订单看板概览列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = [];

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/board/common/retailerOverview', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
