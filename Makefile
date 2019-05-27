db_sync:
	pg_dump -h keystore.chnmx9dyn2i5.ap-northeast-2.rds.amazonaws.com -U codechain -f dump.sql codechain-keystore
	psql -U codechain -d codechain-keystore -f dump.sql
	rm dump.sql
