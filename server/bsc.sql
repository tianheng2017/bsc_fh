/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50728
Source Host           : localhost:3306
Source Database       : bsc

Target Server Type    : MYSQL
Target Server Version : 50728
File Encoding         : 65001

Date: 2022-08-15 23:00:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ls_admin
-- ----------------------------
DROP TABLE IF EXISTS `ls_admin`;
CREATE TABLE `ls_admin` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `root` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否超级管理员 0-否 1-是',
  `name` varchar(32) NOT NULL DEFAULT '' COMMENT '名称',
  `avatar` varchar(255) NOT NULL DEFAULT '' COMMENT '用户头像',
  `account` varchar(32) NOT NULL DEFAULT '' COMMENT '账号',
  `password` varchar(32) NOT NULL COMMENT '密码',
  `role_id` int(11) NOT NULL DEFAULT '0' COMMENT '角色id',
  `dept_id` int(11) NOT NULL DEFAULT '0' COMMENT '部门id',
  `jobs_id` int(11) NOT NULL DEFAULT '0' COMMENT '岗位id',
  `login_time` int(10) DEFAULT NULL COMMENT '最后登录时间',
  `login_ip` varchar(15) DEFAULT '' COMMENT '最后登录ip',
  `multipoint_login` tinyint(1) unsigned DEFAULT '1' COMMENT '是否支持多处登录：1-是；0-否；',
  `disable` tinyint(1) unsigned DEFAULT '0' COMMENT '是否禁用：0-否；1-是；',
  `create_time` int(10) NOT NULL COMMENT '创建时间',
  `update_time` int(10) DEFAULT NULL COMMENT '修改时间',
  `delete_time` int(10) DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='管理员表';

-- ----------------------------
-- Records of ls_admin
-- ----------------------------
INSERT INTO `ls_admin` VALUES ('1', '1', 'super', '', 'super', '5078c51763a6552939b39a2f8d286b0e', '0', '0', '0', '1660572242', '127.0.0.1', '1', '0', '1660141179', '1660572242', null);

-- ----------------------------
-- Table structure for ls_admin_session
-- ----------------------------
DROP TABLE IF EXISTS `ls_admin_session`;
CREATE TABLE `ls_admin_session` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `admin_id` int(11) unsigned NOT NULL COMMENT '用户id',
  `terminal` tinyint(1) NOT NULL DEFAULT '1' COMMENT '客户端类型：1-pc管理后台 2-mobile手机管理后台',
  `token` varchar(32) NOT NULL COMMENT '令牌',
  `update_time` int(10) DEFAULT NULL COMMENT '更新时间',
  `expire_time` int(10) NOT NULL COMMENT '到期时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `admin_id_client` (`admin_id`,`terminal`) USING BTREE COMMENT '一个用户在一个终端只有一个token',
  UNIQUE KEY `token` (`token`) USING BTREE COMMENT 'token是唯一的'
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='管理员会话表';

-- ----------------------------
-- Records of ls_admin_session
-- ----------------------------
INSERT INTO `ls_admin_session` VALUES ('1', '1', '1', 'edec9ce76f8a9d5963328fbfba78ea68', '1660572242', '1660601042');

-- ----------------------------
-- Table structure for ls_config
-- ----------------------------
DROP TABLE IF EXISTS `ls_config`;
CREATE TABLE `ls_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(30) DEFAULT NULL COMMENT '类型',
  `name` varchar(60) NOT NULL DEFAULT '' COMMENT '名称',
  `value` text COMMENT '值',
  `create_time` int(10) DEFAULT NULL COMMENT '创建时间',
  `update_time` int(10) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COMMENT='配置表';

-- ----------------------------
-- Records of ls_config
-- ----------------------------
INSERT INTO `ls_config` VALUES ('1', 'website', 'name', '后台管理', '1660149298', '1660228545');
INSERT INTO `ls_config` VALUES ('2', 'website', 'web_favicon', 'resource/image/adminapi/default/web_favicon.ico', '1660149298', '1660149298');
INSERT INTO `ls_config` VALUES ('3', 'website', 'web_logo', 'resource/image/adminapi/default/web_logo.jpg', '1660149298', '1660149298');
INSERT INTO `ls_config` VALUES ('4', 'website', 'login_image', 'resource/image/adminapi/default/login_image.png', '1660149298', '1660149298');
INSERT INTO `ls_config` VALUES ('5', 'website', 'fh_wallet', '0xd0A41C8D5A87D50d64c4Bd0cfa8eBB4cFF022d9a', '1660149514', '1660229904');
INSERT INTO `ls_config` VALUES ('6', 'website', 'required_coin', '10000000000', '1660227905', '1660227905');
INSERT INTO `ls_config` VALUES ('7', 'website', 'cbfh_bl', '50', '1660233153', '1660233240');
INSERT INTO `ls_config` VALUES ('8', 'website', 'api_key', 'WRIA3TSVFBPXHTNHYH8D8KKX4HAFVHPDV8', '1660304881', '1660304881');
INSERT INTO `ls_config` VALUES ('9', 'website', 'scan_node', 'https://bsc-dataseed2.defibit.io/', '1660304881', '1660379748');
INSERT INTO `ls_config` VALUES ('10', 'website', 'token_contract', '0x55d398326f99059fF775485246999027B3197955', '1660385312', '1660385312');
INSERT INTO `ls_config` VALUES ('11', 'website', 'token_abi', '[{\"inputs\":[],\"payable\":\"\",\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":\"\",\"inputs\":[{\"indexed\":\"1\",\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":\"1\",\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":\"\",\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":\"\",\"inputs\":[{\"indexed\":\"1\",\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":\"1\",\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":\"\",\"inputs\":[{\"indexed\":\"1\",\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":\"1\",\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":\"\",\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":\"1\",\"inputs\":[],\"name\":\"_decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":\"\",\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":\"1\",\"inputs\":[],\"name\":\"_name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":\"\",\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":\"1\",\"inputs\":[],\"name\":\"_symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":\"\",\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":\"1\",\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":\"\",\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":\"\",\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":\"\",\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":\"1\",\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":\"\",\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":\"\",\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":\"\",\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":\"1\",\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":\"\",\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":\"\",\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":\"\",\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":\"1\",\"inputs\":[],\"name\":\"getOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":\"\",\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":\"\",\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":\"\",\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":\"\",\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":\"\",\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":\"1\",\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":\"\",\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":\"1\",\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":\"\",\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":\"\",\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":\"\",\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":\"1\",\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":\"\",\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":\"1\",\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":\"\",\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":\"\",\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":\"\",\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":\"\",\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":\"\",\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":\"\",\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":\"\",\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]', '1660385312', '1660389264');

-- ----------------------------
-- Table structure for ls_dept
-- ----------------------------
DROP TABLE IF EXISTS `ls_dept`;
CREATE TABLE `ls_dept` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(30) NOT NULL DEFAULT '' COMMENT '部门名称',
  `pid` bigint(20) NOT NULL DEFAULT '0' COMMENT '上级部门id',
  `sort` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `leader` varchar(64) DEFAULT NULL COMMENT '负责人',
  `mobile` varchar(16) DEFAULT NULL COMMENT '联系电话',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '部门状态（0停用 1正常）',
  `create_time` int(10) NOT NULL COMMENT '创建时间',
  `update_time` int(10) DEFAULT NULL COMMENT '修改时间',
  `delete_time` int(10) DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='部门表';

-- ----------------------------
-- Records of ls_dept
-- ----------------------------
INSERT INTO `ls_dept` VALUES ('1', '公司', '0', '0', 'boss', '12345698745', '1', '1650592684', '1653640368', null);

-- ----------------------------
-- Table structure for ls_dict_data
-- ----------------------------
DROP TABLE IF EXISTS `ls_dict_data`;
CREATE TABLE `ls_dict_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(255) NOT NULL COMMENT '数据名称',
  `value` varchar(255) NOT NULL COMMENT '数据值',
  `type_id` int(11) NOT NULL COMMENT '字典类型id',
  `type_value` varchar(255) NOT NULL COMMENT '字典类型',
  `sort` int(10) DEFAULT '0' COMMENT '排序值',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态 0-停用 1-正常',
  `remark` varchar(255) DEFAULT '' COMMENT '备注',
  `create_time` int(10) NOT NULL COMMENT '创建时间',
  `update_time` int(10) DEFAULT NULL COMMENT '修改时间',
  `delete_time` int(10) DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COMMENT='字典数据表';

