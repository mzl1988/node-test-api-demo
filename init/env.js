//
// 配置環境變量
//

process.env.TZ = 'PRC'; // 修改时区, 可以切换到任意时区
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development';
process.env.NODE_CONFIG_DIR = __base + '/config';
