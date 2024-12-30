/*
	* 데이터베이스의 테이블은 행과 열을 이용하여 데이터를 저장하는 시스템이다.

	SQL(Structured Query Language): 데이터 베이스에서 사용하는 구조화된 언어 
	--> DBMS(DataBase Management System)에 접속하여 CRUD 작업을 수행하는 언어
	
    (1) DDL(Data Definition Language) : 데이터 정의어
		- 데이터를 저장하기 위한 공간을 생성하고 관리하는 논리적인 언어
		- CREATE, ALTER, TRUNCATE, DROP
	(2) DML(Data Manipulation Language) : 데이터 조작어
		- 데이터를 CRUD 작업을 수행하는 언어
        - insert(C), select(R), update(U), delete(D)
	(3) DCL(Data Control Language) : 데이터 제어어
		- 데이터에 접근하는 권한을 제어하는 언어
        - GRANT(부여), DEVOKE(해제)
	(4) DTL(Data Transaction Language) : 트랜잭션 제어어
		- 데이터베이스 작업 처리 단위인 트랜잭션을 관리하는 언어
        - commit(완료), rollback(취소), savepoint(작업구간별 저장) ..
*/

/**
	데이터베이스 선택 및 조회
    show databases;			-- 모든 데이터베이스 목록 출력
    use [선택한 데이터베이스명]; -- 사용할 데이터베이스 선택
    select database()  		-- 데이터베이스 선택
    show tables;			-- 데이터베이스에 저장된 테이블 전체 조회
*/
show databases;
use hrdb2019;
select database();
show tables;

/**
	테이블 구조 확인 : DESC(DESCRIBE)
    형식 - DESC [테이블명];
*/
SHOW TABLES;
DESC DEPARTMENT;
DESC EMPLOYEE;
DESC UNIT;
DESC VACATION;

/**
	테이블 조회(단순) : SELECT
    형식 - SELECT [컬럼리스트] FROM [테이블명];
		  SELECT [*(전체컬럼리스트)] FROM [테이블명];
*/
SHOW TABLES;
DESC EMPLOYEE;
SELECT EMP_ID, EMP_NAME FROM EMPLOYEE;
SELECT * FROM EMPLOYEE;
SELECT * FROM DEPARTMENT;

SHOW TABLES;
DESC EMPLOYEE;
-- 사원테이블에서 사원아이디, 사원명, 성별, 입사일 조회
SELECT EMP_ID, EMP_NAME, GENDER, HIRE_DATE
FROM EMPLOYEE;

-- 사원테이블에서 사원명, 부서명, 입사일, 폰번호, 연봉 조회
DESC EMPLOYEE;
SELECT EMP_NAME, DEPT_ID, HIRE_DATE, PHONE, SALARY
	FROM EMPLOYEE;

-- 부서테이블의 모든 컬럼을 조회
SELECT * FROM DEPARTMENT;

-- [조회한 컬럼명을 ALIAS(별칭)으로 출력]
-- 형식 : SELECT [컬럼명 AS '별칭', 컬럼명 AS '별칭'...] FROM [테이블명];
-- 사원테이블에서 아이디, 성명, 입사일, 부서명, 연봉 이름으로 컬럼을 조회
SELECT 
	EMP_ID AS '아이디',
    EMP_NAME AS '성명',
    HIRE_DATE AS '입사일',
    DEPT_ID AS '부서명',
    SALARY AS '연봉'
	FROM EMPLOYEE;
    
SELECT 
	EMP_ID '사원 아이디',
    EMP_NAME 성명,
    HIRE_DATE 입사일,
    DEPT_ID 부서명,
    SALARY 연봉
	FROM EMPLOYEE;
    
-- 사원테이블에서 사원명, 부서, 연봉을 조회
-- 별칭으로 컬럼명을 수정
-- 기존 컬럼을 이용하여 가상컬럼 생성 - 연봉 10% 인센티브 컬럼, 물리적x
-- 타입이 숫자인 컬럼은 수식 연산이 가능함
DESC EMPLOYEE;
SELECT EMP_NAME 사원명, DEPT_ID 부서, SALARY 연봉, SALARY*0.1 인센티브
	FROM EMPLOYEE;