-- ----------------------------
-- Records of ls_dict_data
-- ----------------------------
INSERT INTO `ls_dict_data` VALUES ('1', '隐藏', '0', '1', 'show_status', '0', '1', '', '1656381543', '1656381543', null);
INSERT INTO `ls_dict_data` VALUES ('2', '显示', '1', '1', 'show_status', '0', '1', '', '1656381550', '1656381550', null);
INSERT INTO `ls_dict_data` VALUES ('3', '进行中', '0', '2', 'business_status', '0', '1', '', '1656381410', '1656381410', null);
INSERT INTO `ls_dict_data` VALUES ('4', '成功', '1', '2', 'business_status', '0', '1', '', '1656381437', '1656381437', null);
INSERT INTO `ls_dict_data` VALUES ('5', '失败', '2', '2', 'business_status', '0', '1', '', '1656381449', '1656381449', null);
INSERT INTO `ls_dict_data` VALUES ('6', '待处理', '0', '3', 'event_status', '0', '1', '', '1656381212', '1656381212', null);
INSERT INTO `ls_dict_data` VALUES ('7', '已处理', '1', '3', 'event_status', '0', '1', '', '1656381315', '1656381315', null);
INSERT INTO `ls_dict_data` VALUES ('8', '拒绝处理', '2', '3', 'event_status', '0', '1', '', '1656381331', '1656381331', null);
INSERT INTO `ls_dict_data` VALUES ('9', '禁用', '1', '4', 'system_disable', '0', '1', '', '1656312030', '1656312030', null);
INSERT INTO `ls_dict_data` VALUES ('10', '正常', '0', '4', 'system_disable', '0', '1', '', '1656312040', '1656312040', null);
INSERT INTO `ls_dict_data` VALUES ('11', '未知', '0', '5', 'sex', '0', '1', '', '1656062988', '1656062988', null);
INSERT INTO `ls_dict_data` VALUES ('12', '男', '1', '5', 'sex', '0', '1', '', '1656062999', '1656062999', null);
INSERT INTO `ls_dict_data` VALUES ('13', '女', '2', '5', 'sex', '0', '1', '', '1656063009', '1656063009', null);
INSERT INTO `ls_dict_data` VALUES ('14', '未入账', '0', '6', 'state', '0', '1', '', '1660206723', '1660206723', null);
INSERT INTO `ls_dict_data` VALUES ('15', '已入账', '1', '6', 'state', '0', '1', '', '1660206733', '1660206733', null);
INSERT INTO `ls_dict_data` VALUES ('16', '持币分红获得BNB', '1', '7', 'mtype', '0', '1', '', '1660235023', '1660235023', null);
INSERT INTO `ls_dict_data` VALUES ('17', '推广分红获得BNB', '2', '7', 'mtype', '0', '1', '', '1660235051', '1660235051', null);
INSERT INTO `ls_dict_data` VALUES ('18', '提取BNB', '3', '7', 'mtype', '0', '1', '', '1660235081', '1660235081', null);
INSERT INTO `ls_dict_data` VALUES ('19', '提取成功', '4', '7', 'mtype', '0', '1', '', '1660235095', '1660235095', null);
INSERT INTO `ls_dict_data` VALUES ('20', '提取驳回', '5', '7', 'mtype', '0', '1', '', '1660235108', '1660235108', null);
INSERT INTO `ls_dict_data` VALUES ('21', '增加', '0', '8', 'direction', '0', '1', '', '1660261317', '1660261317', null);
INSERT INTO `ls_dict_data` VALUES ('22', '减少', '1', '8', 'direction', '0', '1', '', '1660261326', '1660261326', null);
INSERT INTO `ls_dict_data` VALUES ('23', '待审核', '0', '9', 'withdraw_status', '0', '1', '', '1660318983', '1660318983', null);
INSERT INTO `ls_dict_data` VALUES ('24', '已通过', '1', '9', 'withdraw_status', '0', '1', '', '1660318989', '1660318989', null);
INSERT INTO `ls_dict_data` VALUES ('25', '已拒绝', '2', '9', 'withdraw_status', '0', '1', '', '1660363090', '1660363090', null);

-- ----------------------------
-- Table structure for ls_dict_type
-- ----------------------------
DROP TABLE IF EXISTS `ls_dict_type`;
CREATE TABLE `ls_dict_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '字典名称',
  `type` varchar(255) NOT NULL DEFAULT '' COMMENT '字典类型名称',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态 0-停用 1-正常',
  `remark` varchar(255) DEFAULT '' COMMENT '备注',
  `create_time` int(10) NOT NULL COMMENT '创建时间',
  `update_time` int(10) DEFAULT NULL COMMENT '修改时间',
  `delete_time` int(10) DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COMMENT='字典类型表';

-- ----------------------------
-- Records of ls_dict_type
-- ----------------------------
INSERT INTO `ls_dict_type` VALUES ('1', '显示状态', 'show_status', '1', '', '1656381520', '1656381520', null);
INSERT INTO `ls_dict_type` VALUES ('2', '业务状态', 'business_status', '1', '', '1656381393', '1656381393', null);
INSERT INTO `ls_dict_type` VALUES ('3', '事件状态', 'event_status', '1', '', '1656381075', '1656381075', null);
INSERT INTO `ls_dict_type` VALUES ('4', '禁用状态', 'system_disable', '1', '', '1656311838', '1656311838', null);
INSERT INTO `ls_dict_type` VALUES ('5', '用户性别', 'sex', '1', '', '1656062946', '1656380925', null);
INSERT INTO `ls_dict_type` VALUES ('6', '入账状态', 'state', '1', '', '1660206705', '1660206705', null);
INSERT INTO `ls_dict_type` VALUES ('7', '资金类型', 'mtype', '1', '', '1660235002', '1660235002', null);
INSERT INTO `ls_dict_type` VALUES ('8', '资金方向', 'direction', '1', '', '1660261251', '1660318952', null);
INSERT INTO `ls_dict_type` VALUES ('9', '提现状态', 'withdraw_status', '1', '', '1660318967', '1660318967', null);

-- ----------------------------
-- Table structure for ls_file
-- ----------------------------
DROP TABLE IF EXISTS `ls_file`;
CREATE TABLE `ls_file` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `cid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '类目ID',
  `user_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '用户id 前端用户上传的图片',
  `type` tinyint(2) unsigned NOT NULL DEFAULT '10' COMMENT '类型[10=图片, 20=视频]',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '文件名称',
  `uri` varchar(200) NOT NULL COMMENT '文件路径',
  `create_time` int(10) unsigned DEFAULT NULL COMMENT '创建时间',
  `update_time` int(10) DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(10) DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文件表';

-- ----------------------------
-- Records of ls_file
-- ----------------------------

-- ----------------------------
-- Table structure for ls_file_cate
-- ----------------------------
DROP TABLE IF EXISTS `ls_file_cate`;
CREATE TABLE `ls_file_cate` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `pid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '父级ID',
  `type` tinyint(2) unsigned NOT NULL DEFAULT '10' COMMENT '类型[10=图片，20=视频，30=文件]',
  `name` varchar(32) NOT NULL DEFAULT '' COMMENT '分类名称',
  `create_time` int(10) unsigned DEFAULT NULL COMMENT '创建时间',
  `update_time` int(10) unsigned DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(10) unsigned DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文件分类表';

-- ----------------------------
-- Records of ls_file_cate
-- ----------------------------

