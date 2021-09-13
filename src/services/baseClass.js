export class AccessResourcesTable {
  /** 应用标识 */
  appName = '';

  /** 权限说明 */
  authDesc = '';

  /** 权限名称 */
  authName = '';

  /** 类型,CATALOG=目录,MENU=菜单,AUTH=权限 */
  authType = '';

  /** 权限值 */
  authVal = '';

  /** createTime */
  createTime = '';

  /** 最后修改人 */
  operator = '';

  /** 父权限 */
  parentVal = '';

  /** updateTime */
  updateTime = '';
}

export class AccountTable {
  /** 账号 */
  account = '';

  /** createTime */
  createTime = '';

  /** 部门id */
  deptId = undefined;

  /** 所属部门 */
  deptName = '';

  /** 邮箱 */
  email = '';

  /** 用户id */
  id = undefined;

  /** 是否锁定，1=正常,2=锁定 */
  isLock = undefined;

  /** 是否管理员,1=是，2=否 */
  master = undefined;

  /** 用户姓名 */
  name = '';

  /** 是否只能在一家公司,1=是,2=否 */
  onlyOneCompany = undefined;

  /** 最后修改人员 */
  operator = '';

  /** 密码 */
  password = '';

  /** 办公电话 */
  phone = '';

  /** 角色 */
  roleList = [];

  /** roleName */
  roleName = [];

  /** 手机号,系统唯一 */
  telephone = '';

  /** updateTime */
  updateTime = '';
}

export class AgencyReceiveBo {
  /** 划单/补单 的数据列表 */
  receiveItems = [];

  /** 划单/补单 的总数量, 等于各个SKU数量的和 */
  totalAmount = undefined;

  /** 划单/补单 的总重量, 等于各个SKU的数量*SKU标准克重 的和 */
  totalGramWeight = undefined;

  /** TheRepairOrderID */
  workorderId = undefined;

  /** TheRepairOrder编号 */
  workorderNo = '';
}

export class AgencyReceiveItemVo {
  /** 采购量(件数) */
  amount = undefined;

  /** 已划单(已交货)的数量 */
  deliveryAmount = undefined;

  /** 花型 */
  flowerType = '';

  /** 克重 */
  gramWeight = undefined;

  /** 单据行的唯一标识，全系统唯一，根据单据编号，产品ID,SKU ID 生成hash字符串 */
  lineUnique = '';

  /** 已投产的数量 */
  lunchedAmount = undefined;

  /** 产品图片 */
  picUrl = '';

  /** 标准产品ID */
  proId = undefined;

  /** 销售商已收数量 */
  recipientReceivedAmount = undefined;

  /** 回复交期(工厂确认的交货日期) */
  replyDeliveryDate = '';

  /** SKU ID */
  skuId = undefined;

  /** SKU信息,JSON字符串 */
  skuInfo = '';

  /** 源单的行备注 */
  sourceSkuMark = '';

  /** 已补单数量,扫码模式不需要显示这个字段 */
  supplementedAmount = undefined;

  /** 工厂产品名称 */
  supplierProName = '';

  /** 工厂产品编号 */
  supplierProNo = '';
}

export class AgencyReceivePagingParamBo {
  /** 关单状态, 0=未关单,1=已关单 */
  closed = undefined;

  /** 创建日期(截止)，格式为 'yyyy-MM-dd' */
  createTimeEnd = '';

  /** 创建日期(起始)，格式为 'yyyy-MM-dd' */
  createTimeStart = '';

  /** 期望交期(截止)，格式为 'yyyy-MM-dd' */
  deliveryDateEnd = '';

  /** 期望交期(起始)，格式为 'yyyy-MM-dd' */
  deliveryDateStart = '';

  /** 成色,直接传 足金999，足金9999 之类的 */
  fineness = '';

  /** 搜索关键词,可对 二级客户名/柜台/创建人/订单号 进行模糊搜索 */
  keyword = '';

  /** 页码,必须为大于等于1的整数 */
  pageIndex = undefined;

  /** 查询行数,必须为大于等于1的整数 */
  rows = undefined;
}

export class AgencyReceiveRecordVo {
  /** 划单时间 */
  operateTime = '';

  /** 划单人 */
  operator = '';
}

export class AgencyReceiveSingleWorkOrderVo {
  /** TheRepairOrder产品详情 */
  agencyReceiveItemVoList = [];

  /** 客单划单记录 */
  agencyReceiveRecordVos = [];

  /** 是否已关单, 0= 未关单, 1=已关单,默认为0 */
  closed = undefined;

  /** 工厂名称 */
  companyName = '';

  /** 工厂划单状态 */
  deliveryStatus = '';

  /** 成色 */
  fineness = '';

  /** 是否挂签,0=挂签,1=不挂签 */
  hangLabel = undefined;

  /** ID */
  id = undefined;

  /** 投产状态,根据各个SKU的投产情况来变更 */
  launchStatus = '';

  /** 回复交期(最大值) */
  maxReplyDeliveryDate = '';

  /** 回复交期(最小值) */
  minReplyDeliveryDate = '';

  /** 一级户名 */
  orderCompanyName = '';

  /** 接单时间 */
  receiveTime = '';

  /** 接单人 */
  receiver = '';

  /** 回复交期(合并) */
  replyDeliveryDateCombine = '';

  /** 字印名称 */
  signet = '';

  /** 字印ID */
  signetId = '';

  /** 字印图片地址 */
  signetPicUrl = '';

  /** 下单时间(源单创建时间) */
  sourceBizCreateTime = '';

  /** 下单人 */
  sourceBizCreator = '';

  /** 下单备注 */
  sourceBizMark = '';

  /** 源单号 */
  sourceBizNo = '';

  /** 源单类型 */
  sourceBizType = '';

  /** 期望交期 */
  sourceDeliveryDate = '';

  /** 二级客户名/柜台 */
  sourceRecipient = '';

  /** 总件数 */
  totalAmount = undefined;

  /** 总克重 */
  totalGramWeight = undefined;

  /** TheRepairOrder号 */
  workorderNo = '';

  /** TheRepairOrder状态,生成TheRepairOrder时，默认状态是'待接单' */
  workorderStatus = '';

  /** TheRepairOrder类型,目前有正常和补单两种 */
  workorderType = '';
}

export class AgencyReceiveSourceOrderVo {
  /** 订单号 */
  bizNo = '';

  /** 关单人 */
  closeOperator = '';

  /** 关单时间 */
  closeTime = '';

  /** 是否已关单,0=未关单,1=已关单 */
  closed = undefined;

  /** 户名 */
  companyName = '';

  /** 创建时间 */
  createTime = '';

  /** 创建人 */
  creator = '';

  /** 期望交期 */
  deliveryDate = '';

  /** 成色 */
  fineness = '';

  /** 单据ID(不需要显示),进入划单详情的页面要作为参数使用 */
  id = undefined;

  /** 二级客户/柜台 */
  recipient = '';

  /** 总件数 */
  totalAmount = undefined;

  /** 总重量 */
  totalGramWeight = undefined;
}

export class AgencyReceiveStandardDetailVo {
  /** 下单备注 */
  bizMark = '';

  /** 订单号/源单号 */
  bizNo = '';

  /** 关单人 */
  closeOperator = '';

  /** 关单时间 */
  closeTime = '';

  /** 是否已关单,0=未关单,1=已关单 */
  closed = undefined;

  /** 户名 */
  companyName = '';

  /** 创建时间 */
  createTime = '';

  /** 创建人 */
  creator = '';

  /** 期望交期 */
  deliveryDate = '';

  /** 成色 */
  fineness = '';

  /** 是否挂签,0=挂签,1=不挂签 */
  hangLabel = undefined;

  /** 单据ID(不需要显示),进入划单详情的页面要作为参数使用 */
  id = undefined;

  /** 二级客户/柜台 */
  recipient = '';

  /** 字印名称 */
  signet = '';

  /** 字印ID */
  signetId = '';

  /** 字印图片地址 */
  signetPicUrl = '';

  /** 总件数 */
  totalAmount = undefined;

  /** 总重量 */
  totalGramWeight = undefined;

  /** TheRepairOrder列表 */
  workOrderVoList = [];
}

export class AgencyReceiveWorkOrderVo {
  /** TheRepairOrder产品详情 */
  agencyReceiveItemVoList = [];

  /** 客单划单记录 */
  agencyReceiveRecordVos = [];

  /** 是否已关单, 0= 未关单, 1=已关单,默认为0 */
  closed = undefined;

  /** 工厂名称 */
  companyName = '';

  /** 工厂划单状态 */
  deliveryStatus = '';

  /** ID */
  id = undefined;

  /** 投产状态,根据各个SKU的投产情况来变更 */
  launchStatus = '';

  /** 回复交期(最大值) */
  maxReplyDeliveryDate = '';

  /** 回复交期(最小值) */
  minReplyDeliveryDate = '';

  /** 接单时间 */
  receiveTime = '';

  /** 接单人 */
  receiver = '';

  /** 回复交期(合并) */
  replyDeliveryDateCombine = '';

  /** 总件数 */
  totalAmount = undefined;

  /** 总克重 */
  totalGramWeight = undefined;

  /** TheRepairOrder号 */
  workorderNo = '';

  /** TheRepairOrder状态,生成TheRepairOrder时，默认状态是'待接单' */
  workorderStatus = '';

  /** TheRepairOrder类型,目前有正常和加急两种 */
  workorderType = '';
}