-- 현재의 날짜를 조회, 컬럼명을 'DATE'로 변경
SELECT CURDATE();
SELECT CURDATE() AS 'DATE';

/**
	테이블 조회(단순) : SELECT ~ FROM ~ WHERE 
    - 조건절을 추가하여 다양한 쿼리를 실행
    형식 - SELECT [컬럼리스트, *] 
			FROM [테이블명]
            WHERE [조건절];
*/
-- 사원테이블에서 SYS 부서에 근무하는 모든 사원을 조회
SELECT * FROM EMPLOYEE
	WHERE DEPT_ID = 'SYS';

-- 사원 테이블에서 사원명이 '정주고'인 사원을 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_NAME = '정주고';
    
-- 사원테이블에서 사원아이디가 S0011 인 사원의 정보를 모두 조회
SELECT *
	FROM EMPLOYEE
    WHERE EMP_ID = 'S0011';

-- 사원테이블에서 연봉이 5800인 사원의 모든 정보 조회
SELECT *
	FROM EMPLOYEE
	WHERE SALARY = 5800;
    
-- 사원테이블에서 여성사원들의 아이디, 이름, 입사일, 이메일 정보를 조회
SELECT	EMP_ID, EMP_NAME, HIRE_DATE, EMAIL
	FROM EMPLOYEE
    WHERE GENDER = 'F';

-- 사원테이블에서 부서명이 SYS인 사원들의 아이디, 사원명, 입사일을 조회
-- 출력되는 아이디 컬럼명을 '사원 번호' 별칭 사용   
SELECT EMP_ID '사원 번호', EMP_NAME, HIRE_DATE
	FROM EMPLOYEE
    WHERE DEPT_ID = 'SYS';
    
-- WHERE절 조건에 별칭으로 조회가 가능할까요???
SELECT EMP_ID '사원 번호', EMP_NAME, HIRE_DATE, DEPT_ID '부서 번호'
	FROM EMPLOYEE
    WHERE DEPT_ID = 'SYS';
    -- WHERE '부서 번호' = 'SYS'; 
    
-- 사원테이블에서 마케팅 부서의 모든 사원 정보를 조회
SELECT	*
	FROM EMPLOYEE
		WHERE DEPT_ID = 'MKT';

-- 사원테이블에서 입사일이 2014년 8월 1일인 모든 사원 조회
SELECT *
	FROM EMPLOYEE
		WHERE HIRE_DATE = '2014-08-01';  -- DATE 타입은 표현은 문자처럼, 처리는 숫자 

-- 연봉이 5000인 사원 정보 조회
SELECT *
	FROM EMPLOYEE
		WHERE SALARY = 5000;


-- NULL 타입?? :: 미지수
-- 숫자 컬럼에서는 가장 큰 숫자로 인식, 문자 컬럼에서는 작은 문자로 인식
-- NULL은 논리적인 의미를 가지므로 IS 키워드를 비교 연산을 수행

-- 사원테이블에서 ENG_NAME이 NULL인 모든 사원의 정보 조회
SELECT *
	FROM EMPLOYEE 
    WHERE ENG_NAME IS NULL;
    -- WHERE ENG_NAME = NULL;

-- 연봉이 정해지지 않은 모든 사원 조회       
SELECT *
	FROM EMPLOYEE
    WHERE SALARY IS NULL;

-- ifnull() : NULL 값을 다른 값은 대체해주는 함수
-- 형식 : ifnull(null포함 컬럼명, 대체할 값);
-- 컬럼리스트에서 호출
SELECT EMP_NAME, SALARY, IFNULL(SALARY, 0) AS SALARY2
	FROM EMPLOYEE;
    
-- ENG_NAME이 NULL인 사원들은 'SMITH' 이름으로 변경 후 조회
-- 출력되는 컬럼명은 ENG_NAME으로 변경
SELECT 
		EMP_ID,
        EMP_NAME,
        IFNULL(ENG_NAME, 'SMITH') AS 'ENG_NAME',
        HIRE_DATE
	FROM EMPLOYEE;

-- 모든 사원의 아이디, 사원명, 입사일, 퇴사일을 조회
-- 현재 근무중인 사원인 퇴사일에 현재의 날짜를 출력해주세요
SELECT
		EMP_ID,
        EMP_NAME,
        HIRE_DATE,
        IFNULL(RETIRE_DATE, CURDATE()) AS RETIRE_DATE
	FROM EMPLOYEE;


