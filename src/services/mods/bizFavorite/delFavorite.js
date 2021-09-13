/**
     * @desc 取消收藏
柜台单和客单都可以用这个接口删除收藏
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** bizId */
  bizId;
}

export const init = undefined;

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/favorite/del', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
