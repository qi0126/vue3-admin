/**
 * @desc 查询团队
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 1 启用/2 禁用 */
  lockStatus;
  /** 团队名称 */
  teamName;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/team/list', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