export class BaseOverviewVo {
  /** 看板概览类型(注意,如果后端未设置概览类型,可能返回'未知',前端同事注意处理),VARIANT_DELIVERY_DATE(交期差异),UNANSWERED(待接单的),REJECTED(拒接订单),OVERDUE(逾期订单),REPAIR_IN_PRODUCTION(补单在产),EXCESS_BIZ(超量订单),UNCLOSED(未关订单) */
  bizBoardType = '';

  /** bizBoardTypeSortIndex */
  bizBoardTypeSortIndex = undefined;

  /** 符合当前看板类型的单据数,不同类型的看板定义名称可能不同,具体请查看需求! */
  currentBizBoardCount = undefined;

  /** 比例,不同类型的看板对这个比例的称呼不同,具体请查看需求 */
  rate = '';

  /** 当前看板的总单数,不同类型的看板定义可能不同,具体请查看需求! */
  totalBizCount = undefined;
}

export class BizBoardListParamBo {
  /** 字段填一级客户(销售商)ID */
  adverseCompanyId = undefined;

  /** 字段填一级客户(销售商)名称 */
  adverseCompanyName = '';

  /** bizBoardType */
  bizBoardType = '';

  /** 订单类型  AGENCY 客单, OTC 柜台  */
  bizType = '';

  /** 该字段填供应商ID */
  companyId = undefined;

  /** 该字段填供应商名称 */
  companyName = '';

  /** 时间类型  week 当前周, month 当前月 */
  dateType = '';

  /** 结束日期,格式'yyyy-MM-dd' */
  endDate = '';

  /** 搜索关键词,请根据销售订单看板和工厂订单看板需求使用! */
  keyword = '';

  /** 页码,必须为大于等于1的整数 */
  pageIndex = undefined;

  /** 查询行数,必须为大于等于1的整数 */
  rows = undefined;

  /** 排序 1:期望交期升序  2:期望交期降序  3:回复交期升序  4:回复交期降序  5:数占比升序   6:数占比降序 */
  sortType = undefined;

  /** 起始日期,格式'yyyy-MM-dd' */
  startDate = '';
}

export class BizBoardTypeAndColumn {
  /** 数据类型的标识 */
  bizBoardType = '';

  /** 数据类型名称 */
  bizBoardTypeName = '';

  /** 列名称 */
  columnName = '';
}

export class BizFavoriteInsertBo {
  /** 单据ID */
  bizId = undefined;

  /** 收藏备注 */
  favoriteMark = '';
}

export class BizFavoriteUpdateBo {
  /** 单据ID */
  bizId = undefined;

  /** 收藏备注信息 */
  favoriteMark = '';
}

export class BizPagingParamBo {
  /** 订单类型标识 */
  bizType = '';

  /** 成色, 如 足金999,足金9999 */
  createDateEnd = '';

  /** 成色, 如 足金999,足金9999 */
  createDateStart = '';

  /** 期望交期 结束 , 格式如 'yyyy-MM-dd' */
  deliveryDateEnd = '';

  /** 期望交期 开始 , 格式如 'yyyy-MM-dd' */
  deliveryDateStart = '';

  /** 成色, 如 足金999,足金9999 */
  fineness = '';

  /** 是否挂签, 0=挂签，1=不挂签 */
  hangLabel = undefined;

  /** 搜索关键词,可对  二级客户名/柜台/创建人/订单编号 进行模糊搜索 */
  keyWord = '';

  /** 页码,必须为大于等于1的整数 */
  pageIndex = undefined;

  /** 查询行数,必须为大于等于1的整数 */
  rows = undefined;

  /** 订单状态标识 */
  status = '';
}

export class BizPo {
  /** beTakerOver */
  beTakerOver = undefined;

  /** bizMark */
  bizMark = '';

  /** bizNo */
  bizNo = '';

  /** bizType */
  bizType = '';

  /** closeOperator */
  closeOperator = '';

  /** closeTime */
  closeTime = '';

  /** closed */
  closed = undefined;

  /** companyId */
  companyId = undefined;

  /** companyName */
  companyName = '';

  /** createTime */
  createTime = '';

  /** creator */
  creator = '';

  /** creatorId */
  creatorId = undefined;

  /** deliveryDate */
  deliveryDate = '';

  /** fineness */
  fineness = '';

  /** hangLabel */
  hangLabel = undefined;

  /** hasFinished */
  hasFinished = undefined;

  /** id */
  id = undefined;

  /** recipient */
  recipient = '';

  /** recipientId */
  recipientId = '';

  /** reson */
  reson = '';

  /** signet */
  signet = '';

  /** signetId */
  signetId = '';

  /** signetPicUrl */
  signetPicUrl = '';

  /** status */
  status = '';

  /** totalAmount */
  totalAmount = undefined;

  /** totalGramWeight */
  totalGramWeight = undefined;
}

export class BizSignetListVo {
  /** 字印ID */
  id = undefined;

  /** 字印名称 */
  signet = '';

  /** 字印名称 */
  signetPic = '';
}

export class BusinessTeamTable {
  /** 负责区域 */
  businessArea = '';

  /** 企业id */
  companyId = undefined;

  /** createTime */
  createTime = '';

  /** 团队id */
  id = undefined;

  /** 团队领导id */
  leaderId = undefined;

  /** 状态，1=启用，2=禁用 */
  lockStatus = undefined;

  /** 团队成员id（数组）例：[1,2,3] */
  memberIds = '';

  /** 团队成员个数 */
  memberNum = undefined;

  /** 最后修改人 */
  operator = '';

  /** 团队名称 */
  teamName = '';
}

export class CompanyManagementDictionaryTables {
  /** 值 */
  codeName = '';

  /** 类型: 公司类型 1, 所属业务区域 2, 客户合同类型 3, 客户委托项目 4,工厂类型 5, 供应商合同类型 6, 供应商委托项目7 */
  codeType = undefined;

  /** 企业id */
  companyId = undefined;
}

export class CounterReceiveItemBo {
  /** 划单数量 */
  amount = undefined;

  /** 行标识 */
  lineUnique = '';

  /** 划单备注 */
  mark = '';

  /** 备注类型,如果选择的是预设备注,则备注类型=预设备注,选择的是其他,则备注类型=其他 */
  markType = '';
}

export class CounterReceivePagingParamBo {
  /** 采购数量,精确匹配 */
  amount = undefined;

  /** 柜台ID,如果是全部ID,请不要传这个参数回来! */
  counterId = '';

  /** 工厂划单数,精确匹配 */
  deliveryAmountItem = undefined;

  /** 工厂划单日期(起始),格式为'yyyy-MM-dd' */
  deliveryDateStart = '';

  /** 工厂划单日期(截止),格式为'yyyy-MM-dd' */
  deliveryDatedEnd = '';

  /** 花型,模糊搜索 */
  flowerType = '';

  /** 克重,精确匹配 */
  gramWeight = undefined;

  /** 页码,必须为大于等于1的整数 */
  pageIndex = undefined;

  /** 工厂产品名称或编号,模糊搜索 */
  proNameOrProNo = '';

  /** 查询行数,必须为大于等于1的整数 */
  rows = undefined;

  /** 尺寸(面宽),精确匹配 */
  size = '';

  /** 规格备注,模糊搜索 */
  sourceBizMark = '';

  /** 源单编号,模糊搜索 */
  sourceBizNo = '';

  /** 供应商公司ID */
  supplierId = undefined;

  /** 供应商名称,全匹配 */
  supplierName = '';

  /** TheRepairOrder编号,模糊搜索 */
  workOrderNo = '';
}

export class CounterReceiveVo {
  /** 采购量(件数) */
  amount = undefined;

  /** 工厂划单总数 */
  deliveryAmount = undefined;

  /** 工厂划单信息 */
  deliveryList = [];

  /** 花型 */
  flowerType = '';

  /** 克重 */
  gramWeight = undefined;

  /** WorkOrderDetails行标识(全系统唯一),柜台划单的时候要传回来 */
  lineUnique = '';

  /** 产品图片 */
  picUrl = '';

  /** 销售商已收数量 */
  recipientReceivedAmount = undefined;

  /** SKU信息(JSON字符串) */
  skuInfo = '';

  /** 源单号 */
  sourceBizNo = '';

  /** 源单中的行标识 */
  sourceLineUnique = '';

  /** 规格备注 */
  sourceSkuMark = '';

  /** 工厂名称 */
  supplierName = '';

  /** 供应商产品ID */
  supplierProId = undefined;

  /** 工厂产品名称 */
  supplierProName = '';

  /** 工厂产品编号 */
  supplierProNo = '';

  /** TheRepairOrder号 */
  workOrderNo = '';

  /** TheRepairOrderID */
  workorderId = undefined;
}

export class CreateAndEditCustomerData {
  /** 企业简称 */
  abbr = '';

  /** 公司地址 */
  address = '';

  /** 所属地区 */
  area = '';

  /** CustomerContractForm */
  clientContract = new CustomerContractForm();

  /** 客户id */
  clientId = undefined;

  /** 企业id */
  companyId = undefined;

  /** 企业名称，系统唯一 */
  companyName = '';

  /** 法人代表 */
  concat = '';

  /** createTime */
  createTime = '';

  /** 信用代码 */
  creditNum = '';

  /** 企业id */
  id = undefined;

  /** 锁定，1=启用，2=禁用 */
  isLock = undefined;

  /** 营业执照结束时间 */
  licenseEnd = '';

  /** 营业执照 */
  licenseNum = '';

  /** 营业执照开始时间 */
  licenseStart = '';