-- ----------------------------
-- Table structure for ls_generate_column
-- ----------------------------
DROP TABLE IF EXISTS `ls_generate_column`;
CREATE TABLE `ls_generate_column` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `table_id` int(11) NOT NULL DEFAULT '0' COMMENT '表id',
  `column_name` varchar(100) NOT NULL DEFAULT '' COMMENT '字段名称',
  `column_comment` varchar(300) NOT NULL DEFAULT '' COMMENT '字段描述',
  `column_type` varchar(100) NOT NULL DEFAULT '' COMMENT '字段类型',
  `is_required` tinyint(1) DEFAULT '0' COMMENT '是否必填 0-非必填 1-必填',
  `is_pk` tinyint(1) DEFAULT '0' COMMENT '是否为主键 0-不是 1-是',
  `is_insert` tinyint(1) DEFAULT '0' COMMENT '是否为插入字段 0-不是 1-是',
  `is_update` tinyint(1) DEFAULT '0' COMMENT '是否为更新字段 0-不是 1-是',
  `is_lists` tinyint(1) DEFAULT '0' COMMENT '是否为列表字段 0-不是 1-是',
  `is_query` tinyint(1) DEFAULT '0' COMMENT '是否为查询字段 0-不是 1-是',
  `query_type` varchar(100) DEFAULT '=' COMMENT '查询类型',
  `view_type` varchar(100) DEFAULT 'input' COMMENT '显示类型',
  `dict_type` varchar(255) DEFAULT '' COMMENT '字典类型',
  `create_time` int(10) NOT NULL COMMENT '创建时间',
  `update_time` int(10) DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COMMENT='代码生成表字段信息表';

-- ----------------------------
-- Records of ls_generate_column
-- ----------------------------
INSERT INTO `ls_generate_column` VALUES ('9', '1', 'id', 'ID', 'int', '0', '1', '0', '0', '1', '1', '=', 'input', '', '1660185428', '1660186105');
INSERT INTO `ls_generate_column` VALUES ('10', '1', 'address', '钱包地址', 'string', '0', '0', '0', '0', '1', '1', '=', 'input', '', '1660185428', '1660186105');
INSERT INTO `ls_generate_column` VALUES ('11', '1', 'fid', '上级ID', 'int', '0', '0', '0', '0', '1', '1', '=', 'input', '', '1660185428', '1660186105');
INSERT INTO `ls_generate_column` VALUES ('12', '1', 'amount1', '快照BNB余额', 'float', '0', '0', '0', '1', '1', '0', '=', 'input', '', '1660185428', '1660186105');
INSERT INTO `ls_generate_column` VALUES ('13', '1', 'amount2', 'BNB收益', 'float', '0', '0', '0', '1', '1', '0', '=', 'input', '', '1660185428', '1660186105');
INSERT INTO `ls_generate_column` VALUES ('14', '1', 'count', '已分红次数', 'int', '0', '0', '0', '0', '1', '0', '=', 'input', '', '1660185428', '1660186105');
INSERT INTO `ls_generate_column` VALUES ('15', '1', 'create_time', '注册时间', 'int', '0', '0', '0', '0', '1', '0', '=', 'input', '', '1660185428', '1660186105');
INSERT INTO `ls_generate_column` VALUES ('16', '1', 'update_time', '', 'int', '0', '0', '0', '0', '0', '0', '=', 'input', '', '1660185428', '1660186105');
INSERT INTO `ls_generate_column` VALUES ('27', '2', 'id', 'ID', 'int', '0', '1', '0', '0', '1', '1', '=', 'input', '', '1660207867', '1660208002');
INSERT INTO `ls_generate_column` VALUES ('28', '2', 'tx', '交易hash', 'string', '0', '0', '0', '0', '1', '1', '=', 'input', '', '1660207867', '1660208002');
INSERT INTO `ls_generate_column` VALUES ('29', '2', 'symbol', '币种名称', 'string', '0', '0', '0', '0', '1', '1', '=', 'input', '', '1660207867', '1660208002');
INSERT INTO `ls_generate_column` VALUES ('30', '2', 'from_address', '发送方', 'string', '0', '0', '0', '0', '1', '1', '=', 'input', '', '1660207867', '1660208002');
INSERT INTO `ls_generate_column` VALUES ('31', '2', 'to_address', '接收方', 'string', '0', '0', '0', '0', '1', '1', '=', 'input', '', '1660207867', '1660208002');
INSERT INTO `ls_generate_column` VALUES ('32', '2', 'amount', '转入数量', 'float', '0', '0', '0', '0', '1', '1', '=', 'input', '', '1660207867', '1660208002');
INSERT INTO `ls_generate_column` VALUES ('33', '2', 'state', '状态', 'int', '0', '0', '0', '0', '1', '1', '=', 'select', 'state', '1660207867', '1660208002');
INSERT INTO `ls_generate_column` VALUES ('34', '2', 'block_time', '区块到账时间', 'int', '0', '0', '0', '0', '1', '1', '=', 'datetime', '', '1660207867', '1660208002');
INSERT INTO `ls_generate_column` VALUES ('35', '2', 'create_time', '创建时间', 'int', '0', '0', '0', '0', '1', '0', '=', 'input', '', '1660207867', '1660208002');
INSERT INTO `ls_generate_column` VALUES ('36', '3', 'id', 'ID', 'int', '0', '1', '0', '0', '1', '0', '=', 'input', '', '1660234576', '1660261451');
INSERT INTO `ls_generate_column` VALUES ('37', '3', 'uid', '用户ID', 'int', '0', '0', '0', '0', '1', '1', '=', 'input', '', '1660234576', '1660261451');
INSERT INTO `ls_generate_column` VALUES ('38', '3', 'direction', '方向', 'int', '0', '0', '0', '0', '1', '0', '=', 'input', '', '1660234576', '1660261451');
INSERT INTO `ls_generate_column` VALUES ('39', '3', 'amount', '金额', 'float', '0', '0', '0', '0', '1', '0', '=', 'input', '', '1660234576', '1660261451');
INSERT INTO `ls_generate_column` VALUES ('40', '3', 'mtype', '资金类型', 'int', '0', '0', '0', '0', '1', '1', '=', 'select', 'mtype', '1660234576', '1660261451');
INSERT INTO `ls_generate_column` VALUES ('41', '3', 'ext_id', '扩展ID', 'int', '0', '0', '0', '0', '0', '0', '=', 'input', '', '1660234576', '1660261451');
INSERT INTO `ls_generate_column` VALUES ('42', '3', 'content', '明细详情', 'string', '0', '0', '0', '0', '1', '0', '=', 'input', '', '1660234576', '1660261451');
INSERT INTO `ls_generate_column` VALUES ('43', '3', 'create_time', '创建时间', 'int', '0', '0', '0', '0', '0', '0', '=', 'input', '', '1660234576', '1660261451');
INSERT INTO `ls_generate_column` VALUES ('44', '4', 'id', 'ID', 'int', '0', '1', '0', '0', '1', '1', '=', 'input', '', '1660319213', '1660319336');
INSERT INTO `ls_generate_column` VALUES ('45', '4', 'tx', '交易hash', 'string', '0', '0', '0', '0', '1', '1', '=', 'input', '', '1660319213', '1660319336');
INSERT INTO `ls_generate_column` VALUES ('46', '4', 'address', '用户钱包', 'string', '0', '0', '0', '0', '1', '1', '=', 'input', '', '1660319213', '1660319336');
INSERT INTO `ls_generate_column` VALUES ('47', '4', 'amount', '提现数量', 'float', '0', '0', '0', '0', '1', '0', '=', 'input', '', '1660319213', '1660319336');
INSERT INTO `ls_generate_column` VALUES ('48', '4', 'status', '提现状态', 'int', '0', '0', '0', '0', '1', '1', '=', 'select', 'withdraw_status', '1660319213', '1660319336');
INSERT INTO `ls_generate_column` VALUES ('49', '4', 'cl_time', '处理时间', 'int', '0', '0', '0', '0', '1', '1', '=', 'datetime', '', '1660319213', '1660319336');
INSERT INTO `ls_generate_column` VALUES ('50', '4', 'remark', '备注', 'string', '0', '0', '0', '0', '1', '0', '=', 'input', '', '1660319213', '1660319336');
INSERT INTO `ls_generate_column` VALUES ('51', '4', 'create_time', '申请时间', 'int', '0', '0', '0', '0', '1', '0', '=', 'input', '', '1660319213', '1660319336');
INSERT INTO `ls_generate_column` VALUES ('52', '4', 'update_time', '', 'int', '0', '0', '0', '0', '0', '0', '=', 'input', '', '1660319213', '1660319336');