/*
	distinct : 데이터의 중복 배제, 중복된 데이터 하나만 출력
    형식 - select [distinct 컬럼리스트(중복데이터포함)] 
			from [테이블명]
            where [조건절];
*/
    
-- 사원테이블에서 부서 컬럼을 조회
select distinct emp_id, dept_id from employee;

/*
	order by : 데이터 정렬(오름차순, 내림차순)
    형식 - select ~
			from ~
			where ~
            order by 칼럼리스트 [asc(생략가능)/desc];
*/
-- 사원아이디, 사원명, 입사일, 연봉을 조회
-- 사원아이디 기준 오름차순으로 정렬
select emp_id, emp_name, hire_date, salary from employee order by emp_id desc;

-- 사원아이디 기준 오름차순, 입사일 기준 내림차순
select emp_id, emp_name, hire_date, salary from employee order by emp_id asc, hire_date desc;

-- 금여를 기준으로 오름차순 정렬 후 조회
select * from employee order by salary desc;

-- eng_name이 정해지지 않은 사원들을 최근 입사한 순서대로 조회
select * from employee where eng_name is null order by hire_date asc;

-- 퇴직한 사람들을 급여가 높은 순으로 조회
select *
	from employee
	where retire_date is not null
    order by salary desc;
    
-- 정보시스템 부서의 사원들 중 금여가 높은 순으로 조회
select * from employee where dept_id = 'sys' order by salary desc;

-- 정보시스템 부서의 사원들 중 최근 입사일 기준, 급여가 낮은 순으로 조회
select * from employee where dept_id = 'sys' order by hire_date desc, salary asc;

/*
	특정 범위의 데이터 검색 : where [조건절 + 비교연산자]
    형식 - select [컬럼리스트]
			from [테이블명]
            where 컬럼명 [비교연산자 조건절]
*/
-- 사원중에서 연봉이 5000 이상인 사원들을 조회
select * from employee where salary > '5000';

-- 입사일이 '2016년 1월 1일' 이전에 입사한 사원들 조회
-- DATE 타입은 표현은 문자처럼, 처리방식은 숫자처럼
select * from employee where hire_date <= '2016-01-01';

-- 입사일이 2015년 1월 1일 이후이고, 급여가 6000 이상인 사원들을 조회
-- and(~이고) : 두 개의 조건이 모두 만족한 데이터만 조회
select * from employee where hire_date >= '2015-01-01' and salary >= '6000';

-- 입사일이 2015년 1월 1일 이후이거나 또는, 급여가 6000 이상인 사원들을 조회
-- or(~또는) : 두 개의 조건 중 하나만 만족해도 데이터 조회
select * from employee where hire_date >= '2015-01-01' or salary >= '6000';

-- 입사일이 2015년 1월 1일 부터 2017년 12월 31일 사이에 입사한 사원들을 모두 조회
select * from employee where hire_date >= '2015-01-01' and hire_date <= '2017-12-31';

-- 연봉 구간이 5000부터 7000 사이의 사원들을 모두 조회
select * from employee where salary >= '5000' and salary <= '7000';
/*
	between ~ and : 특정 구간 조회시 사용
	형식 - select [컬럼리스트]
			from [테이블명]
            where 컬럼명 between [시작구간] and [종료구간]
*/

-- 2015년 입사자들 조회
-- (2016-01-01 ~ 2016-12-31)
select * from employee where hire_date between '2015-01-01' and '2016-12-31';

-- 사원아이디가 s0001, s0002, s0020 인 사원의 모든 정보를 조회
select * from employee where emp_id = 's0001' or  emp_id = 's0002' or   emp_id = 's0020';

-- 부서 아이디가 MKT, GEN, HRD 인 부서에 속한 모든 사원을 조회
select * from employee where dept_id = 'MKT' or  dept_id = 'GEN' or   dept_id = 'HRD';

/*
	in 연산자 : 한 컬럼에 추가되는 or 연산식을 대체하는 in 연산자
	형식 - select [컬럼리스트]
			from [테이블명]
            where 컬럼명 in (조건1, 조건2, 조건3 ...);
*/
-- 사원아이디가 s0001, s0002, s0020 인 사원의 모든 정보를 조회
select * from employee where emp_id in ('s0001', 's0002','s0020');

