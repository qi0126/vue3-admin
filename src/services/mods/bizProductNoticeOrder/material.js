/**
 * @desc 查看打印备料单详情
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 投产单id列表，用逗号分割 */
  ids;
  /** 投料组名称 */
  material;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/product_notice/material', params, 'GET'),
    {
      method: 'GET',

      ...options,
    },
  );
}
