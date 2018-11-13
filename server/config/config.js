/** Configuration file */
module.exports = {
    databaseURL: process.env.DATABASE_URL || 'postgres://postgres:root@localhost:5432/ammovarejo',
    herokuURI: process.env.herokuURL || 'postgres://ykpwhwxaezceur:fc18473b409e54d32f18ec717d26bb464549aa66344082653860183e667300cd@ec2-23-23-101-25.compute-1.amazonaws.com:5432/d2tuft25j2tlgl'
}