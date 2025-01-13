
/********************************************************************************
	하나 이상의 테이블 생성 및 연결, 조회
    - 생성 : create table
    - 연결 : foreign key(참고키) 제약 추가
    - select(조회) : join, subquery
    ** 데이터베이스의 테이블 설계과정 : 데이터베이스 모델링
    -> 데이터 정규화 -> ERD(Entity Relationship Diagram)
********************************************************************************/

-- ERD : Database > Reverse Engeering -- 만들어진 데이터베이스 거꾸로 그림으로 봄
-- 정규화 : 데이터베이스 저장 효율성을 높이기 위한 방식 - 데이터 중복배제, 테이블 분리...
-- 반정규화 : 분리된 테이블을 하나로 합치는 방식

-- [KK전자의 인사관리시스템 : 사원테이블 생성 - 정규화 ✖️]
-- 사원 테이블의 데이터 : 
-- 사원아이디(kid, 기본키), 사원명, 주소, 입사일, 연봉, 부서번호, 부서명, 부서위치  
-- 사원 테이블 : 부서관련 중복 데이터 발생
show tables;

-- [KK전자의 인사관리시스템 : 사원테이블 생성 - 정규화 ⭕]
-- "(kk_department)"	
create table kk_department(
	dept_id		char(3)		primary key	,
    dept_name	varchar(10),
    loc			varchar(30)		not null
);

insert into kk_department(dept_id, dept_name, loc)
	values('sys', '정보시스템', '서울시 서초구'),
		  ('hrd', '인사관리', '서울시 종로구'),
          ('acc', '회계관리', '서울시 강남구');

show tables;
desc kk_department;
select * from kk_department;
-- 사원테이블 	** 사원은 반드시 하나이상의 부서에 속해야 한다!!
-- kid		kname		address		hire_date		salary		dept_id
-- 1		홍길동		서울			2025-01-06		sys			(참조키)
-- 2		스미스		뉴욕			2025-01-06		hrd			(참조키)
-- 3		홍길동		서울			2025-01-06		acc			(참조키)

create table kk_employee (
	kid 		int		primary key 	auto_increment,
    kname		varchar(10) 	not null,
    address		varchar(20)		not null,
    hire_date	date,
    salary		int,
    dept_id		char(3),
    constraint	fk_kk_employee	foreign key(dept_id)
		references kk_department(dept_id)
);
show tables;
desc kk_employee;
select * from information_schema.table_constraints
	where table_name like 'kk%';
    
    insert into kk_employee(kname, address, hire_date, salary, dept_id)
		values ('홍길동', '서울', curdate(), '5000', 'sys');
	select * from kk_employee;


-- Error Code: 1452. Cannot add or update a child row: 
-- a foreign key constraint fails (`hrdb2019`.`kk_employee`, CONSTRAINT `fk_kk_employee` FOREIGN KEY (`dept_id`) REFERENCES `kk_department` (`dept_id`))
-- insert into kk_employee (kname, address, hire_date, salary, dept_id)
--     values('스미스', '뉴욕', curdate(), 5000, 'hr');
    insert into kk_employee(kname, address, hire_date, salary, dept_id)
		values('스미스', '뉴욕', curdate(), 5000, 'hrd');

-- solution : 참조하는 kk_department 테이블의 dept_id 확인

-- 부서가 많아지면 리액트 select 폼으로 받게 하고 함수로 넘겨줌

/*
	[학사관리 시스템 설계]
    1. 과목(subject) 테이블은
		컬럼명 : sid(과목아이디), sname(과목명), sdate(등록일: 년월일 시분초)
        sid는 기본키, 자동으로 생성한다.
	2. 학생(student) 테이블은 반드시 하나 이상의 과목을 수강해야 한다.
		컬럼 : stid(학생아이디) 기본키, 자동생성
			  sname(학생명) 널허용x
              gender(성별) 문자1자 널허용x
              sid(과목아이디)
              sdate(등록일) 년월일 시분초
	3. 교수(professor) 테이블은 반드시 하나 이상의 과목을 강의해야 한다.
	컬럼 : pid(학생아이디) 기본키, 자동생성
		  name(학생명) 널허용x
		  sid(과목아이디)
		  pdate(등록일) 년월일 시분초
*/
-- subject
create table subject (
	sid			int 			primary key		auto_increment,
    sname		varchar(20)		not null,
    sdate		datetime
);
desc subject;

-- student
create table student (
	stid			int 			primary key		auto_increment,
    sname		varchar(20)		not null,
    gender		char(1)			not null,
    sid			int,
    sdate		datetime
);
desc student;

-- professor
create table professor (
	pid			int 			primary key		auto_increment,
    name		varchar(20)		not null,
    sid			int,
    pdate		datetime
);
desc professor;

-- subject 데이터 추가
insert into subject(sname, sdate)
	values('html', now()),
		  ('javascript', now()),
          ('mysql', now());

select * from subject;

-- student 데이터 추가
insert into student(sname, gender, sid, sdate)
	values('홍길동', 'm', '1', sysdate()),
		  ('차차차', 'f', '2', sysdate()),
          ('동동동', 'f', '2', sysdate()),
          ('삼삼삼', 'm', '3', sysdate());
select * from student;

-- professor 데이터 추가
insert into professor(name, sid, pdate)
	values('스미스', '1', now()),
		  ('길명수', '2', now()),
          ('지소연', '3', now());
select * from professor;

-- html 과목의 정보를 조회


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	조인(join) : 두 개 이상의 테이블 연동
    - 두 개이상의 테이블을 조합하여 집합
    - cross(catesian) join (합집합) 
	  : 두 개의 테이블이 독립적으로 생성된 경우, join 연결고리 x
      : professor & student -> professor * student
	- inner join (교집합)
	  : 두 개의 테이블이 join 연결고리를 통해 연동
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

-- cross join (합집합) 형식
-- select [컬럼리스트] form [테이블명 [테이블 별칭], 테이블명 [테이블 별칭] ...]
-- where 

-- html 과목을 수강하는 모든 학생의 수
select * 
	from student, subject;

-- professor, student, department 조인하여 모든 데이터 조회
select count(*) from professor; -- 3
select count(*) from student;	-- 4
select count(*) from department; -- 7

select count(*) 
	from student, subject, department;	-- 112

-- ansi sql(sequl :: ms-sql)
select * 
	from professor cross join student
				   cross join department;


-- inner join (교집합) 형식
-- select [컬럼리스트] form [테이블명1 [테이블 별칭], 테이블명2 [테이블 별칭] ...]
-- where [테이블1.조인컬럼 = 테이블2.조인컬럼]
-- and [조건절 ~~]


-- html 과목을 강의하는 모든 교수를 조회
select * 
	from professor p, subject s
    where p.sid = s.sid
    and sname = 'html';

-- 이순신 교수가 강의하는 가목의 과목아이디, 과목명, 교수아이디, 교수명, 교수등록일을 조회alter

    
-- html 과목을 강의하는 모든 학생를 조회

-- html 과목을 수강하는 모든 학생과 강의하는 교수를 모두 조회

        
-- employee, department, vacation, unit 테이블들의 erd 참조 
-- 모든 사원들의 사원번호, 사원명, 성별, 부서명, 입사일 조회
-- 사원번호 기준으로 오름차순


-- 마케팅 부서에 속해있는 사원들의 사원번호, 사원명, 입사일, 급여 조회

    
-- 인사과에 속한 사원들 중에 휴가를 사용한 사원들의 리스트를 모두 조회
