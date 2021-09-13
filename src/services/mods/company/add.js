/**
 * @desc 新建企业
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** 企业简称 */
  abbr;
  /** 企业管理员账号 */
  account;
  /** 公司地址 */
  address;
  /** 所属地区 */
  area;
  /** 企业名称，系统唯一 */
  companyName;
  /** 企业类型，多个用逗号分割 */
  companyType;
  /** 法人代表 */
  concat;
  /** createTime */
  createTime;
  /** 信用代码 */
  creditNum;
  /** 企业id */
  id;
  /** 状态, 1=启用，2=禁用 */
  isLock;
  /** 营业执照结束时间 */
  licenseEnd;
  /** 营业执照 */
  licenseNum;
  /** 营业执照开始时间 */
  licenseStart;
  /** log图片地址 */
  logUrl;
  /** 最后修改人 */
  operator;
  /** 最后修改人id */
  operatorId;
  /** 企业管理员密码 */
  password;
  /** 法人代表电话 */
  phone;
  /** updateTime */
  updateTime;
}

export const init = '';

export function request(params, options = {}) {
  return PontCore.fetch(PontCore.getUrl('/company/create', params, 'POST'), {
    method: 'POST',

    ...options,
  });
}
