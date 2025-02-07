/**
	SHOPPY 사이트 데이터 베이스
*/
-- shoppy_member 테이블 생성
use hrdb2019;
select database();
show tables;
-- shoppy로 시작하는 모든 테이블 조회
select * from information_schema.tables
	where table_name like 'shoppy%';
    
create table shoppy_member(
	id				varchar(30)		primary key,
    pwd				varchar(50)		not null,
    name			varchar(10)		not null,  
    phone			char(13)		not null,
    emailname		varchar(20)		not null,
    emaildomain		varchar(20)		not null,
    zipcode			char(5),
	address			varchar(80),
	mdate			datetime		
);
desc shoppy_member;
select * from shoppy_member;

-- 'test19' 중복체크 : 결과를 count 함수로 반환 
select count(id) as result from shoppy_member where id = 'test1';
-- {result: 0}

TRUNCATE TABLE shoppy_member;

-- login
select count(*) as result_rows from shoppy_member
	where id = 'test3' and pwd = '3333';
    
-- shoppy_product
create table shoppy_product (
	pid				int	 			primary key		auto_increment,
	pname 			varchar(50)		not null,
	price			int, 
	description 	varchar(200), 
	upload_file		varchar(100),
	source_file		varchar(100),
	pdate			datetime
);
    
desc shoppy_product;
select * from shoppy_product;

                select pid, 
                       pname as name,
                       price,
                       description as info,
                       concat('http://localhost:9000/', upload_file) as image,
                       source_file,
                       pdate
                from shoppy_product;

drop TABLE shoppy_product;