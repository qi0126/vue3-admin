/**
 * @desc 查看配置列表
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 页码 */
  page;
  /** 行数 */
  rows;
  /** 模糊搜索虚拟名称 */
  search;
  /**  '映射类型 1:销售商设置 2:供应商设置 3:客户设置',  */
  type;
}

export const init = new defs.PageDTO();

export function request(params, options = {}) {
  return PontCore.fetch(
    PontCore.getUrl('/saleMappingRelation/select', params, 'POST'),
    {
      method: 'POST',

      ...options,
    },
  );
}