-- 부서 아이디가 MKT, GEN, HRD 인 부서에 속한 모든 사원을 조회
select * from employee where dept_id in ('MKT', 'GEN','HRD');

/*
	와일드 카드 문자 : 특정 문자열 검색
    종류 : %(전체), _(한문자)
    사용법 : like 연산자와 함께 조건식을 추가하여 사용됨
	형식 - select [컬럼리스트]
			from [테이블명]
            where 컬럼명 [와일드 카드 문자를 이용한 특정문자열 검색 조건];
*/
-- 영어 이름이 'f'로 시작하는 모든 사원들을 조회
select * from employee where eng_name like 'f%';

-- '한'씨 성을 가진 모든 사원들을 조회
select * from employee where emp_name like '한%';

-- 이메일 주소 2번째 자리에 'a'가 들어가는 모든 사원을 조회
select * from employee where email like '_a%';

-- 이메일 주소 4자리인 모든 사원을 조회
select * from employee where email like '____@%';

-- 이름에 '삼'이 들어가는 모든 사원을 조회
select * from employee where emp_name like '%삼%';


/****************************************************************************
		내장함수(Built-in) : 숫자, 문자, 날짜 함수
        - 함수 테스트를 위한 테이블 dual
        - select [함수 실행] from dual;
****************************************************************************/
-- 1. 숫자 함수 : abs(), rand(), truc()...
-- (1) abs 함수 : 절대값 표현 함수
select 100, -100, abs(100), abs(-100)
	from dual;
    
-- (2) floor 함수 : 소수점을 버리는(삭제) 함수
-- 	   trunc(truncate) : 소수점을 삭제하는 함수 - truncate(데이터, 자릿수)
-- 		ㄴ이전 버전에서는 사용 가능	
select 123.456, floor(123.456) from dual;    
select 123.456, truncate(123.456, 0) as '소수점0', truncate(123.456, 2) as '소수점2' from dual;   

-- (3) rand 함수 : 임의의 수를 생성
select rand(),
	   rand() * 1000,
	   rand() * 100000
 from dual;   
 
 -- 정수만 출력하는 쿼리 실행
 select floor(rand()) as 'rand1',
	    truncate((rand() * 1000),0) as 'rand2',
	    truncate((rand() * 100000),0) as 'rand3',
        truncate((rand() * 100000),2) as 'rand4'
 from dual;   
 
 -- (4) mod 함수 : 모듈러 연산을 실행하는 함수 - mod(숫자데이터, 연산숫자)
 select mod(100,2) 짝수, mod(101,2) 홀수 from dual;
 
 -- 1~3 자리의 정수를 생성하고, 생성한 정수를 2로 나누는 모듈러 함수를 실행하는 쿼리를 완성해주세요
 select mod(truncate((rand()*1000),0),2) 모듈러;
 
 -- 사원테이블에서 사원아이디, 사원명, 부서아이디, 입사일, 연봉, 인센티브(연봉 20%) 를 조회
 -- 인센티브의 소수점 생략
 -- 연봉협상이 아직 진행되지 않은 사원은 모두 0으로 출력, 인센티브 포함
 -- 5000 미만의 사원들 정보만 출력
   select 
   emp_id,
   emp_name,
   dept_id,
   hire_date, 
   ifnull(salary, '0') as '연봉',
   ifnull(truncate(salary*0.2, 0),0) as '인센티브' 
   from employee 
   -- where salary between 0 and 4999;  가장 마지막에 보여줄 때 들어가는 함수
   where salary < 5000 or salary is null; -- null 값으로 가져와야함
 
 -- 2. 문자 함수 : concat(), substring() ...
 -- (1) concat(문자열, 문자열 ...) : 문자열 결합
 select concat('My','SQL','-84') 'name' from dual;
 
 -- 사원테이블의 사원명과 영어이름을 결합하여 새로운 컬럼을 생성하고 컬럼명을 test_name으로 실행
 -- 예시) 홍길동/hong
 -- 영어이름이 정해지지 않은 사원은 빈문자열로 치환해서 실행
 select emp_name,
		eng_name,
		concat(emp_name, '/', ifnull(eng_name,'')) as test_name
 from employee;
 
