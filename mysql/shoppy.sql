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
use hrdb2019;
drop table shoppy_product;
create table shoppy_product (
	pid				int	 			primary key		auto_increment,
	pname 			varchar(50)		not null,
	price			int, 
	description 	varchar(200), 
	upload_file		json,
	source_file		json,
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

set sql_safe_updates = 0; -- 해제: 0, 설정 : 1
delete from shoppy_product;
commit; -- delete사용시 commit
select * from shoppy_product;

desc shoppy_product;

select pid, 
	   pname as name,
	   price,
	   description as info,
	   upload_file,
	   source_file,
	   pdate,
	   concat('http://localhost:9000/', upload_file->> '$[0]') as image,
	   json_array(
	   concat('http://localhost:9000/', upload_file->> '$[0]'),
	   concat('http://localhost:9000/', upload_file->> '$[1]'),
	   concat('http://localhost:9000/', upload_file->> '$[2]')
	   ) as imgList,
	   json_arrayagg(
		 concat('http://localhost:9000/', jt.filename)	  -- jt 제이슨 테이블
	   ) as detailImgList -- 리턴하는 데이터 받아서 사용 
-- json_table( 테이블.컬럼명, 매핑데이터 columns( 컬럼 생성 후 리턴 )) as jt;
from shoppy_product, 
	 json_table( shoppy_product.upload_file, '$[*]' columns( filename varchar(100) path '$')) as jt
where pid = 8
group by pid;
                     
 select upload_file from shoppy_product;
                     
-- shoppy_product.upload_files을 가져와서 모든 데이터를 돌려주는 작업
-- ["http://localhost:9000/upload_files\\1739169798009-703513730-3.jpg", "http://localhost:9000/upload_files\\1739169798015-313882818-2.jpg", "http://localhost:9000/upload_files\\1739169798020-171111323-1.jpg"]

-- http://localhost:9000/["upload_files\\1739163156804-157798082-1.webp",
-- "upload_files\\1739163156805-796028777-2.webp", "upload_files\\1739163156805-549478583-3.webp",
-- "upload_files\\1739163156823-246317085-4.webp", "upload_files\\1739163156823-3299201-5.webp", 
-- "upload_files\\1739163156825-78488609-6.webp", "upload_files\\1739163156825-838343949-7.webp"]

--
use hrdb2019;
select database();
select * from shoppy_product;
desc shoppy_product;

select pid,
	   pname, 
       price,
       description,
       upload_file as uploadFile,
       source_file as sourceFile,
       pdate,
       concat('http://localhost:9000/', upload_file->>'$[0]') as image	-- http://localhost:9000/upload_files\1739169870101-105596468-3.jpg
 from shoppy_product
 where pid = 8;
 
-- 
use hrdb2019;
select database();
select * from shoppy_product;
 
-- pid, pname, price, description, upload_file 0번지 이미지
select pid,
	pname,
	price,
	description,
	concat('http://localhost:9000/', upload_file ->> '$[0]') as upload_file
from shoppy_product
where pid in (8, 9, 11);

-- 
show tables;
select * from shoppy_member;
select * from shoppy_product;
-- 어떤 회원(pk:id)이 어떤 상품(pk:pid)을 장바구니에 넣었는지 명확, 간단하게!!

-- shoppy_cart
-- 컬럼리스트 : cid(pk), id(shoppy_member: fk(참조키)), pid(shoppy_product:fk(참조키)), size, qty, cdate(장바구니 등록날짜)
desc shoppy_member;
desc shoppy_product;

-- 참조키는 보통 아래쪽에 배치
create table shoppy_cart(
	cid		int				primary key		auto_increment,
    size	varchar(10)		not null,
    qty 	int				not null,
    cdate	datetime,
    id		varchar(30)		not null,
    pid		int 			not null,
    constraint fk_id_shoppy_member_id foreign key(id)
					references shoppy_member(id),
	constraint fk_pid_product_pid foreign key(pid)
					references shoppy_product(pid)
)
-- constraint 제약명 foreign key(카트에서 정한 컬림명)
-- 				   reference (참조하는 테이블과 컬럼명)
