/**
 * @desc 销售订单看板查看逾期订单概览
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.BaseOverviewVo();

export function request(params, body, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/overdue/overviewByRetailer', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