  /** log图片地址 */
  logUrl = '';

  /** 关联业务员数组 */
  memberList = [];

  /** 最后修改人 */
  operator = '';

  /** 最后修改人id */
  operatorId = undefined;

  /** 法人代表电话 */
  phone = '';

  /** updateTime */
  updateTime = '';
}

export class CustomerContractForm {
  /** 所属业务区域 */
  businessArea = '';

  /** 保证金 */
  cashDeposit = undefined;

  /** 证书图片json数组  ['/目录/图片名','/目录/图片名'] */
  certPic = '';

  /** 客户统一编码 */
  clientCode = '';

  /** 客户id */
  clientId = undefined;

  /** 客户编码 */
  clientNo = '';

  /** 企业id */
  companyId = undefined;

  /** 公司类型 */
  companyType = '';

  /** 合同信息json数组  [{'contractType':'合同类型', 'contractNo':'合同编号', 'timeStart':'合同开始日2021-05-24','timeEnd':'合同结束日2051-05-24'}] */
  contractInfo = '';

  /** 合同受托人json数组  [{'trusteeName':'受托人姓名', 'trusteeCard':'受托人身份证', 'trusteePhone':'受托人电话'}] */
  contractTrustee = '';

  /** 信用额度 */
  creditLine = undefined;

  /** 信用等级 */
  creditRatings = '';

  /** 财务联系人 */
  finance = '';

  /** 财务编码 */
  financeCode = '';

  /** 财务传真 */
  financeFax = '';

  /** 财务联系电话 */
  financePhone = '';

  /** 加盟费 */
  franchiseFee = undefined;

  /** 加盟费收取时间 */
  franchiseFeeTime = '';

  /** 店铺形象图片json数组  ['/目录/图片名','/目录/图片名'] */
  imagePic = '';

  /** 额度审批人 */
  limitApprover = '';

  /** 组织机构代码 */
  organizationCode = '';

  /** 授权委托书编号 */
  proxiesNo = '';

  /** 授权受托人json数组  [{'proxiesName':'授权受托人姓名', 'proxiesCard':'授权受托人身份证', 'proxiesPhone':'授权受托人电话'}] */
  proxiesPeopleInfo = '';

  /** 委托项目 */
  proxiesProduct = '';

  /** 委托签订日期 */
  proxiesSignTime = '';

  /** 委托有效日期结束时间 */
  proxiesTimeEnd = '';

  /** 委托有效日期开始时间 */
  proxiesTimeStart = '';

  /** 对方业务员及电话号码json数组  [{'name':'姓名', 'phone':'电话'}] */
  salesmanLink = '';

  /** 实际控制人 */
  sameController = '';

  /** 是否出货天津 1是 2否 */
  shipmentTianjing = undefined;

  /** 税务登记号 */
  taxNo = '';
}

export class CustomerDataTable {
  /** 企业简称 */
  abbr = '';

  /** 公司地址 */
  address = '';

  /** 所属区域 */
  area = '';

  /** 所在区域 */
  businessArea = '';

  /** 客户id */
  clientId = undefined;

  /** 企业id */
  companyId = undefined;

  /** 企业名称，系统唯一 */
  companyName = '';

  /** 法人代表 */
  concat = '';

  /** 合同编号 */
  contractNo = '';

  /** createTime */
  createTime = '';

  /** 信用代码 */
  creditNum = '';

  /** 收货地址 */
  delivery = '';

  /** 企业id */
  id = undefined;

  /** 锁定，1=启用，2=禁用 */
  isLock = undefined;

  /** 营业执照结束时间 */
  licenseEnd = '';

  /** 营业执照 */
  licenseNum = '';

  /** 营业执照开始时间 */
  licenseStart = '';

  /** log图片地址 */
  logUrl = '';

  /** 关联业务员 */
  member = '';

  /** 最后修改人 */
  operator = '';

  /** 最后修改人id */
  operatorId = undefined;

  /** 法人代表电话 */
  phone = '';

  /** 业务员id，业务员必须在业务团队中 */
  salesmanId = undefined;

  /** updateTime */
  updateTime = '';
}

export class CustomerRelatedSalesmanTable {
  /** 客户id */
  clientId = undefined;

  /** 企业id */
  companyId = undefined;

  /** 业务员id */
  memberId = undefined;

  /** 业务员名字 */
  memberName = '';

  /** 业务团队id */
  teamId = undefined;

  /** 业务团队名字 */
  teamName = '';
}

export class DivisionOperatingEntity {
  /** 企业id */
  companyId = undefined;

  /** createTime */
  createTime = '';

  /** 部门地址 */
  deptAddress = '';

  /** 部门名称 */
  deptName = '';

  /** 部门id */
  id = undefined;

  /** 状态，1=启用，2=禁用 */
  isLock = undefined;

  /** 部门领导id */
  leaderId = undefined;

  /** 负责人名称 */
  leaderName = '';

  /** 最后修改人 */
  operator = '';
}

export class EnterpriseOperatingEntity {
  /** 企业简称 */
  abbr = '';

  /** 企业管理员账号 */
  account = '';

  /** 公司地址 */
  address = '';

  /** 所属地区 */
  area = '';

  /** 企业名称，系统唯一 */
  companyName = '';

  /** 企业类型，多个用逗号分割 */
  companyType = '';

  /** 法人代表 */
  concat = '';

  /** createTime */
  createTime = '';

  /** 信用代码 */
  creditNum = '';

  /** 企业id */
  id = undefined;

  /** 状态, 1=启用，2=禁用 */
  isLock = undefined;

  /** 营业执照结束时间 */
  licenseEnd = '';

  /** 营业执照 */
  licenseNum = '';

  /** 营业执照开始时间 */
  licenseStart = '';

  /** log图片地址 */
  logUrl = '';

  /** 最后修改人 */
  operator = '';

  /** 最后修改人id */
  operatorId = undefined;

  /** 企业管理员密码 */
  password = '';

  /** 法人代表电话 */
  phone = '';

  /** updateTime */
  updateTime = '';
}

export class EnterpriseRoleTable {
  /** 应用标识 */
  appName = '';

  /** 权限值（数组）例：['a','b'] */
  authValJson = '';

  /** 企业id */
  companyId = undefined;

  /** createTime */
  createTime = '';

  /** 角色id */
  id = undefined;

  /** 最后修改人 */
  operator = '';

  /** 角色名称 */
  roleName = '';

  /** updateTime */
  updateTime = '';
}

export class EnterpriseTable {
  /** 企业简称 */
  abbr = '';

  /** 公司地址 */
  address = '';

  /** 所属地区 */
  area = '';

  /** 企业名称，系统唯一 */
  companyName = '';

  /** 法人代表 */
  concat = '';

  /** createTime */
  createTime = '';

  /** 信用代码 */
  creditNum = '';

  /** 企业id */
  id = undefined;

  /** 状态, 1=启用，2=禁用 */
  isLock = undefined;

  /** 营业执照结束时间 */
  licenseEnd = '';

  /** 营业执照 */
  licenseNum = '';

  /** 营业执照开始时间 */
  licenseStart = '';

  /** log图片地址 */
  logUrl = '';

  /** 最后修改人 */
  operator = '';

  /** 最后修改人id */
  operatorId = undefined;

  /** 法人代表电话 */
  phone = '';

  /** updateTime */
  updateTime = '';
}

export class ExcessOrderDetails {
  /** bizId */
  bizId = undefined;

  /** 超量sku集合 */
  excessList = [];

  /** 超量总件数 */
  excessSumCount = undefined;

  /** 超量总克重 */
  excessSumWeight = undefined;
}

export class FactoryMappingObject {
  /** 鼎捷信号识别码 */
  identityCode = '';

  /** 供应商企业id */
  supplierId = undefined;

  /** 供应商企业名称 */
  supplierName = '';
}

export class FormalBizPoDetailGroupCatagoryVo {
  /** formalBizPoDetailGroupCatagoryVos */
  formalBizPoDetailGroupCatagoryVos = [];

  /** 数量 */
  num = undefined;

  /** 品类 */
  proCatagory = '';

  /** 克重 */
  weight = undefined;
}

export class FormalBizPoDetailGroupProVo {
  /** formalBizPoDetailVos */
  formalBizPoDetailVos = [];

  /** 数量 */
  num = undefined;

  /** 产品id */
  proId = undefined;

  /** 克重 */
  weight = undefined;
}

export class FormalBizPoDetailGroupSupplierVo {
  /** formalBizPoDetailGroupCatagoryVos */
  formalBizPoDetailGroupCatagoryVos = [];

  /** 数量 */
  num = undefined;

  /** 供应商名 */
  supplier = '';

  /** 克重 */
  weight = undefined;
}

export class FormalBizPoDetailVo {
  /** amount */
  amount = undefined;

  /** bizId */
  bizId = undefined;

  /** 日均克重 */
  dayWeight = undefined;

  /** flowerType */
  flowerType = '';

  /** gramWeight */
  gramWeight = undefined;

  /** lineUnique */
  lineUnique = '';

  /** 最高克重 */
  maxWeight = undefined;

  /** orderTime */
  orderTime = '';

  /** 预计销量 */
  predictNumber = undefined;

  /** proBaseInfo */
  proBaseInfo = '';

  /** proCatagory */
  proCatagory = '';

  /** proId */
  proId = undefined;

  /** proNumber */
  proNumber = '';

  /** proSupplierInfo */
  proSupplierInfo = '';