-- ----------------------------
-- Table structure for ls_generate_table
-- ----------------------------
DROP TABLE IF EXISTS `ls_generate_table`;
CREATE TABLE `ls_generate_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `table_name` varchar(200) NOT NULL DEFAULT '' COMMENT '表名称',
  `table_comment` varchar(300) NOT NULL DEFAULT '' COMMENT '表描述',
  `template_type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '模板类型 0-单表(curd) 1-树表(curd)',
  `author` varchar(100) DEFAULT '' COMMENT '作者',
  `remark` varchar(255) DEFAULT '' COMMENT '备注',
  `generate_type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '生成方式  0-压缩包下载 1-生成到模块',
  `module_name` varchar(100) DEFAULT '' COMMENT '模块名',
  `class_dir` varchar(100) DEFAULT '' COMMENT '类目录名',
  `class_comment` varchar(100) DEFAULT '' COMMENT '类描述',
  `admin_id` int(11) DEFAULT '0' COMMENT '管理员id',
  `menu` text COMMENT '菜单配置',
  `create_time` int(10) NOT NULL COMMENT '创建时间',
  `update_time` int(10) DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COMMENT='代码生成表信息表';

-- ----------------------------
-- Records of ls_generate_table
-- ----------------------------
INSERT INTO `ls_generate_table` VALUES ('1', 'ls_users', '用户表', '0', '', '', '1', 'adminapi', '', '', '1', '{\"pid\":\"0\",\"type\":\"1\",\"name\":\"\\u7528\\u6237\\u7ba1\\u7406\"}', '1660150040', '1660186105');
INSERT INTO `ls_generate_table` VALUES ('2', 'ls_transfer_log', '转入记录表', '0', '', '', '1', 'adminapi', '', '', '1', '{\"pid\":\"0\",\"type\":\"1\",\"name\":\"\\u8f6c\\u5165\\u8bb0\\u5f55\"}', '1660206623', '1660208002');
INSERT INTO `ls_generate_table` VALUES ('3', 'ls_money_log', '资金明细表', '0', '', '', '1', 'adminapi', '', '', '1', '{\"pid\":\"0\",\"type\":\"1\",\"name\":\"\\u8d44\\u91d1\\u660e\\u7ec6\"}', '1660234576', '1660261451');
INSERT INTO `ls_generate_table` VALUES ('4', 'ls_withdraw', '提现申请表', '0', '', '', '1', 'adminapi', '', '', '1', '{\"pid\":\"0\",\"type\":\"1\",\"name\":\"\\u63d0\\u73b0\\u7533\\u8bf7\\u8868\"}', '1660319213', '1660319336');

-- ----------------------------
-- Table structure for ls_jobs
-- ----------------------------
DROP TABLE IF EXISTS `ls_jobs`;
CREATE TABLE `ls_jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(50) NOT NULL COMMENT '岗位名称',
  `code` varchar(64) NOT NULL COMMENT '岗位编码',
  `sort` int(11) DEFAULT '0' COMMENT '显示顺序',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态（0停用 1正常）',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注',
  `create_time` int(10) NOT NULL COMMENT '创建时间',
  `update_time` int(10) DEFAULT NULL COMMENT '修改时间',
  `delete_time` int(10) DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='岗位表';

-- ----------------------------
-- Records of ls_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for ls_money_log
-- ----------------------------
DROP TABLE IF EXISTS `ls_money_log`;
CREATE TABLE `ls_money_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL DEFAULT '0' COMMENT '用户ID',
  `direction` tinyint(3) NOT NULL DEFAULT '0' COMMENT '方向',
  `amount` decimal(16,4) NOT NULL DEFAULT '0.0000' COMMENT '金额',
  `mtype` int(11) NOT NULL DEFAULT '0' COMMENT '明细类型',
  `ext_id` int(11) NOT NULL DEFAULT '0' COMMENT '扩展ID',
  `content` varchar(255) NOT NULL DEFAULT '' COMMENT '明细详情',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='资金明细表';

-- ----------------------------
-- Records of ls_money_log
-- ----------------------------
INSERT INTO `ls_money_log` VALUES ('1', '3', '1', '11.0000', '3', '0', '提取BNB', '1660493841');
INSERT INTO `ls_money_log` VALUES ('2', '3', '1', '100.0000', '3', '0', '提取BNB', '1660494369');
INSERT INTO `ls_money_log` VALUES ('3', '3', '1', '1000.0000', '3', '0', '提取BNB', '1660494403');

-- ----------------------------
-- Table structure for ls_operation_log
-- ----------------------------
DROP TABLE IF EXISTS `ls_operation_log`;
CREATE TABLE `ls_operation_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_id` int(11) NOT NULL COMMENT '管理员ID',
  `admin_name` varchar(16) NOT NULL DEFAULT '' COMMENT '管理员名称',
  `account` varchar(16) NOT NULL DEFAULT '' COMMENT '管理员账号',
  `action` varchar(64) DEFAULT '' COMMENT '操作名称',
  `type` varchar(8) NOT NULL COMMENT '请求方式',
  `url` varchar(255) NOT NULL COMMENT '访问链接',
  `params` text COMMENT '请求数据',
  `result` text COMMENT '请求结果',
  `ip` varchar(15) NOT NULL DEFAULT '' COMMENT 'ip地址',
  `create_time` int(10) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='系统日志表';

-- ----------------------------
-- Records of ls_operation_log
-- ----------------------------

-- ----------------------------
-- Table structure for ls_regpath
-- ----------------------------
DROP TABLE IF EXISTS `ls_regpath`;
CREATE TABLE `ls_regpath` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL DEFAULT '0' COMMENT '用户ID',
  `member_uid` int(11) NOT NULL DEFAULT '0' COMMENT '团队成员ID',
  `level` int(11) NOT NULL DEFAULT '0' COMMENT 'member_uid 是 uid 的多少级下线',
  `create_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idxonly_rp` (`uid`,`member_uid`) USING BTREE,
  KEY `idx_ul` (`uid`,`member_uid`,`level`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='注册关系';

-- ----------------------------
-- Records of ls_regpath
-- ----------------------------
INSERT INTO `ls_regpath` VALUES ('1', '1', '2', '1', '1660485697');

-- ----------------------------
-- Table structure for ls_role
-- ----------------------------
DROP TABLE IF EXISTS `ls_role`;
CREATE TABLE `ls_role` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(16) NOT NULL DEFAULT '' COMMENT '名称',
  `desc` varchar(128) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT '描述',
  `sort` int(11) DEFAULT '0' COMMENT '排序',
  `create_time` int(10) DEFAULT NULL COMMENT '创建时间',
  `update_time` int(10) DEFAULT NULL COMMENT '更新时间',
  `delete_time` int(10) DEFAULT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='角色表';

-- ----------------------------
-- Records of ls_role
-- ----------------------------

-- ----------------------------
-- Table structure for ls_system_menu
-- ----------------------------
DROP TABLE IF EXISTS `ls_system_menu`;
CREATE TABLE `ls_system_menu` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `pid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '上级菜单',
  `type` char(2) NOT NULL DEFAULT '' COMMENT '权限类型: M=目录，C=菜单，A=按钮',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '菜单名称',
  `icon` varchar(100) NOT NULL DEFAULT '' COMMENT '菜单图标',
  `sort` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '菜单排序',
  `perms` varchar(100) NOT NULL DEFAULT '' COMMENT '权限标识',
  `paths` varchar(100) NOT NULL DEFAULT '' COMMENT '路由地址',
  `component` varchar(200) NOT NULL DEFAULT '' COMMENT '前端组件',
  `selected` varchar(200) NOT NULL DEFAULT '' COMMENT '选中路径',
  `params` varchar(200) NOT NULL DEFAULT '' COMMENT '路由参数',
  `is_cache` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否缓存: 0=否, 1=是',
  `is_show` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '是否显示: 0=否, 1=是',
  `is_disable` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否禁用: 0=否, 1=是',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4 COMMENT='菜单权限表';

