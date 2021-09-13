/**
 * @desc 设置/取消管理员
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 设置管理员：true（设置）  false（取消） */
  is;
  /** 用户id */
  uid;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/account/setAdmin', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
