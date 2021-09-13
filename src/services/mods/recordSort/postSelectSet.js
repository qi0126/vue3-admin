/**
 * @desc 根据类型,查看配置列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 模糊搜索虚拟名称 */
  search;
  /**  '映射类型 1:销售商设置 2:供应商设置 3:客户设置',  */
  type;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/recordSort/selectSet', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