  /** 最近一单克重 */
  recentlyWeight = undefined;

  /** sku */
  sku = '';

  /** skuId */
  skuId = undefined;

  /** skuInfo */
  skuInfo = '';

  /** skuMark */
  skuMark = '';

  /** 供应商/工厂名 */
  supplier = '';

  /** 总量 */
  totalWeight = undefined;
}

export class FormalBizPoVo {
  /** 单据是否已经被接管,0=未被接管，1=已被接管，被接管的单据只能由接管者处理状态，接管作业完成之后，需将这个状态修改成未接管 */
  beTakerOver = undefined;

  /** 下单备注 */
  bizMark = '';

  /** 订单编号 */
  bizNo = '';

  /** 单据类型 */
  bizType = '';

  /** 采购公司ID */
  companyId = undefined;

  /** 采购公司名 */
  companyName = '';

  /** 制单时间 */
  createTime = '';

  /** 制单人 */
  creator = '';

  /** 制单人ID */
  creatorId = undefined;

  /** 交货日期 */
  deliveryDate = '';

  /** 成色 */
  fineness = '';

  /** 是否挂签 */
  hangLabel = undefined;

  /** 单据是否已结束，0=未完成，1=已完成 */
  hasFinished = undefined;

  /** 订单id */
  id = undefined;

  /** 接收方名称 */
  recipient = '';

  /** 接收方id */
  recipientId = '';

  /** 驳回备注 */
  reson = '';

  /** 字印名称 */
  signet = '';

  /** 字印ID */
  signetId = '';

  /** 字印图片地址 */
  signetPicUrl = '';

  /** 状态 */
  status = '';

  /** 总量 */
  totalAmount = undefined;

  /** 总重量 */
  totalGramWeight = undefined;
}

export class FormalPoBizDetailVoStandard {
  /** formalBizPoDetailGroupSupplierVos */
  formalBizPoDetailGroupSupplierVos = [];

  /** formalBizPoVo */
  formalBizPoVo = new FormalBizPoVo();
}

export class FormalPoPagingParamBo {
  /** 订单类型标识 */
  bizType = '';

  /** 成色, 如 足金999,足金9999 */
  createDateEnd = '';

  /** 成色, 如 足金999,足金9999 */
  createDateStart = '';

  /** 期望交期 结束 , 格式如 'yyyy-MM-dd' */
  deliveryDateEnd = '';

  /** 期望交期 开始 , 格式如 'yyyy-MM-dd' */
  deliveryDateStart = '';

  /** 成色, 如 足金999,足金9999 */
  fineness = '';

  /** 是否挂签, 0=挂签，1=不挂签 */
  hangLabel = undefined;

  /** 搜索关键词,可对  二级客户名/柜台/创建人/订单编号 进行模糊搜索 */
  keyWord = '';

  /** 页码,必须为大于等于1的整数 */
  pageIndex = undefined;

  /** 查询行数,必须为大于等于1的整数 */
  rows = undefined;

  /** 订单状态标识 */
  status = '';
}

export class FrontResponse {
  /** code */
  code = undefined;

  /** data */
  data = undefined;

  /** directUrl */
  directUrl = '';

  /** msg */
  msg = '';
}

export class GDSignetInsertBo {
  /** companyId */
  companyId = undefined;

  /** 字印名称,长度为1-15 */
  signet = '';

  /** 字印图片地址,前端先上传，再把图片相对地址填到这里 */
  signetPic = '';
}

export class GDSignetSelectParamBo {
  /** 字印名称,模糊搜索 */
  signet = '';
}

export class GDSignetUpdateBo {
  /** 字印ID */
  id = undefined;

  /** 字印名称 */
  signet = '';

  /** 字印图片地址,前端把图片文件的相对地址传回来就行 */
  signetPic = '';
}

export class GoldIsSchedulingObjects {
  /** 底料 */
  bedCharge = undefined;

  /** 盘点数 */
  checkCount = undefined;

  /** 盘点时间 */
  checkDate = '';

  /** 日损耗 */
  dailyWastage = undefined;

  /** 当月周转天数 */
  dayOfTurnover = undefined;

  /** 鼎捷信号识别码 */
  identityCode = '';

  /** 需求量 */
  needCount = undefined;

  /** 占有量 */
  ownCount = undefined;

  /** 冗余评估 */
  redundancy = undefined;

  /** 存欠 */
  saveOwn = undefined;

  /** 供应商企业id */
  supplierId = undefined;

  /** 供应商企业名称 */
  supplierName = '';
}

export class HistoricalPoSearchBo {
  /** 收藏,默认为false */
  collected = false;

  /** 创建时间(截止),格式'YYYY-mm-dd' */
  createDateEnd = '';

  /** 创建时间(开始),格式 'YYYY-mm-dd' */
  createDateStart = '';

  /** 成色，如 足金999，足金9999 等 */
  fineness = '';

  /** 订单号/收藏备注/创建人 */
  keyWord = '';

  /** 页码，默认为1 */
  pageIndex = undefined;

  /** 每页行数,默认为12 */
  pageRow = undefined;

  /** 二级客户/柜台 的ID */
  recipientId = '';

  /** 单据状态标识 */
  status = '';
}

export class HistoricalPoVo {
  /** 订单编号 */
  bizNo = '';

  /** 是否已收藏,true=已收藏,false=未收藏 */
  collected = false;

  /** 收藏备注 */
  collectionNote = '';

  /** 创建时间 */
  createTime = '';

  /** 创建者 */
  creator = '';

  /** 成色 */
  fineness = '';

  /** 订单ID */
  id = undefined;

  /** 二级客户/柜台名称 */
  recipient = '';

  /** 状态 */
  status = '';

  /** 总数量 */
  totalAmount = undefined;

  /** 总重量 */
  totalGramWeight = undefined;
}

export class IBizBoardDetailVo {
  /** bizId */
  bizId = undefined;
}

export class KDSignetInsertBo {
  /** 字印归属,比如属于某个柜台或者某个客户的,则填柜台或者客户的唯一标识即可 */
  belongTo = '';

  /** 字印名称,长度为1-15 */
  signet = '';

  /** 字印图片地址,前端先上传，再把图片相对地址填到这里 */
  signetPic = '';
}

export class KDSignetSelectParamBo {
  /** 二级客户ID */
  belongTo = '';

  /** 字印名称,模糊搜索 */
  signet = '';
}

export class KDSignetUpdateBo {
  /** 字印ID */
  id = undefined;

  /** 字印名称 */
  signet = '';

  /** 字印图片地址,前端把图片文件的相对地址传回来就行 */
  signetPic = '';
}

export class NodeUser {
  /** userId */
  userId = undefined;

  /** userName */
  userName = '';
}

export class NotCloseTheOrderDetails {
  /** bizId */
  bizId = undefined;

  /** 未关sku集合 */
  openBillList = [];
}

export class OrdersForProductSpecification {
  /** proBizDetailVo */
  proBizDetailVo = new ProBizDetailVo();

  /** proBizSpecSaleVolumeVo */
  proBizSpecSaleVolumeVo = new SalesOrdersProductSpecificationClasses();

  /** proSpec */
  proSpec = new ProductSpecificationClass();
}

export class OverdueBoardDetailSkuVo {
  /** 采购量 */
  amount = undefined;

  /** 计划逾期天数 */
  estimatedOverdueDays = undefined;

  /** 花型 */
  flowerType = '';

  /** 行标识 */
  lineUnique = '';

  /** 逾期件数 */
  overdueCount = undefined;

  /** 逾期现状 */
  overdueSituation = '';

  /** 逾期重量(单位kg) */
  overdueWeight = undefined;

  /** ProductBasicInformationJSON */
  proBaseInfo = '';

  /** 供应商产品信息JSON */
  proSupplierInfo = '';

  /** 回复交期 */
  replyDeliveryDate = '';

  /** SKU ID */
  skuId = undefined;

  /** SKU详细信息,缺什么字段可以自行到SKU JSON串中找 */
  skuInfo = '';

  /** 源单备注(规格备注) */
  sourceSkuMark = '';

  /** 计划逾期备注 */
  twoMark = '';

  /** 计划逾期备注类型 */
  twoMarkType = '';

  /** 实际逾期天数 */
  virtualOverdueDays = undefined;
}

export class OverdueBoardDetailVo {
  /** TheRepairOrderID */
  bizId = undefined;

  /** sku列表 */
  skuList = [];
}

export class OverdueBoardItemVo {
  /** TheRepairOrderID,查看详情的时候要用这个作为参数 */
  bizId = undefined;

  /** 成色 */
  fineness = '';

  /** 最大逾期天数,如果和最小逾期天数相等,前端显示任意一个即可,如不同,则将最小逾期天数和最大逾期天数拼接后显示, 显示规则请参考设计图/原型 */
  maxOverdueDays = undefined;

  /** 最小回复交期,如果和最大回复交期相等，前端显示任意一个即可,如果不同,则将最小回复交期和最大回复交期拼接后显示,显示规则请参考设计图/原型 */
  maxReplyDeliveryDate = '';

  /** 最小逾期天数,如果和最大逾期天数相等,前端显示任意一个即可,如不同,则将最小逾期天数和最大逾期天数拼接后显示, 显示规则请参考设计图/原型 */
  minOverdueDays = undefined;

  /** 最小回复交期,如果和最大回复交期相等，前端显示任意一个即可,如果不同,则将最小回复交期和最大回复交期拼接后显示,显示规则请参考设计图/原型 */
  minReplyDeliveryDate = '';

