import 'dotenv/config';
import FtpDeploy from 'ftp-deploy';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const required = ['FTP_HOST', 'FTP_USER', 'FTP_PASSWORD'];
const missing = required.filter((k) => !process.env[k]);
if (missing.length) {
  console.error(`\n❌  Faltan variables en .env: ${missing.join(', ')}\n`);
  console.error('   Completá el bloque # DonWeb FTP en tu archivo .env y volvé a intentar.\n');
  process.exit(1);
}

const config = {
  user:       process.env.FTP_USER,
  password:   process.env.FTP_PASSWORD,
  host:       process.env.FTP_HOST,
  port:       Number(process.env.FTP_PORT ?? 21),
  localRoot:  path.resolve(__dirname, '../dist'),
  remoteRoot: process.env.FTP_REMOTE_PATH ?? '/public_html',
  include:    ['*', '**/*', '.*', '**/.*'],
  deleteRemote: false,
  forcePasv:  true,
  sftp:       false,
};

console.log(`\n🚀  Subiendo dist/ → ${config.host}${config.remoteRoot}\n`);

const ftpDeploy = new FtpDeploy();

ftpDeploy.on('uploading', ({ filename, transferredFileCount, totalFilesCount }) => {
  const pct = Math.round((transferredFileCount / totalFilesCount) * 100);
  process.stdout.write(`\r   [${pct.toString().padStart(3)}%] ${filename}`.padEnd(70));
});

ftpDeploy
  .deploy(config)
  .then(() => {
    console.log('\n\n✅  Deploy a DonWeb completado.\n');
  })
  .catch((err) => {
    console.error('\n\n❌  Error en FTP deploy:', err.message ?? err);
    process.exit(1);
  });