-- ----------------------------
-- Records of ls_system_menu
-- ----------------------------
INSERT INTO `ls_system_menu` VALUES ('4', '0', 'M', '权限管理', 'el-icon-Lock', '800', '', 'permission', '', '', '', '0', '1', '0', '1656664556', '1658989382');
INSERT INTO `ls_system_menu` VALUES ('5', '0', 'C', '工作台', 'el-icon-Monitor', '1000', 'workbench/index', 'workbench', 'workbench/index', '', '', '0', '1', '0', '1656664793', '1658989243');
INSERT INTO `ls_system_menu` VALUES ('6', '4', 'C', '菜单', 'el-icon-Operation', '1', 'auth.menu/lists', 'menu', 'permission/menu/index', '', '', '1', '1', '0', '1656664960', '1658989504');
INSERT INTO `ls_system_menu` VALUES ('7', '4', 'C', '管理员', 'local-icon-member', '1', 'auth.admin/lists', 'admin', 'permission/admin/index', '', '', '0', '1', '0', '1656901567', '1658989587');
INSERT INTO `ls_system_menu` VALUES ('8', '4', 'C', '角色', 'local-icon-set-user', '1', 'auth.role/lists', 'role', 'permission/role/index', '', '', '0', '1', '0', '1656901660', '1658989634');
INSERT INTO `ls_system_menu` VALUES ('12', '8', 'A', '新增角色', '', '1', 'auth.role/add', '', '', '', '', '0', '1', '0', '1657001790', '1657073691');
INSERT INTO `ls_system_menu` VALUES ('14', '8', 'A', '编辑角色', '', '1', 'auth.role/edit', '', '', '', '', '0', '1', '0', '1657001924', '1657073676');
INSERT INTO `ls_system_menu` VALUES ('15', '8', 'A', '删除角色', '', '1', 'auth.role/delete', '', '', '', '', '0', '1', '0', '1657001982', '1657073665');
INSERT INTO `ls_system_menu` VALUES ('16', '6', 'A', '新增菜单', '', '1', 'auth.menu/add', '', '', '', '', '0', '1', '0', '1657072523', '1657072523');
INSERT INTO `ls_system_menu` VALUES ('17', '6', 'A', '编辑菜单', '', '1', 'auth.menu/edit', '', '', '', '', '0', '1', '0', '1657073955', '1657073955');
INSERT INTO `ls_system_menu` VALUES ('18', '6', 'A', '删除菜单', '', '1', 'auth.menu/delete', '', '', '', '', '0', '1', '0', '1657073987', '1657074002');
INSERT INTO `ls_system_menu` VALUES ('19', '7', 'A', '新增管理员', '', '1', 'auth.admin/add', '', '', '', '', '0', '1', '0', '1657074035', '1657074035');
INSERT INTO `ls_system_menu` VALUES ('20', '7', 'A', '编辑管理员', '', '1', 'auth.admin/edit', '', '', '', '', '0', '1', '0', '1657074071', '1657074071');
INSERT INTO `ls_system_menu` VALUES ('21', '7', 'A', '删除管理员', '', '1', 'auth.admin/delete', '', '', '', '', '0', '1', '0', '1657074108', '1657074108');
INSERT INTO `ls_system_menu` VALUES ('28', '0', 'M', '系统设置', 'el-icon-Setting', '500', '', 'setting', '', '', '', '0', '1', '0', '1657100164', '1658989887');
INSERT INTO `ls_system_menu` VALUES ('30', '28', 'C', '网站设置', 'el-icon-ElementPlus', '1', 'setting.web.web_setting/getWebsite', 'information', 'setting/website/information', '', '', '0', '1', '0', '1657100306', '1660489437');
INSERT INTO `ls_system_menu` VALUES ('33', '28', 'C', '存储设置', 'el-icon-FolderOpened', '1', 'setting.storage/lists', 'storage', 'setting/storage/index', '', '', '0', '1', '0', '1657160959', '1658989894');
INSERT INTO `ls_system_menu` VALUES ('34', '28', 'C', '字典管理', 'el-icon-Box', '1', 'setting.dict.dict_type/lists', 'dict', 'setting/dict/type/index', '', '', '0', '1', '0', '1657161211', '1658989785');
INSERT INTO `ls_system_menu` VALUES ('36', '28', 'C', '系统日志', 'el-icon-DocumentCopy', '1', 'setting.system.log/lists', 'journal', 'setting/system/journal', '', '', '0', '1', '0', '1657161696', '1660489337');
INSERT INTO `ls_system_menu` VALUES ('37', '28', 'C', '系统缓存', 'el-icon-MessageBox', '1', '', 'cache', 'setting/system/cache', '', '', '0', '1', '0', '1657161896', '1660489377');
INSERT INTO `ls_system_menu` VALUES ('38', '28', 'C', '系统环境', 'el-icon-Management', '1', 'setting.system.system/info', 'environment', 'setting/system/environment', '', '', '0', '1', '0', '1657162000', '1660489386');
INSERT INTO `ls_system_menu` VALUES ('51', '30', 'A', '保存网站信息', '', '1', 'setting.web.web_setting/setWebsite', '', '', '', '', '0', '1', '0', '1657164469', '1657164469');
INSERT INTO `ls_system_menu` VALUES ('54', '33', 'A', '设置存储', '', '1', 'setting.storage/setup', '', '', '', '', '0', '1', '0', '1657165303', '1657165303');
INSERT INTO `ls_system_menu` VALUES ('55', '34', 'A', '新增字典类型', '', '1', 'setting.dict.dict_type/add', '', '', '', '', '0', '1', '0', '1657166966', '1657166966');
INSERT INTO `ls_system_menu` VALUES ('56', '34', 'A', '编辑字典类型', '', '1', 'setting.dict.dict_type/edit', '', '', '', '', '0', '1', '0', '1657166997', '1657166997');
INSERT INTO `ls_system_menu` VALUES ('57', '34', 'A', '删除字典类型', '', '1', 'setting.dict.dict_type/delete', '', '', '', '', '0', '1', '0', '1657167038', '1657167038');
INSERT INTO `ls_system_menu` VALUES ('58', '34', 'A', '新增字典数据', '', '1', 'setting.dict.dict_data/add', '', '', '', '', '0', '1', '0', '1657167317', '1657167317');
INSERT INTO `ls_system_menu` VALUES ('59', '34', 'A', '编辑字典数据', '', '1', 'setting.dict.dict_data/edit', '', '', '', '', '0', '1', '0', '1657167371', '1657167371');
INSERT INTO `ls_system_menu` VALUES ('60', '34', 'A', '删除字典数据', '', '1', 'setting.dict.dict_data/delete', '', '', '', '', '0', '1', '0', '1657167397', '1657167397');
INSERT INTO `ls_system_menu` VALUES ('61', '37', 'A', '清除系统缓存', '', '1', 'setting.system.cache/clear', '', '', '', '', '0', '1', '0', '1657173837', '1657173939');
INSERT INTO `ls_system_menu` VALUES ('62', '34', 'A', '字典数据管理', '', '1', 'setting.dict.dict_data/lists', '', '', '', '', '0', '1', '0', '1657174351', '1657174351');
INSERT INTO `ls_system_menu` VALUES ('81', '0', 'C', '用户管理', 'local-icon-user', '1', 'users/lists', 'users', 'users/index', '', '', '0', '1', '0', '1660186108', '1660187800');
INSERT INTO `ls_system_menu` VALUES ('83', '81', 'A', '编辑', '', '1', 'users/edit', '', '', '', '', '0', '1', '0', '1660186108', '1660186108');
INSERT INTO `ls_system_menu` VALUES ('84', '81', 'A', '删除', '', '1', 'users/delete', '', '', '', '', '0', '1', '0', '1660186108', '1660186108');
INSERT INTO `ls_system_menu` VALUES ('85', '0', 'C', '转入记录', 'local-icon-aircraft', '1', 'transfer_log/lists', 'transfer_log', 'transfer_log/index', '', '', '0', '1', '0', '1660208029', '1660208054');
INSERT INTO `ls_system_menu` VALUES ('89', '0', 'C', '资金明细', 'local-icon-money', '1', 'money_log/lists', 'money_log', 'money_log/index', '', '', '0', '1', '0', '1660261471', '1660261493');
INSERT INTO `ls_system_menu` VALUES ('93', '0', 'C', '提现记录', 'local-icon-page', '1', 'withdraw/lists', 'withdraw', 'withdraw/index', '', '', '0', '1', '0', '1660319342', '1660320466');
INSERT INTO `ls_system_menu` VALUES ('96', '93', 'A', '删除', '', '1', 'withdraw/delete', '', '', '', '', '0', '1', '0', '1660319342', '1660319342');
INSERT INTO `ls_system_menu` VALUES ('97', '93', 'A', '审核', '', '1', 'withdraw/audit', '', '', '', '', '0', '1', '0', '1660488977', '1660488987');