  /** 下单公司(一级户名/户名) */
  orderCompanyName = '';

  /** 逾期件数占比 */
  overdueRate = '';

  /** 下单时间 */
  sourceBizCreateTime = '';

  /** 下单人 */
  sourceBizCreator = '';

  /** 源单号 */
  sourceBizNo = '';

  /** 源单类型,客单/柜台单,AGENCY=客单, OTC=柜台单 */
  sourceBizType = '';

  /** 期望交期 */
  sourceDeliveryDate = '';

  /** 二级户名(客户/柜台) */
  sourceRecipient = '';

  /** 总件数 */
  totalAmount = undefined;

  /** 总重量 */
  totalGramWeight = undefined;

  /** TheRepairOrder号 */
  workOrderNo = '';
}

export class OverdueBoardListParamBo {
  /** 对方公司的ID,在销售订单看板中,指的是供应商公司ID,在工厂订单看板中,指的是销售商公司ID */
  adverseCompanyId = undefined;

  /** 下单人,生产TheRepairOrder看板不需传这个字段 */
  bizCreator = '';

  /** 订单类型  AGENCY 客单, OTC 柜台  */
  bizType = '';

  /** 逾期类型,estimated = 计划逾期,virtual=实际逾期,不需要筛选时不用传这个参数 */
  overdueType = '';

  /** 页码,必须为大于等于1的整数 */
  pageIndex = undefined;

  /** 查询行数,必须为大于等于1的整数 */
  rows = undefined;

  /** 排序字段,deliveryDate=期望交期,replyDeliveryDate=回复交期,overdueDays=逾期天数,overdueRate=逾期件数占比 */
  sortColumn = '';

  /** 排序模式,ASC=升序,DESC=降序;默认为ASC */
  sortMode = '';
}

export class PageDTO {
  /** 数据区 */
  data = [];

  /** 页码 */
  pageIndex = undefined;

  /** 每页行数 */
  pageSize = undefined;

  /** 总数据量 */
  rowSize = undefined;
}

export class PoBizDetailFactoryBizVo {
  /** TheRepairOrder列表 */
  bizWorkOrders = [];
}

export class PoBizDetailGroupCatagoryVo {
  /** poBizDetailGroupGroupProVos */
  poBizDetailGroupGroupProVos = [];

  /** 品类 */
  proCatagory = '';
}

export class PoBizDetailGroupProVo {
  /** bizWorkorderDetailWithBLOBs */
  bizWorkorderDetailWithBLOBs = [];

  /** 产品id */
  proId = undefined;
}

export class PoBizFactoryBizVo {
  /** 单头 */
  bizPo = new BizPo();

  /** TheRepairOrder列表 */
  bizWorkOrders = [];
}

export class PoBizInsertBo {
  /** 下单备注 */
  bizMark = '';

  /** 期望交货日期,只能选择一个未来的日期 */
  deliveryDate = '';

  /** 成色,如 足金999，足金9999，足金 等，直接传成色名称即可 */
  fineness = '';

  /** 是否挂签，0=挂签，1=不挂签 */
  hangLabel = undefined;

  /** 二级客户的名称或者是柜台名称 */
  recipient = '';

  /** 二级客户ID或者是柜台ID */
  recipientId = '';

  /** 字印的名称 */
  signet = '';

  /** 字印ID */
  signetId = '';

  /** 字印的图片地址 */
  signetPicUrl = '';
}

export class PoBizListVo {
  /** 审核状态 */
  appStatus = '';

  /** 下单备注 */
  bizMark = '';

  /** 订单编号 */
  bizNo = '';

  /** 单据类型 */
  bizType = '';

  /** 采购公司ID */
  companyId = undefined;

  /** 户名 */
  companyName = '';

  /** 创建时间 */
  createTime = '';

  /** 创建人/制单人 */
  creator = '';

  /** 期望交期 */
  deliveryDate = '';

  /** 成色 */
  fineness = '';

  /** 是否挂签, 0=挂签，1=不挂签 */
  hangLabel = undefined;

  /** 是否已关单,0=未关单,1=已关单 */
  hasFinished = undefined;

  /** 订单ID */
  id = undefined;

  /** 二级客户/柜台名称 */
  recipient = '';

  /** 二级客户/柜台ID */
  recipientId = '';

  /** 字印名称 */
  signet = '';

  /** 字印ID */
  signetId = '';

  /** 字印图片地址 */
  signetPicUrl = '';

  /** 单据状态 */
  status = '';

  /** 总件数 */
  totalAmount = undefined;

  /** 总重量 */
  totalGramWeight = undefined;
}

export class PoBizSkuUpdateBo {
  /** 数量 */
  amount = undefined;

  /** 订单id */
  bizId = undefined;

  /** 花型 */
  flowerType = '';

  /** 重量 */
  gramWeight = undefined;

  /** 行编号 */
  lineUnique = '';

  /** 产品信息 */
  proBaseInfo = '';

  /** 产品品类 */
  proCatagory = '';

  /** 产品id */
  proId = undefined;

  /** 标准产品编号 */
  proNumber = '';

  /** 供应商产品信息 */
  proSupplierInfo = '';

  /** sku编码 */
  sku = '';

  /** SKU ID */
  skuId = undefined;

  /** SKU属性 */
  skuInfo = '';

  /** 行备注 */
  skuMark = '';
}

export class PoBizUpdateBo {
  /** 下单备注 */
  bizMark = '';

  /** 期望交货日期,只能选择一个未来的日期 */
  deliveryDate = '';

  /** 是否挂签，0=挂签，1=不挂签 */
  hangLabel = undefined;

  /** 订单ID,在创建单据业务中，前端不可见 */
  id = undefined;

  /** preliminaryPoBizDetailUpdateBos */
  preliminaryPoBizDetailUpdateBos = [];

  /** 字印的名称 */
  signet = '';

  /** 字印ID */
  signetId = '';

  /** 字印的图片地址 */
  signetPicUrl = '';
}

export class PoStatusVo {
  /** 状态标识 */
  status = '';

  /** 状态名称 */
  statusName = '';
}

export class PreBizPoDetailGroupVo {
  /** maxDate */
  maxDate = '';

  /** num */
  num = undefined;

  /** preBizPoDetailProGroupVos */
  preBizPoDetailProGroupVos = [];

  /** proCatagory */
  proCatagory = '';

  /** weight */
  weight = undefined;
}

export class PreBizPoDetailProGroupVo {
  /** maxDate */
  maxDate = '';

  /** num */
  num = undefined;

  /** preBizPoDetailVos */
  preBizPoDetailVos = [];

  /** proId */
  proId = undefined;

  /** weight */
  weight = undefined;
}

export class PreBizPoDetailVo {
  /** amount */
  amount = undefined;

  /** bizId */
  bizId = undefined;

  /** dayWeight */
  dayWeight = undefined;

  /** flowerType */
  flowerType = '';

  /** gramWeight */
  gramWeight = undefined;

  /** lineUnique */
  lineUnique = '';

  /** maxWeight */
  maxWeight = undefined;

  /** newAmount */
  newAmount = undefined;

  /** newSkuMark */
  newSkuMark = '';

  /** orderTime */
  orderTime = '';

  /** predictNumber */
  predictNumber = undefined;

  /** proBaseInfo */
  proBaseInfo = '';

  /** proCatagory */
  proCatagory = '';

  /** proId */
  proId = undefined;

  /** proNumber */
  proNumber = '';

  /** proSupplierInfo */
  proSupplierInfo = '';

  /** recentlyWeight */
  recentlyWeight = undefined;

  /** sku */
  sku = '';

  /** skuId */
  skuId = undefined;

  /** skuInfo */
  skuInfo = '';

  /** skuMark */
  skuMark = '';

  /** totalWeight */
  totalWeight = undefined;
}

export class PreliminaryPoBizDetailUpdateBo {
  /** 数量 */
  amount = undefined;

  /** 订单ID */
  bizId = undefined;

  /** SKU 编号 */
  flowerType = '';

  /** 重量 */
  gramWeight = undefined;

  /** 行编号 */
  lineUnique = '';

  /** 产品信息 */
  proBaseInfo = '';

  /** 产品品类 */
  proCatagory = '';

  /** 产品ID */
  proId = undefined;

  /** 产品编号 */
  proNumber = '';

  /** 供应商产品信息 */
  proSupplierInfo = '';

  /** SKU 编号 */
  sku = '';

  /** SKU ID */
  skuId = undefined;

  /** 重量 */
  skuInfo = '';

  /** 行备注 */
  skuMark = '';
}

export class PreliminaryPoBizDetailVoProSearchModel {
  /** imgList */
  imgList = [];

  /** label */
  label = '';

  /** proBase */
  proBase = new ProductBasicInformation();

  /** proId */
  proId = undefined;

  /** proName */
  proName = '';

  /** proNumber */
  proNumber = '';

  /** proSaleBase */
  proSaleBase = new ProductSalesBasedInformation();

  /** proSpecList */
  proSpecList = [];

  /** proSupplierList */
  proSupplierList = [];
}

export class PreliminaryPoBizDetailVoStandard {
  /** bizPo */
  bizPo = new BizPo();

  /** groupPoBizDetailVos */
  groupPoBizDetailVos = [];
}

export class PreliminaryPoBizListVo {
  /** 单据是否已经被接管,0=未被接管，1=已被接管，被接管的单据只能由接管者处理状态，接管作业完成之后，需将这个状态修改成未接管 */
  beTakerOver = undefined;

