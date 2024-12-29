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
desc department;
desc employee;
desc unit;
desc vacation;

/**
	테이블 조회(단순) : SELECT
    형식 - SELECT [컬럼리스트] FROM [테이블명];
		  SELECT [*(전체컬럼리스트)] FROM [테이블명];
*/
select * from employee;

-- 사원테이블에서 사원아이디, 사원명, 성별, 입사일 조회
select emp_id, emp_name, gender, hire_date from employee;

-- 사원테이블에서 사원명, 부서명, 입사일, 폰번호, 연봉 조회
select emp_name, dept_id, hire_date, phone, salary from employee;

-- 부서테이블의 모든 컬럼을 조회
desc department;

-- [조회한 컬럼명을 ALIAS(별칭)으로 출력]
-- 형식 : SELECT [컬럼명 AS '별칭', 컬럼명 AS '별칭'...] FROM [테이블명];
-- 사원테이블에서 아이디, 성명, 입사일, 부서명, 연봉 이름으로 컬럼을 조회
select emp_id, emp_name, hire_date, salary from employee;

    
-- 사원테이블에서 사원명, 부서, 연봉을 조회
-- 별칭으로 컬럼명을 수정
-- 기존 컬럼을 이용하여 가상컬럼 생성 - 연봉 10% 인센티브 컬럼, 물리적x
-- 타입이 숫자인 컬럼은 수식 연산이 가능함
select emp_name, dept_id, salary, salary*0.1 보너스 from employee;


-- 현재의 날짜를 조회, 컬럼명을 'DATE'로 변경
select curdate() date;

/**
	테이블 조회(단순) : SELECT ~ FROM ~ WHERE 
    - 조건절을 추가하여 다양한 쿼리를 실행
    형식 - SELECT [컬럼리스트, *] 
			FROM [테이블명]
            WHERE [조건절];
*/
-- 사원테이블에서 SYS 부서에 근무하는 모든 사원을 조회
select emp_name from employee;

-- 사원 테이블에서 사원명이 '정주고'인 사원을 조회
select * from employee where emp_name = '정주고';

-- 사원테이블에서 사원아이디가 S0011 인 사원의 정보를 모두 조회
select * from employee where emp_id = 'S0011';

-- 사원테이블에서 연봉이 5800인 사원의 모든 정보 조회
select * from employee where salary = '5000';
    
-- 사원테이블에서 여성사원들의 아이디, 이름, 입사일, 이메일 정보를 조회
select emp_id, emp_name, hire_date, email from employee where gender = 'F';

-- 사원테이블에서 부서명이 SYS인 사원들의 아이디, 사원명, 입사일을 조회
-- 출력되는 아이디 컬럼명을 '사원 번호' 별칭 사용   
select emp_id '사원 번호', emp_name, hire_date, dept_id  from employee where dept_id = 'sys';
    
-- WHERE절 조건에 별칭으로 조회가 가능할까요???

-- 사원테이블에서 마케팅 부서의 모든 사원 정보를 조회
select * from employee where dept_id = 'sys';
-- 사원테이블에서 입사일이 2014년 8월 1일인 모든 사원 조회
select * from employee where hire_date = '2014-08-01';


-- 연봉이 5000인 사원 정보 조회
select * from employee where salary = '5000';


-- NULL 타입?? :: 미지수
-- 숫자 컬럼에서는 가장 큰 숫자로 인식, 문자 컬럼에서는 작은 문자로 인식
-- NULL은 논리적인 의미를 가지므로 IS 키워드를 비교 연산을 수행

-- 사원테이블에서 ENG_NAME이 NULL인 모든 사원의 정보 조회
select * from employee where eng_name is null;

-- 연봉이 정해지지 않은 모든 사원 조회    
   select * from employee where salary is null;


-- ifnull() : NULL 값을 다른 값은 대체해주는 함수
-- 형식 : ifnull(null포함 컬럼명, 대체할 값);
-- 컬럼리스트에서 호출

    
-- ENG_NAME이 NULL인 사원들은 'SMITH' 이름으로 변경 후 조회
-- 출력되는 컬럼명은 ENG_NAME으로 변경
   select emp_name, ifnull(eng_name, 'smith') as '영어' from employee;

-- 모든 사원의 아이디, 사원명, 입사일, 퇴사일을 조회
-- 현재 근무중인 사원인 퇴사일에 현재의 날짜를 출력해주세요
   select emp_name, ifnull(retire_date, curdate()) as '퇴사일' from employee;ㄴ