-- ----------------------------
-- Table structure for ls_system_menu_copy
-- ----------------------------
DROP TABLE IF EXISTS `ls_system_menu_copy`;
CREATE TABLE `ls_system_menu_copy` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `pid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '上级菜单',
  `type` char(2) NOT NULL DEFAULT '' COMMENT '权限类型: M=目录，C=菜单，A=按钮',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '菜单名称',
  `icon` varchar(100) NOT NULL DEFAULT '' COMMENT '菜单图标',
  `sort` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '菜单排序',
  `perms` varchar(100) NOT NULL DEFAULT '' COMMENT '权限标识',
  `paths` varchar(100) NOT NULL DEFAULT '' COMMENT '路由地址',
  `component` varchar(200) NOT NULL DEFAULT '' COMMENT '前端组件',
  `selected` varchar(200) NOT NULL DEFAULT '' COMMENT '选中路径',
  `params` varchar(200) NOT NULL DEFAULT '' COMMENT '路由参数',
  `is_cache` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否缓存: 0=否, 1=是',
  `is_show` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '是否显示: 0=否, 1=是',
  `is_disable` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否禁用: 0=否, 1=是',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COMMENT='菜单权限表';

-- ----------------------------
-- Records of ls_system_menu_copy
-- ----------------------------
INSERT INTO `ls_system_menu_copy` VALUES ('4', '0', 'M', '权限管理', 'el-icon-Lock', '800', '', 'permission', '', '', '', '0', '1', '0', '1656664556', '1658989382');
INSERT INTO `ls_system_menu_copy` VALUES ('5', '0', 'C', '工作台', 'el-icon-Monitor', '1000', 'workbench/index', 'workbench', 'workbench/index', '', '', '0', '1', '0', '1656664793', '1658989243');
INSERT INTO `ls_system_menu_copy` VALUES ('6', '4', 'C', '菜单', 'el-icon-Operation', '1', 'auth.menu/lists', 'menu', 'permission/menu/index', '', '', '1', '1', '0', '1656664960', '1658989504');
INSERT INTO `ls_system_menu_copy` VALUES ('7', '4', 'C', '管理员', 'local-icon-member', '1', 'auth.admin/lists', 'admin', 'permission/admin/index', '', '', '0', '1', '0', '1656901567', '1658989587');
INSERT INTO `ls_system_menu_copy` VALUES ('8', '4', 'C', '角色', 'local-icon-set-user', '1', 'auth.role/lists', 'role', 'permission/role/index', '', '', '0', '1', '0', '1656901660', '1658989634');
INSERT INTO `ls_system_menu_copy` VALUES ('12', '8', 'A', '新增角色', '', '1', 'auth.role/add', '', '', '', '', '0', '1', '0', '1657001790', '1657073691');
INSERT INTO `ls_system_menu_copy` VALUES ('14', '8', 'A', '编辑角色', '', '1', 'auth.role/edit', '', '', '', '', '0', '1', '0', '1657001924', '1657073676');
INSERT INTO `ls_system_menu_copy` VALUES ('15', '8', 'A', '删除角色', '', '1', 'auth.role/delete', '', '', '', '', '0', '1', '0', '1657001982', '1657073665');
INSERT INTO `ls_system_menu_copy` VALUES ('16', '6', 'A', '新增菜单', '', '1', 'auth.menu/add', '', '', '', '', '0', '1', '0', '1657072523', '1657072523');
INSERT INTO `ls_system_menu_copy` VALUES ('17', '6', 'A', '编辑菜单', '', '1', 'auth.menu/edit', '', '', '', '', '0', '1', '0', '1657073955', '1657073955');
INSERT INTO `ls_system_menu_copy` VALUES ('18', '6', 'A', '删除菜单', '', '1', 'auth.menu/delete', '', '', '', '', '0', '1', '0', '1657073987', '1657074002');
INSERT INTO `ls_system_menu_copy` VALUES ('19', '7', 'A', '新增管理员', '', '1', 'auth.admin/add', '', '', '', '', '0', '1', '0', '1657074035', '1657074035');
INSERT INTO `ls_system_menu_copy` VALUES ('20', '7', 'A', '编辑管理员', '', '1', 'auth.admin/edit', '', '', '', '', '0', '1', '0', '1657074071', '1657074071');
INSERT INTO `ls_system_menu_copy` VALUES ('21', '7', 'A', '删除管理员', '', '1', 'auth.admin/delete', '', '', '', '', '0', '1', '0', '1657074108', '1657074108');
INSERT INTO `ls_system_menu_copy` VALUES ('23', '0', 'M', '开发工具', 'el-icon-EditPen', '900', '', 'dev_tools', '', '', '', '0', '1', '0', '1657097744', '1658989289');
INSERT INTO `ls_system_menu_copy` VALUES ('24', '23', 'C', '代码生成器', 'el-icon-DocumentAdd', '1', 'tools.generator/generateTable', 'code', 'dev_tools/code/index', '', '', '0', '1', '0', '1657098110', '1658989423');
INSERT INTO `ls_system_menu_copy` VALUES ('25', '0', 'M', '组织管理', 'el-icon-User', '700', '', 'organization', '', '', '', '0', '0', '1', '1657099914', '1660141377');
INSERT INTO `ls_system_menu_copy` VALUES ('26', '25', 'C', '部门管理', 'el-icon-Coordinate', '1', 'dept.dept/lists', 'department', 'organization/department/index', '', '', '0', '1', '0', '1657099989', '1658989663');
INSERT INTO `ls_system_menu_copy` VALUES ('27', '25', 'C', '岗位管理', 'el-icon-PriceTag', '1', 'dept.jobs/lists', 'post', 'organization/post/index', '', '', '0', '1', '0', '1657100044', '1658989726');
INSERT INTO `ls_system_menu_copy` VALUES ('28', '0', 'M', '系统设置', 'el-icon-Setting', '500', '', 'setting', '', '', '', '0', '1', '0', '1657100164', '1658989887');
INSERT INTO `ls_system_menu_copy` VALUES ('29', '28', 'M', '网站设置', 'el-icon-Basketball', '1', '', 'website', '', '', '', '0', '1', '0', '1657100230', '1658989861');
INSERT INTO `ls_system_menu_copy` VALUES ('30', '29', 'C', '网站信息', '', '1', 'setting.web.web_setting/getWebsite', 'information', 'setting/website/information', '', '', '0', '1', '0', '1657100306', '1657164412');
INSERT INTO `ls_system_menu_copy` VALUES ('31', '29', 'C', '网站备案', '', '1', 'setting.web.web_setting/getCopyright', 'filing', 'setting/website/filing', '', '', '0', '1', '0', '1657100434', '1657164723');
INSERT INTO `ls_system_menu_copy` VALUES ('32', '29', 'C', '政策协议', '', '1', 'setting.web.web_setting/getAgreement', 'protocol', 'setting/website/protocol', '', '', '0', '1', '0', '1657100571', '1657164770');
INSERT INTO `ls_system_menu_copy` VALUES ('33', '28', 'C', '存储设置', 'el-icon-FolderOpened', '1', 'setting.storage/lists', 'storage', 'setting/storage/index', '', '', '0', '1', '0', '1657160959', '1658989894');
INSERT INTO `ls_system_menu_copy` VALUES ('34', '28', 'C', '字典管理', 'el-icon-Box', '1', 'setting.dict.dict_type/lists', 'dict', 'setting/dict/type/index', '', '', '0', '1', '0', '1657161211', '1658989785');
INSERT INTO `ls_system_menu_copy` VALUES ('35', '28', 'M', '系统维护', 'el-icon-SetUp', '1', '', 'system', '', '', '', '0', '1', '0', '1657161569', '1658989938');
INSERT INTO `ls_system_menu_copy` VALUES ('36', '35', 'C', '系统日志', '', '1', 'setting.system.log/lists', 'journal', 'setting/system/journal', '', '', '0', '1', '0', '1657161696', '1657165722');
INSERT INTO `ls_system_menu_copy` VALUES ('37', '35', 'C', '系统缓存', '', '1', '', 'cache', 'setting/system/cache', '', '', '0', '1', '0', '1657161896', '1657173767');
INSERT INTO `ls_system_menu_copy` VALUES ('38', '35', 'C', '系统环境', '', '1', 'setting.system.system/info', 'environment', 'setting/system/environment', '', '', '0', '1', '0', '1657162000', '1657173794');
INSERT INTO `ls_system_menu_copy` VALUES ('39', '24', 'A', '导入数据表', '', '1', 'tools.generator/selectTable', '', '', '', '', '0', '1', '0', '1657162736', '1657162736');
INSERT INTO `ls_system_menu_copy` VALUES ('40', '24', 'A', '代码生成', '', '1', 'tools.generator/generate', '', '', '', '', '0', '1', '0', '1657162806', '1657162806');
INSERT INTO `ls_system_menu_copy` VALUES ('41', '24', 'A', '编辑数据表', '', '1', 'tools.generator/edit', '', '', '', '', '0', '1', '0', '1657162866', '1657163032');
INSERT INTO `ls_system_menu_copy` VALUES ('42', '24', 'A', '同步表结构', '', '1', 'tools.generator/syncColumn', '', '', '', '', '0', '1', '0', '1657162934', '1657162934');
INSERT INTO `ls_system_menu_copy` VALUES ('43', '24', 'A', '删除数据表', '', '1', 'tools.generator/delete', '', '', '', '', '0', '1', '0', '1657163015', '1657163015');
INSERT INTO `ls_system_menu_copy` VALUES ('44', '24', 'A', '预览代码', '', '1', 'tools.generator/preview', '', '', '', '', '0', '1', '0', '1657163263', '1657163263');
INSERT INTO `ls_system_menu_copy` VALUES ('45', '26', 'A', '新增部门', '', '1', 'dept.dept/add', '', '', '', '', '0', '1', '0', '1657163548', '1657163548');
INSERT INTO `ls_system_menu_copy` VALUES ('46', '26', 'A', '编辑部门', '', '1', 'dept.dept/edit', '', '', '', '', '0', '1', '0', '1657163599', '1657163599');
INSERT INTO `ls_system_menu_copy` VALUES ('47', '26', 'A', '删除部门', '', '1', 'dept.dept/delete', '', '', '', '', '0', '1', '0', '1657163687', '1657163687');
INSERT INTO `ls_system_menu_copy` VALUES ('48', '27', 'A', '新增岗位', '', '1', 'dept.jobs/add', '', '', '', '', '0', '1', '0', '1657163778', '1657163778');
INSERT INTO `ls_system_menu_copy` VALUES ('49', '27', 'A', '编辑岗位', '', '1', 'dept.jobs/edit', '', '', '', '', '0', '1', '0', '1657163800', '1657163800');
INSERT INTO `ls_system_menu_copy` VALUES ('50', '27', 'A', '删除岗位', '', '1', 'dept.jobs/delete', '', '', '', '', '0', '1', '0', '1657163820', '1657163820');
INSERT INTO `ls_system_menu_copy` VALUES ('51', '30', 'A', '保存网站信息', '', '1', 'setting.web.web_setting/setWebsite', '', '', '', '', '0', '1', '0', '1657164469', '1657164469');
INSERT INTO `ls_system_menu_copy` VALUES ('52', '31', 'A', '保存网站备案', '', '1', 'setting.web.web_setting/setCopyright', '', '', '', '', '0', '1', '0', '1657164692', '1657164692');
INSERT INTO `ls_system_menu_copy` VALUES ('53', '32', 'A', '保存政策协议', '', '1', 'setting.web.web_setting/setAgreement', '', '', '', '', '0', '1', '0', '1657164824', '1657164824');
INSERT INTO `ls_system_menu_copy` VALUES ('54', '33', 'A', '设置存储', '', '1', 'setting.storage/setup', '', '', '', '', '0', '1', '0', '1657165303', '1657165303');
INSERT INTO `ls_system_menu_copy` VALUES ('55', '34', 'A', '新增字典类型', '', '1', 'setting.dict.dict_type/add', '', '', '', '', '0', '1', '0', '1657166966', '1657166966');
INSERT INTO `ls_system_menu_copy` VALUES ('56', '34', 'A', '编辑字典类型', '', '1', 'setting.dict.dict_type/edit', '', '', '', '', '0', '1', '0', '1657166997', '1657166997');
INSERT INTO `ls_system_menu_copy` VALUES ('57', '34', 'A', '删除字典类型', '', '1', 'setting.dict.dict_type/delete', '', '', '', '', '0', '1', '0', '1657167038', '1657167038');
INSERT INTO `ls_system_menu_copy` VALUES ('58', '34', 'A', '新增字典数据', '', '1', 'setting.dict.dict_data/add', '', '', '', '', '0', '1', '0', '1657167317', '1657167317');
INSERT INTO `ls_system_menu_copy` VALUES ('59', '34', 'A', '编辑字典数据', '', '1', 'setting.dict.dict_data/edit', '', '', '', '', '0', '1', '0', '1657167371', '1657167371');
INSERT INTO `ls_system_menu_copy` VALUES ('60', '34', 'A', '删除字典数据', '', '1', 'setting.dict.dict_data/delete', '', '', '', '', '0', '1', '0', '1657167397', '1657167397');
INSERT INTO `ls_system_menu_copy` VALUES ('61', '37', 'A', '清除系统缓存', '', '1', 'setting.system.cache/clear', '', '', '', '', '0', '1', '0', '1657173837', '1657173939');
INSERT INTO `ls_system_menu_copy` VALUES ('62', '34', 'A', '字典数据管理', '', '1', 'setting.dict.dict_data/lists', '', '', '', '', '0', '1', '0', '1657174351', '1657174351');
INSERT INTO `ls_system_menu_copy` VALUES ('63', '0', 'M', '素材管理', 'el-icon-Picture', '600', '', 'material', '', '', '', '0', '1', '1', '1657507133', '1660204556');
INSERT INTO `ls_system_menu_copy` VALUES ('64', '63', 'C', '素材中心', 'local-icon-picture-1', '1', '', 'index', 'material/index', '', '', '0', '1', '0', '1657507296', '1658989835');
INSERT INTO `ls_system_menu_copy` VALUES ('81', '0', 'C', '用户管理', 'local-icon-user', '1', 'users/lists', 'users', 'users/index', '', '', '0', '1', '0', '1660186108', '1660187800');
INSERT INTO `ls_system_menu_copy` VALUES ('82', '81', 'A', '添加', '', '1', 'users/add', '', '', '', '', '0', '1', '0', '1660186108', '1660186108');
INSERT INTO `ls_system_menu_copy` VALUES ('83', '81', 'A', '编辑', '', '1', 'users/edit', '', '', '', '', '0', '1', '0', '1660186108', '1660186108');
INSERT INTO `ls_system_menu_copy` VALUES ('84', '81', 'A', '删除', '', '1', 'users/delete', '', '', '', '', '0', '1', '0', '1660186108', '1660186108');
INSERT INTO `ls_system_menu_copy` VALUES ('85', '0', 'C', '转入记录', 'local-icon-aircraft', '1', 'transfer_log/lists', 'transfer_log', 'transfer_log/index', '', '', '0', '1', '0', '1660208029', '1660208054');
INSERT INTO `ls_system_menu_copy` VALUES ('86', '85', 'A', '添加', '', '1', 'transfer_log/add', '', '', '', '', '0', '1', '0', '1660208029', '1660208029');
INSERT INTO `ls_system_menu_copy` VALUES ('87', '85', 'A', '编辑', '', '1', 'transfer_log/edit', '', '', '', '', '0', '1', '0', '1660208029', '1660208029');
INSERT INTO `ls_system_menu_copy` VALUES ('88', '85', 'A', '删除', '', '1', 'transfer_log/delete', '', '', '', '', '0', '1', '0', '1660208029', '1660208029');
INSERT INTO `ls_system_menu_copy` VALUES ('89', '0', 'C', '资金明细', 'local-icon-money', '1', 'money_log/lists', 'money_log', 'money_log/index', '', '', '0', '1', '0', '1660261471', '1660261493');
INSERT INTO `ls_system_menu_copy` VALUES ('90', '89', 'A', '添加', '', '1', 'money_log/add', '', '', '', '', '0', '1', '0', '1660261471', '1660261471');
INSERT INTO `ls_system_menu_copy` VALUES ('91', '89', 'A', '编辑', '', '1', 'money_log/edit', '', '', '', '', '0', '1', '0', '1660261471', '1660261471');
INSERT INTO `ls_system_menu_copy` VALUES ('92', '89', 'A', '删除', '', '1', 'money_log/delete', '', '', '', '', '0', '1', '0', '1660261471', '1660261471');
INSERT INTO `ls_system_menu_copy` VALUES ('93', '0', 'C', '提现记录', 'local-icon-page', '1', 'withdraw/lists', 'withdraw', 'withdraw/index', '', '', '0', '1', '0', '1660319342', '1660320466');
INSERT INTO `ls_system_menu_copy` VALUES ('94', '93', 'A', '添加', '', '1', 'withdraw/add', '', '', '', '', '0', '1', '0', '1660319342', '1660319342');
INSERT INTO `ls_system_menu_copy` VALUES ('95', '93', 'A', '编辑', '', '1', 'withdraw/edit', '', '', '', '', '0', '1', '0', '1660319342', '1660319342');
INSERT INTO `ls_system_menu_copy` VALUES ('96', '93', 'A', '删除', '', '1', 'withdraw/delete', '', '', '', '', '0', '1', '0', '1660319342', '1660319342');

-- ----------------------------
-- Table structure for ls_system_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `ls_system_role_menu`;
CREATE TABLE `ls_system_role_menu` (
  `role_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '角色ID',
  `menu_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '菜单ID',
  PRIMARY KEY (`role_id`,`menu_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='角色菜单关系表';