  /** 下单备注 */
  bizMark = '';

  /** 订单编号 */
  bizNo = '';

  /** 单据类型 AGENCY 客单, OTC 柜台 */
  bizType = '';

  /** 采购公司ID */
  companyId = undefined;

  /** 采购公司名称 */
  companyName = '';

  /** 制单时间 */
  createTime = '';

  /** 制单人 */
  creator = '';

  /** 制单人ID */
  creatorId = undefined;

  /** 交货日期 */
  deliveryDate = '';

  /** 成色,如足金999、足金9999、足金 等 */
  fineness = '';

  /** 是否挂签, 0=挂签，1=不挂签 */
  hangLabel = undefined;

  /** 单据是否已结束，0=未完成，1=已完成 */
  hasFinished = undefined;

  /** 账单id */
  id = undefined;

  /** 接收方名称 */
  recipient = '';

  /** 接收方ID，这个接收方可以是任何形式的组织机构或者内部组织 */
  recipientId = '';

  /** 字印名称 */
  signet = '';

  /** 字印ID */
  signetId = '';

  /** 字印图片地址 */
  signetPicUrl = '';

  /** 状态,由业务层来控制各种类型采购单的状态以及业务流程 */
  status = '';

  /** 总数量 */
  totalAmount = undefined;

  /** 总重量 */
  totalGramWeight = undefined;
}

export class PreliminaryPoBizSummaryVo {
  /** groupVos */
  groupVos = [];

  /** totalSkuNum */
  totalSkuNum = undefined;

  /** totalSum */
  totalSum = undefined;

  /** totalWeight */
  totalWeight = undefined;
}

export class PreliminaryPoBizUpdateBo {
  /** 下单备注 */
  bizMark = '';

  /** 期望交货日期,只能选择一个未来的日期 */
  deliveryDate = '';

  /** 是否挂签，0=挂签，1=不挂签 */
  hangLabel = undefined;

  /** 订单ID,在创建单据业务中，前端不可见 */
  id = undefined;

  /** preliminaryPoBizDetailUpdateBos */
  preliminaryPoBizDetailUpdateBos = [];

  /** 字印的名称 */
  signet = '';

  /** 字印ID */
  signetId = '';

  /** 字印的图片地址 */
  signetPicUrl = '';
}

export class ProBizDetailVo {
  /** 数量 */
  amount = undefined;

  /** 备注 */
  skuMark = '';
}

export class ProCapacity {
  /** averageCapacity */
  averageCapacity = undefined;

  /** companyId */
  companyId = undefined;

  /** createName */
  createName = '';

  /** createTime */
  createTime = '';

  /** id */
  id = undefined;

  /** number */
  number = undefined;

  /** time */
  time = undefined;

  /** timeCapacity */
  timeCapacity = '';

  /** typeCapacity */
  typeCapacity = '';

  /** updateName */
  updateName = '';

  /** updateTime */
  updateTime = '';
}

export class ProSearchBo {
  /** 订单id */
  bizId = undefined;

  /** 业务类型 */
  bizType = '';

  /** 链扣类型(名称) */
  buckleType = '';

  /** 成色 */
  conditi = '';

  /** 柜位id */
  counterId = undefined;

  /** 柜位名称 */
  counterName = '';

  /** 结束时间-建档(时间格式为:YYYY-MM-dd HH:mm:ss) */
  dateEnd = '';

  /** 结束时间-销量(时间格式为:YYYY-MM-dd HH:mm:ss) */
  dateEnds = '';

  /** 开始时间-建档(时间格式为:YYYY-MM-dd HH:mm:ss) */
  dateStart = '';

  /** 开始时间-销量(时间格式为:YYYY-MM-dd HH:mm:ss) */
  dateStarts = '';

  /** 时间类型(WEEK:周  MONTH:月  SEASON:季) */
  dateType = '';

  /** 款式描述 */
  describe = '';

  /** 表面工艺 */
  effectName = '';

  /** 有下单量( 1:存在(勾选)  2:不存在) */
  existAmount = undefined;

  /** 花型(名称) */
  flowerName = '';

  /** 标签 */
  lable = '';

  /** limit */
  limit = undefined;

  /** listProId */
  listProId = [];

  /** mapProSpecSku */
  mapProSpecSku = undefined;

  /** 月 */
  month = undefined;

  /** 是否新品 1:新品 2:非新品 */
  newType = undefined;

  /** 品类 */
  oneName = '';

  /** 页码 */
  page = undefined;

  /** 产品id */
  proId = undefined;

  /** 制造工艺 */
  processName = '';

  /** 季 */
  quarter = undefined;

  /** 行数 */
  rows = undefined;

  /** 销售商id(公司id) */
  saleId = undefined;

  /** 搜索框 */
  search = '';

  /** 二级客户id */
  secondLevelClientId = '';

  /** 尺寸(面宽),链长 */
  size = '';

  /** sizes */
  sizes = undefined;

  /** skuIdList */
  skuIdList = [];

  /** skuList */
  skuList = [];

  /** start */
  start = undefined;

  /** 供应商id(工厂id) */
  supplierId = undefined;

  /** 开口类型(名称) */
  type = '';

  /** 周 */
  week = undefined;

  /** 克重 */
  weight = undefined;

  /** 结束克重 */
  weightEnd = undefined;

  /** 开始克重 */
  weightStart = undefined;

  /** 年 */
  year = undefined;
}

export class ProSupplierBase {
  /** castMaterial */
  castMaterial = '';

  /** id */
  id = undefined;

  /** materialContent */
  materialContent = '';

  /** output */
  output = undefined;

  /** proCapacity */
  proCapacity = new ProCapacity();

  /** proId */
  proId = undefined;

  /** proName */
  proName = '';

  /** proNumber */
  proNumber = '';

  /** proPeriod */
  proPeriod = '';

  /** processFlow */
  processFlow = '';

  /** supplier */
  supplier = undefined;

  /** supplierName */
  supplierName = '';
}

export class ProcessNode {
  /** nodeName */
  nodeName = '';

  /** users */
  users = [];
}

export class ProductBasicInformation {
  /** 辅件json字符串  */
  aux = '';

  /** 大类 */
  bigClass = '';

  /** 品类Code  */
  code = '';

  /** 品类名称  */
  codeName = '';

  /** 公司id  */
  companyId = undefined;

  /** 创建人 */
  createName = '';

  /** 创建时间  */
  createTime = '';

  /** 产品描述  */
  describe = '';

  /** 表面工艺  */
  effectCode = '';

  /** 产品id */
  id = undefined;

  /** imgList */
  imgList = [];

  /** 产品名称-标准 */
  name = '';

  /** 产品编号-标准 */
  number = '';

  /** 专利截止日期  */
  patentEndTime = '';

  /** 专利编号  */
  patentNumber = '';

  /** 制作工艺  */
  processCode = '';

  /** 是否启用:1:制单 2:待启用 3:已启动 4:禁用  */
  state = undefined;

  /** 戒指/手镯:开口类型;手链/项链:链扣类型 */
  type = '';

  /** 更新人 */
  updataName = '';

  /** 更新时间 */
  updateTime = '';
}

export class ProductSalesBasedInformation {
  /** 是否专销 1:是,2:否' */
  flagType = undefined;

  /** id */
  id = undefined;

  /** 标签 */
  label = '';

  /** 是否新品 1:新品 2:非新品 */
  newType = undefined;

  /** 产品id */
  proId = undefined;

  /** 销售商id */
  saleId = '';

  /** 销售名称 */
  saleName = '';

  /** 上市时间 */
  timeToMarket = '';

  /** timeToMarkets */
  timeToMarkets = '';
}

export class ProductSet {
  /** 产品id */
  id = undefined;

  /** 图片数组信息 */
  img = [];

  /** 产品基础属性(第一阶段信息) 规格数组数据 */
  list = [];

  /** 产品基础属性(第一阶段信息) */
  pro = new ProductBasicInformation();

  /** 产品SalesOfProductInformation(第三阶段) */
  proSale = new ProductSalesBasedInformation();

  /** 产品供应商信息列表(第二阶段) */
  proSupplierList = [];

  /** 产品销售信息) */
  sale = new SalesOfProductInformation();

  /** 是否引用 true 引用  false 引用 */
  tag = false;

  /** 是否上架状态 1 是 2 未上架) */
  upStatus = undefined;
}

export class ProductSpecificationClass {
  /** 成色 */
  conditi = '';

  /** 创建时间 */
  createTime = '';

  /** 扩展属性 */
  extendAttr = '';

  /** 花型 */
  flowerType = '';

  /** id */
  id = undefined;

  /** 产品id */
  proId = undefined;

  /** sku编码 */
  skumuber = '';

  /** 是否启用 1:禁用 2:启用 */
  status = undefined;

  /** 更新时间 */
  updateTime = '';

  /** 克重 */
  weight = undefined;

  /** 克重范围（结束） */
  weightEnd = undefined;

  /** 克重范围（开始） */
  weightStart = undefined;
}

export class ProductionOrder {
  /** 是否已关单, 0= 未关单, 1=已关单,默认为0 */
  closed = undefined;

  /** 公司ID,TheRepairOrder所属公司的ID */
  companyId = undefined;

  /** 工厂名称 */
  companyName = '';

  /** 完成时间 */
  completeDate = '';

  /** 当前单据的创建时间 */
  createTime = '';

  /** 划单状态(工厂交货的状态),根据各个SKU的交货情况来变更 */
  deliveryStatus = '';

