module.exports = {
  development: {
    database: {
      username: process.env.NODE_ORACLE_EAM_DEVELOPMENT_DATABASE_USERNAME || 'apps',
      password: process.env.NODE_ORACLE_EAM_DEVELOPMENT_DATABASE_PASSWORD || 'apps',
      hostname: process.env.NODE_ORACLE_EAM_DEVELOPMENT_DATABASE_HOSTNAME || '129.154.74.184',
      port: process.env.NODE_ORACLE_EAM_DEVELOPMENT_DATABASE_PORT || '1521',
      serviceName: process.env.NODE_ORACLE_EAM_DEVELOPMENT_DATABASE_SERVICE_NAME || 'EBSDB'
    }
  },
  production: {
    database: {
      username: process.env.NODE_ORACLE_EAM_PRODUCTION_DATABASE_USERNAME || '',
      password: process.env.NODE_ORACLE_EAM_PRODUCTION_DATABASE_PASSWORD || '',
      hostname: process.env.NODE_ORACLE_EAM_PRODUCTION_DATABASE_HOSTNAME || '',
      port: process.env.NODE_ORACLE_EAM_PRODUCTION_DATABASE_PORT || '',
      serviceName: process.env.NODE_ORACLE_EAM_PRODUCTION_DATABASE_SERVICE_NAME || ''
    }
  }
}
