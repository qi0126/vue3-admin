/**
 * @desc 查询公司管理字典
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 值,模糊查询 */
  codeName;
  /** 类型: 公司类型 1, 所属区 2, 客户合同类型 3, 客户委托项目 4,工厂类型 5, 供应商合同类型 6, 供应商委托项目7 */
  codeType;
}

export const init = [];

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/companyCode/list', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