  /** 成色 */
  fineness = '';

  /** 是否挂签, 0=挂签，1=不挂签 */
  hangLabel = undefined;

  /** ID */
  id = undefined;

  /** 投产数量 */
  launchCount = undefined;

  /** 投产时间 */
  launchDate = '';

  /** 投产id */
  launchId = undefined;

  /** 投产单号 */
  launchNo = '';

  /** 投产状态,根据各个SKU的投产情况来变更 */
  launchStatus = '';

  /** 投产人 */
  launchUser = '';

  /** 投产人id */
  launchUserId = '';

  /** 投产重量 */
  launchWeight = undefined;

  /** 回复交期(最大值) */
  maxReplyDeliveryDate = '';

  /** 回复交期(最小值) */
  minReplyDeliveryDate = '';

  /** 下单公司ID */
  orderCompanyId = undefined;

  /** 下单公司,一般指销售商 */
  orderCompanyName = '';

  /** 接单总数 */
  receiveAmount = undefined;

  /** 接单时间 */
  receiveTime = '';

  /** 接单总克重 */
  receiveWeight = undefined;

  /** 接单人 */
  receiver = '';

  /** 接单人ID */
  receiverId = undefined;

  /** 回复交期(合并) */
  replyDeliveryDateCombine = '';

  /** 字印名称 */
  signet = '';

  /** 字印ID */
  signetId = '';

  /** 字印图片 */
  signetPicUrl = '';

  /** 源单创建时间(下单时间) */
  sourceBizCreateTime = '';

  /** 源单下单人 */
  sourceBizCreator = '';

  /** 源单ID */
  sourceBizId = undefined;

  /** 源单备注 */
  sourceBizMark = '';

  /** 源单号 */
  sourceBizNo = '';

  /** 源单类型 */
  sourceBizType = '';

  /** 源单中的期望交货日期 */
  sourceDeliveryDate = '';

  /** 源单中的接收者,可能是二级客户，也可能是柜台 */
  sourceRecipient = '';

  /** 源单中的接收者ID,可能是二级客户，也可能是柜台 */
  sourceRecipientId = '';

  /** 总件数 */
  totalAmount = undefined;

  /** 总克重 */
  totalGramWeight = undefined;

  /** TheRepairOrder号 */
  workorderNo = '';

  /** TheRepairOrder状态,生成TheRepairOrder时，默认状态是'待接单' */
  workorderStatus = '';

  /** TheRepairOrder类型,目前有正常和加急两种 */
  workorderType = '';
}

export class ProductionOrderPrintReceiptsBarcodeObject {
  /** 源订单Id（投产单Id） */
  poBizId = undefined;

  /** SKU ID */
  skuIds = [];

  /** 行标识（作业表的） */
  uniques = [];

  /** true=该条码已使用过,false=该条码未被使用过 */
  used = false;

  /** TheRepairOrderId */
  workOrderId = undefined;
}

export class ReceiveItem {
  /** 划单/补单 数量 */
  amount = undefined;

  /** TheRepairOrder行标识 */
  lineUnique = '';

  /** 划单/补单 备注 */
  mark = '';

  /** 备注类型,如果是 用户选择预定义的备注，则备注类型=备注，否则，备注类型='其他' */
  markType = '';
}

export class RecordSort {
  /** customerName */
  customerName = '';

  /** extraInfo */
  extraInfo = '';

  /** map */
  map = undefined;

  /** proId */
  proId = undefined;

  /** rank */
  rank = undefined;

  /** skuNumber */
  skuNumber = '';

  /** sort */
  sort = undefined;

  /** totalNumber */
  totalNumber = undefined;

  /** totalWeith */
  totalWeith = undefined;
}

export class SaleMappingRelationWithBLOBs {
  /** companyId */
  companyId = '';

  /** companyName */
  companyName = '';

  /** createName */
  createName = '';

  /** createTime */
  createTime = '';

  /** groupType */
  groupType = undefined;

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** parentId */
  parentId = undefined;

  /** rank */
  rank = undefined;

  /** saleId */
  saleId = '';

  /** saleName */
  saleName = '';

  /** type */
  type = undefined;

  /** updateName */
  updateName = '';

  /** updateTime */
  updateTime = '';
}

export class SalesOfProductInformation {
  /** 产品id */
  companyId = undefined;

  /** 柜台id */
  counterId = '';

  /** 柜台名称 */
  counterName = '';

  /** 创建人 */
  createName = '';

  /** 创建时间 */
  createTime = '';

  /** id */
  id = undefined;

  /** 产品ID */
  proId = undefined;

  /** 是否上架状态 1 是 2 未上架 */
  upStatus = undefined;

  /** 更新人 */
  updataName = '';

  /** 更新时间 */
  updateTime = '';
}

export class SalesOrdersProductSpecificationClasses {
  /** dayWeight */
  dayWeight = undefined;

  /** maxWeight */
  maxWeight = undefined;

  /** predictNumber */
  predictNumber = undefined;

  /** proState */
  proState = undefined;

  /** recentlyWeight */
  recentlyWeight = undefined;

  /** skuState */
  skuState = undefined;

  /** standardWeight */
  standardWeight = undefined;

  /** totalWeight */
  totalWeight = undefined;
}

export class ScmLog {
  /** companyId */
  companyId = undefined;

  /** companyName */
  companyName = '';

  /** content */
  content = '';

  /** createTime */
  createTime = '';

  /** module */
  module = '';

  /** motion */
  motion = '';

  /** name */
  name = '';

  /** userId */
  userId = undefined;
}

export class SimpleDeliveryVo {
  /** 工厂划单数量 */
  amount = undefined;

  /** 工厂划单时间 */
  createTime = '';

  /** 交货记录的行标识,前端不用显示 */
  lineUnique = '';
}

export class StandardAggregateRow {
  /** 数据类型标识 */
  bizBoardType = '';

  /** 列名称 */
  columnName = '';

  /** 列的值 */
  columnValue = '';

  /** 排序号(小的排在前面),前端排列数据的时候，按异常类型/类目 和排序号进行分组和排序,比如:两行数据,具有相同的 异常类型和类目，并且排序号也相同,那么这两行数据就要排在相邻的两行 */
  sortIndex = undefined;

  /** 工厂ID */
  supplierId = undefined;

  /** 工厂名称 */
  supplierName = '';
}

export class StandardAggregateWrap {
  /** 数据类型和列名称汇总 */
  nameList = [];

  /** 原始数据,按最小粒度进行封装 */
  resultList = [];

  /** 工厂名称汇总 */
  supplierNameList = [];
}

export class SupplierDataSheet {
  /** 企业简称 */
  abbr = '';

  /** 公司地址 */
  address = '';

  /** 所属地区 */
  area = '';

  /** 企业id */
  companyId = undefined;

  /** 企业名称，系统唯一 */
  companyName = '';

  /** 法人代表 */
  concat = '';

  /** 合同信息json数组  [{'contractType':'合同类型', 'contractNo':'合同编号', 'timeStart':'合同开始日2021-05-24','timeEnd':'合同结束日2051-05-24'}] */
  contractInfo = '';

  /** 合同受托人json数组  [{'trusteeName':'受托人姓名', 'trusteeCard':'受托人身份证', 'trusteePhone':'受托人电话'}] */
  contractTrustee = '';

  /** createTime */
  createTime = '';

  /** 信用代码 */
  creditNum = '';

  /** 厂印 */
  factorySeal = '';

  /** 财务联系人 */
  finance = '';

  /** 财务编码 */
  financeCode = '';

  /** 财务传真 */
  financeFax = '';

  /** 财务联系电话 */
  financePhone = '';

  /** 企业id */
  id = undefined;

  /** 是否锁定该供应商，1=启用，2=禁用 */
  isLock = undefined;

  /** 营业执照结束时间 */
  licenseEnd = '';

  /** 营业执照 */
  licenseNum = '';

  /** 营业执照开始时间 */
  licenseStart = '';

  /** log图片地址 */
  logUrl = '';

  /** 最后修改人 */
  operator = '';

  /** 最后修改人id */
  operatorId = undefined;

  /** 法人代表电话 */
  phone = '';

  /** 授权委托书编号 */
  proxiesNo = '';

  /** 授权受托人json数组  [{'proxiesName':'授权受托人姓名', 'proxiesCard':'授权受托人身份证', 'proxiesPhone':'授权受托人电话'}] */
  proxiesPeopleInfo = '';

  /** 委托项目 */
  proxiesProduct = '';

  /** 委托签订日期 */
  proxiesSignTime = '';

  /** 委托有效日期结束时间 */
  proxiesTimeEnd = '';

  /** 委托有效日期开始时间 */
  proxiesTimeStart = '';

  /** 供应商资料id */
  supplierId = undefined;

  /** 对接供应商人员 */
  supplierMember = '';

  /** 对接供应商人员id */
  supplierMemberId = undefined;

  /** 供应商编码 */
  supplierNo = '';

  /** 供应商类型 */
  supplierType = '';

  /** updateTime */
  updateTime = '';
}

export class TheCounterTable {
  /** 成色（数组）例：['999','9999'] */
  color = '';

  /** 企业id */
  companyId = undefined;

  /** 柜台名称 */
  counterName = '';

  /** createTime */
  createTime = '';

  /** 柜台id */
  id = undefined;

  /** 柜台领导id */
  leaderId = undefined;

  /** 状态，1=启用，2=禁用 */
  lockStatus = undefined;

  /** 柜台成员id（数组）例：[1,2,3] */
  memberIds = '';