-- ----------------------------
-- Records of ls_system_role_menu
-- ----------------------------

-- ----------------------------
-- Table structure for ls_transfer_log
-- ----------------------------
DROP TABLE IF EXISTS `ls_transfer_log`;
CREATE TABLE `ls_transfer_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `tx` varchar(255) CHARACTER SET utf8mb4 NOT NULL DEFAULT '' COMMENT '交易hash',
  `symbol` varchar(128) CHARACTER SET utf8mb4 NOT NULL DEFAULT '' COMMENT '币种名称',
  `from_address` varchar(255) CHARACTER SET utf8mb4 NOT NULL DEFAULT '' COMMENT '发送方',
  `to_address` varchar(255) CHARACTER SET utf8mb4 NOT NULL DEFAULT '' COMMENT '接收方',
  `amount` decimal(20,2) NOT NULL DEFAULT '0.00' COMMENT '转入数量',
  `state` tinyint(3) NOT NULL DEFAULT '0' COMMENT '状态',
  `block_time` bigint(20) DEFAULT '0' COMMENT '区块到账时间',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tx` (`tx`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='转入记录表';

-- ----------------------------
-- Records of ls_transfer_log
-- ----------------------------

-- ----------------------------
-- Table structure for ls_users
-- ----------------------------
DROP TABLE IF EXISTS `ls_users`;
CREATE TABLE `ls_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户ID{text}',
  `address` varchar(255) NOT NULL DEFAULT '' COMMENT '钱包地址',
  `fid` int(11) NOT NULL DEFAULT '0' COMMENT '上级ID{text}',
  `amount1` decimal(16,4) NOT NULL DEFAULT '0.0000' COMMENT '代币余额(快照)',
  `amount2` decimal(16,4) NOT NULL DEFAULT '0.0000' COMMENT 'BNB分红收益',
  `count` int(11) NOT NULL DEFAULT '0' COMMENT '分红次数',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `address` (`address`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- ----------------------------
-- Records of ls_users
-- ----------------------------
INSERT INTO `ls_users` VALUES ('1', '0xd0a41c8d5a87d50d64c4bd0cfa8ebb4cff022d9a', '0', '0.0000', '0.0000', '0', '1660485667', '1660485667');
INSERT INTO `ls_users` VALUES ('2', '0xbda141ce6c4d4765974dfb0b3b97f77cfe889b33', '1', '0.0000', '0.0000', '0', '1660485697', '1660485697');
INSERT INTO `ls_users` VALUES ('3', '0x1ea111c6d3b8ad16e39ce78ecd4a7fe5c6d4261c', '0', '111.0000', '10000.0000', '0', '1660486952', '1660493828');

-- ----------------------------
-- Table structure for ls_withdraw
-- ----------------------------
DROP TABLE IF EXISTS `ls_withdraw`;
CREATE TABLE `ls_withdraw` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tx` varchar(255) NOT NULL DEFAULT '' COMMENT '交易hash',
  `address` varchar(255) NOT NULL DEFAULT '' COMMENT '用户钱包',
  `amount` decimal(16,2) NOT NULL DEFAULT '0.00' COMMENT '提现数量',
  `status` tinyint(3) NOT NULL DEFAULT '0' COMMENT '提现状态',
  `cl_time` int(11) DEFAULT NULL COMMENT '处理时间',
  `remark` text COMMENT '备注',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `address` (`address`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COMMENT='提现申请表';

-- ----------------------------
-- Records of ls_withdraw
-- ----------------------------
INSERT INTO `ls_withdraw` VALUES ('1', '', '0x1ea111c6d3b8ad16e39ce78ecd4a7fe5c6d4261c', '11.00', '1', '1660494077', '', '1660493841', '1660494077');
INSERT INTO `ls_withdraw` VALUES ('3', '', '0x1ea111c6d3b8ad16e39ce78ecd4a7fe5c6d4261c', '1000.00', '1', '1660494740', '', '1660494403', '1660494740');
