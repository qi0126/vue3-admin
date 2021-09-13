/**
     * @desc 查询操作日志
如果是管理员，则查询出当前公司所有的操作日志,否则,只查询当前用户的操作日志
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 截止日期字符串,格式如'yyyy-MM-dd' */
  endDate;
  /** 搜索关键词,对公司名,姓名,模块,动作 进行模糊搜索 */
  keyWord;
  /** 页码,为大于0的整数 */
  page;
  /** 每页行数,为大于0的整数 */
  pageRow;
  /** 起始日期字符串,格式如'yyyy-MM-dd' */
  startDate;
}

export const init = new defs.PageDTO();

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/log/queryList', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