-- 사원테이블에서 사원아이디와 1~5자리 사이의 임의의 정수를 결합하여 사원번호라는 새로운 컬럼을 생성하고 조회
-- 사원아이디, 사원번호, 사원명, 입사일, 급여, 퇴사일 컬럼리스트를 조회
-- 현재 근무중인 사원은 현재 날짜를 출력
select emp_id,
	   concat(emp_id, '-', truncate(rand()*100000, 0))as '사원 번호',
	   dept_id,
       emp_name, 
       hire_date, 
       salary, 
       ifnull(retire_date,curdate()) as retire_date,
	   ifnull(retire_date,now()) as now
   from employee;
   
-- (2) substring(문자열, 위치, 추출자릿수) : 문자열 추출 함수
select substring('대한민국 홍길동 만세 1234!!', 1, 4) 대한민국,
	   substring('대한민국 홍길동 만세 1234!!', 6, 3) 홍길동,
	   substring('대한민국 홍길동 만세 1234!!', 10, 2) 만세,
	   substring('대한민국 홍길동 만세 1234!!', 17, 2) '!!'
from dual;

-- 사원테이블에서 사원아이디, 사원명, 입사년도, 입사월, 입사일, 급여를 조회
select emp_id,
	   emp_name,
       hire_date,
       substring(hire_date, 1,4) '입사년도',
       substring(hire_date, 6,2) '입사월',
       substring(hire_date, 9,4) '입사일',
       salary
	from employee;
    
-- 2015년도 입사한 모든 사원들 조회
select * from employee where substring(hire_date,1,4) = '2015';

-- 2018년도에 정보시스템 부서에 입사한 모든 사원들을 조회
select * from employee where dept_id = 'sys' and substring(hire_date, 1, 4) = '2018';

-- (3) left(문자열, 추출숫자), right(문자열, 추출숫자)
select left('대한민국 홍길동 만세 1234!!', 4) 대한민국,
	   right('대한민국 홍길동 만세 1234!!', 2) '!!'
	from dual;
    
-- 2015년도에 입사한 모든 사원들 조회
select *
	from employee
    where left(hire_date, 4) = '2015';
    
-- 사원들의 폰번호 마지막 4자리를 조회
-- 사원명, 부서아이디, 입사년도, 폰번호(마지막 4자리) 조회
select emp_name, dept_id , hire_date, right(phone,4) phone from employee; 

-- (4) upper(대문자), lower(소문자) // mysql은 대소문자 구분 안해서 출력에 자유롭다
select * from employee where upper(dept_id) = upper('sys');

-- 사원들의 영어이름과 이메일 주소를 모두 대문자로 조회
select emp_id,
	   emp_name, 
       upper(eng_name) eng_name,
       upper(email) email
	from employee;

-- (5) trim() : 공백 제거(가운데 공백은 지워지지 않음)
select trim('             mySQL 84') as trim1,
	   trim('MYSQL 84                            ') as trim2,
	   trim('              MYSQL     84        ') as trim3
       from dual;

-- (6) formet(문자열 또는 숫자열, 소수점자리) : 문자열의 포맷 수정
-- 숫자를 3자리씩 콤마로 구분하여 출력하는 포맷 생성
select format(123456,0) as format1, format(123456,2) as formet2 from dual;

-- 사원테이블의 사원아이디, 사원명, 입사일, 연봉을 조회
-- 연봉 협상 전인 사원은 0으로 변환 후 조회
-- 연봉은 3자리씩 콤마로 구분하여 출력
select emp_id,
	   emp_name,
       hire_date,
       concat(format(ifnull(salary, 0),0), '만원') as 'salary'
        from employee; 
        
-- 사원아이디, 사원명, 부서아이디, 입사일, 연봉, 보너스(연봉의 0.05%)
-- 연봉과 보너스 칼럼은 3자리 콤마로 구분하여 출력 후 ' 만원' 추가
-- 보너스 컬럼은 소수점 1자리까지 출력
select emp_id,
	   emp_name,
       dept_id,
       hire_date,
       concat(ifnull(format(salary, 0), 0),' 만원') as 'salary',
	   concat(ifnull(truncate(salary*0.05, 1), 0),' 만원') as 'bonus'
	from employee;