  /** 柜台成员个数 */
  memberNum = undefined;

  /** 最后修改人 */
  operator = '';
}

export class TheProcessObject {
  /** 单据类型 */
  bizType = '';

  /** 公司ID */
  companyId = undefined;

  /** 创建日期 */
  createTime = '';

  /** node */
  node = [];

  /** 最后操作人 */
  operator = '';

  /** 审批流程 */
  processStep = '';

  /** 最后更新时间 */
  updateTime = '';
}

export class TheRepairOrder {
  /** 是否已关单, 0= 未关单, 1=已关单,默认为0 */
  closed = undefined;

  /** 公司ID,TheRepairOrder所属公司的ID */
  companyId = undefined;

  /** 工厂名称 */
  companyName = '';

  /** 完成时间 */
  completeDate = '';

  /** 当前单据的创建时间 */
  createTime = '';

  /** 划单状态(工厂交货的状态),根据各个SKU的交货情况来变更 */
  deliveryStatus = '';

  /** 成色 */
  fineness = '';

  /** 是否挂签, 0=挂签，1=不挂签 */
  hangLabel = undefined;

  /** ID */
  id = undefined;

  /** 投产状态,根据各个SKU的投产情况来变更 */
  launchStatus = '';

  /** 回复交期(最大值) */
  maxReplyDeliveryDate = '';

  /** 回复交期(最小值) */
  minReplyDeliveryDate = '';

  /** 下单公司ID */
  orderCompanyId = undefined;

  /** 下单公司,一般指销售商 */
  orderCompanyName = '';

  /** 接单总数 */
  receiveAmount = undefined;

  /** 接单时间 */
  receiveTime = '';

  /** 接单总克重 */
  receiveWeight = undefined;

  /** 接单人 */
  receiver = '';

  /** 接单人ID */
  receiverId = undefined;

  /** 回复交期(合并) */
  replyDeliveryDateCombine = '';

  /** 字印名称 */
  signet = '';

  /** 字印ID */
  signetId = '';

  /** 字印图片 */
  signetPicUrl = '';

  /** 源单创建时间(下单时间) */
  sourceBizCreateTime = '';

  /** 源单下单人 */
  sourceBizCreator = '';

  /** 源单ID */
  sourceBizId = undefined;

  /** 源单备注 */
  sourceBizMark = '';

  /** 源单号 */
  sourceBizNo = '';

  /** 源单类型 */
  sourceBizType = '';

  /** 源单中的期望交货日期 */
  sourceDeliveryDate = '';

  /** 源单中的接收者,可能是二级客户，也可能是柜台 */
  sourceRecipient = '';

  /** 源单中的接收者ID,可能是二级客户，也可能是柜台 */
  sourceRecipientId = '';

  /** 总件数 */
  totalAmount = undefined;

  /** 总克重 */
  totalGramWeight = undefined;

  /** TheRepairOrder号 */
  workorderNo = '';

  /** TheRepairOrder状态,生成TheRepairOrder时，默认状态是'待接单' */
  workorderStatus = '';

  /** TheRepairOrder类型,目前有正常和加急两种 */
  workorderType = '';
}

export class TheRepairOrderDetailsAGroup {
  /** 产能分类 */
  capacity = new ProCapacity();

  /** 回复交期 */
  delivery = '';

  /** 产品详情 */
  info = [];

  /** loadRate */
  loadRate = '';

  /** 下单量 */
  orderWeight = undefined;

  /** 件数 */
  sumCount = undefined;

  /** 分类名称 */
  type = '';
}

export class Tree {
  /** check */
  check = false;

  /** children */
  children = [];

  /** data */
  data = new AccessResourcesTable();
}

export class UnanweredBoardItemVo {
  /** TheRepairOrderID,查看详情的时候要用这个作为参数 */
  bizId = undefined;

  /** 结束回复交期 */
  endSourceDeliveryDate = '';

  /** 成色 */
  fineness = '';

  /** 占比 */
  offNoteInfo = '';

  /** 下单公司(一级户名/户名) */
  orderCompanyName = '';

  /** 下单时间 */
  sourceBizCreateTime = '';

  /** 下单人 */
  sourceBizCreator = '';

  /** 源单号 */
  sourceBizNo = '';

  /** 源单类型,客单/柜台单,AGENCY=客单, OTC=柜台单 */
  sourceBizType = '';

  /** 期望交期 */
  sourceDeliveryDate = '';

  /** 二级户名(客户/柜台) */
  sourceRecipient = '';

  /** 开始回复交期 */
  startSourceDeliveryDate = '';

  /** 总件数 */
  totalAmount = undefined;

  /** 总重量 */
  totalGramWeight = undefined;

  /** TheRepairOrder号 */
  workOrderNo = '';
}

export class UniversalOverviewQueryParamBo {
  /** 对方公司ID, 在销售订单看板中,该字段填供应商ID,在工厂订单看板中,该字段填一级客户(销售商)ID */
  adverseCompanyId = undefined;

  /** 对方公司名称, 在销售订单看板中,该字段填供应商名称,在工厂订单看板中,该字段填一级客户(销售商)名称 */
  adverseCompanyName = '';

  /** 结束日期,格式'yyyy-MM-dd' */
  endDate = '';

  /** 搜索关键词,请根据销售订单看板和工厂订单看板需求使用! */
  keyword = '';

  /** 源单类型,AGENCY=客单,OTC=柜台单 */
  sourceOrderType = '';

  /** 起始日期,格式'yyyy-MM-dd' */
  startDate = '';
}

export class VendorDataSheet {
  /** 销售商企业信息 */
  company = new EnterpriseTable();

  /** 企业id */
  companyId = undefined;

  /** 合同信息json数组  [{'contractType':'合同类型', 'contractNo':'合同编号', 'timeStart':'合同开始日2021-05-24','timeEnd':'合同结束日2051-05-24'}] */
  contractInfo = '';

  /** 合同受托人json数组  [{'trusteeName':'受托人姓名', 'trusteeCard':'受托人身份证', 'trusteePhone':'受托人电话'}] */
  contractTrustee = '';

  /** createTime */
  createTime = '';

  /** 厂印 */
  factorySeal = '';

  /** 财务联系人 */
  finance = '';

  /** 财务编码 */
  financeCode = '';

  /** 财务传真 */
  financeFax = '';

  /** 财务联系电话 */
  financePhone = '';

  /** 是否锁定该供应商，1=启用，2=禁用 */
  isLock = undefined;

  /** 最后修改人 */
  operator = '';

  /** 授权委托书编号 */
  proxiesNo = '';

  /** 授权受托人json数组  [{'proxiesName':'授权受托人姓名', 'proxiesCard':'授权受托人身份证', 'proxiesPhone':'授权受托人电话'}] */
  proxiesPeopleInfo = '';

  /** 委托项目 */
  proxiesProduct = '';

  /** 委托签订日期 */
  proxiesSignTime = '';

  /** 委托有效日期结束时间 */
  proxiesTimeEnd = '';

  /** 委托有效日期开始时间 */
  proxiesTimeStart = '';

  /** 供应商资料id */
  supplierId = undefined;

  /** 对接供应商人员 */
  supplierMember = '';

  /** 对接供应商人员id */
  supplierMemberId = undefined;

  /** 供应商编码 */
  supplierNo = '';

  /** 供应商类型 */
  supplierType = '';

  /** updateTime */
  updateTime = '';
}

export class WorkOrderDetails {
  /** 采购量(件数) */
  amount = undefined;

  /** 产能分类 */
  capacityType = '';

  /** 是否已关单，0=未关单,1=已关单 */
  closed = undefined;

  /** 已划单(已交货)的数量 */
  deliveryAmount = undefined;

  /** 差异备注 */
  diffMark = '';

  /** 差异备注类型 */
  diffMarkType = '';

  /** 花型 */
  flowerType = '';

  /** 克重总数量 */
  gramWeight = undefined;

  /** 单据行的唯一标识，全系统唯一，根据单据编号，产品ID,SKU ID 生成hash字符串 */
  lineUnique = '';

  /** 已投产的数量 */
  lunchedAmount = undefined;

  /** 标准产品信息 */
  proBaseInfo = '';

  /** 产品品类 */
  proCatagory = '';

  /** 标准产品ID */
  proId = undefined;

  /** 标准产品编号 */
  proNumber = '';

  /** 供应商产品信息 */
  proSupplierInfo = '';

  /** 销售商已收数量 */
  recipientReceivedAmount = undefined;

  /** 0=未拒单,1=已拒单, 默认为0 */
  refused = undefined;

  /** 拒单备注 */
  refusedMark = '';

  /** 拒单备注类型 */
  refusedMarkType = '';

  /** 回复交期(工厂确认的交货日期) */
  replyDeliveryDate = '';

  /** SKU ID */
  skuId = undefined;

  /** SKU信息 */
  skuInfo = '';

  /** 源单中的行标识 */
  sourceLineUnique = '';

  /** 源单的行备注 */
  sourceSkuMark = '';

  /** 补单备注 */
  supplementMark = '';

  /** 补单备注类型 */
  supplementMarkType = '';

  /** 已补单数量 */
  supplementedAmount = undefined;

  /** 供应商产品ID */
  supplierProId = undefined;

  /** 修改的交期 */
  twoDeliveryDate = '';

  /** 修改交期备注 */
  twoMark = '';

  /** 修改交期备注类型 */
  twoMarkType = '';

  /** TheRepairOrderID */
  workorderId = undefined;
}
