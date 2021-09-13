/**
 * @desc 导出ProductionOrder（详细版）
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 投产单id列表，用逗号分割 */
  ids;
  /** 投产单号，单个导出需要 */
  no;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/product_notice/export', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
