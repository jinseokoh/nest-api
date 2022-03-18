export default () => ({
  environment: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DATABASE_HOST,
    part: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  },
});
