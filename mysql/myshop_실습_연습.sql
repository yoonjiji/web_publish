show databases;
use myshop2019;
select database();
show tables;

/*
	실습 데이터베이스 연결 : myshop2019
	실습 내용 - 기본적인 데이터 조회 
*/
-- Q01) customer 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
desc customer;
-- Q02) employee 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
desc employee;
-- Q03) product 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
 desc product;
-- Q04) order_header 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
 desc order_header;
-- Q05) order_detail 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
 desc order_detail;
-- Q06) 모든 고객의 아이디, 이름, 지역, 성별, 이메일, 전화번호를 조회하세요.
select customer_id as '아이디',
	   customer_name as '이름',
       city as '지역',
       gender as '성별',
       email as '이메일',
       phone as '전화번호'
	from customer;
-- Q07) 모든 직원의 이름, 사원번호, 성별, 입사일, 전화번호를 조회하세요.
select employee_id, employee_name, gender, hire_date, phone
     from employee;
-- Q08) 이름이 '홍길동'인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_id, customer_name, city, gender, email, phone, point
     from customer
     where customer_name = '홍길동';
-- Q09) 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_id, customer_name, city, gender, email, phone, point
    from customer
    where gender = 'f';
-- Q10) '울산' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_id, customer_name, city, gender, email, phone, point
    from customer
    where city = '울산';

-- Q11) 포인트가 500,000 이상인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_id, customer_name, city, gender, email, phone, point
    from customer
    where point >= 500000;
-- Q12) 이름에 공백이 들어간 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_id, customer_name, city, gender, email, phone, point
    from customer
    where customer_name like '% %';
-- Q13) 전화번호가 010으로 시작하지 않는 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_id, customer_name, city, gender, email, phone, point
    from customer
    where left(phone,3) > '010';  -- = where left(phone,3) != '010'; / = where left phone not like '010%';
    
-- Q14) 포인트가 500,000 이상 '서울' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_id, customer_name, city, gender, email, phone, point
    from customer
    where point >= 500000 and city = '서울';
-- Q15) 포인트가 500,000 이상인 '서울' 이외 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_id, customer_name, city, gender, email, phone, point
    from customer
    where point >= 500000 and city != '서울'; -- = where point >= 400000 and city not like '서울'; // 하지만 전자가 범위가 좁아서 효율성이 좋다
-- Q16) 포인트가 400,000 이상인 '서울' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_id, customer_name, city, gender, email, phone, point
    from customer
    where point >= 400000 and city = '서울' and gender = 'm';
    
-- Q17) '강릉' 또는 '원주' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_id, customer_name, gender, city, phone, point
    from customer
    where city in ('강릉', '원주');
-- Q18) '서울' 또는 '부산' 또는 '제주' 또는 '인천' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_id, customer_name, gender, city, phone, point
    from customer
    where city in ('서울', '부산', '제주', '인천');
-- Q19) 포인트가 400,000 이상, 500,000 이하인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
select customer_id, customer_name, gender, city, phone, point
    from customer
    where point between '400000' and '500000';

-- Q20) 1990년에 출생한 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
select customer_id, customer_name, gender, city, phone, point, birth_date
    from customer
    where left(birth_date,4) = '1990';
-- Q21) 1990년에 출생한 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
select customer_id, customer_name, gender, city, phone, point, birth_date
    from customer
    where left(birth_date,4) = '1990' and gender = 'f';
-- Q22) 1990년에 출생한 '대구' 또는 '경주' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
select customer_id, customer_name, gender, city, phone, point, birth_date
    from customer
    where left(birth_date,4) = '1990' 
    and gender = 'm' 
    and city in ('대구', '경주');
-- Q23) 1990년에 출생한 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
--      단, 홍길동(gildong) 형태로 이름과 아이디를 묶어서 조회하세요.
select concat(customer_name, '(', customer_id, ')') 
	   customer_name, gender, 
       city, 
       phone, 
       point
    from customer
    where left(birth_date,4) = '1990' and gender = 'm';

-- Q24) 근무중인 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
select employee_name, employee_id, gender, phone, hire_date, retire_date
    from employee
    where retire_date is null;
-- Q25) 근무중인 남자 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
select employee_name, employee_id, gender, phone, hire_date, retire_date
    from employee
    where retire_date is null
    and gender = 'm';
-- Q26) 퇴사한 직원의 이름, 사원번호, 성별, 전화번호, 입사일, 퇴사일를 조회하세요.
select employee_name, employee_id, gender, phone, hire_date, retire_date
    from employee
    where retire_date is not null;

-- Q28) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 고객아이디를 기준으로 오름차순 정렬해서 조회하세요.
select *
    from order_header
    where order_date between '2019-01-01' and '2019-01-07'
    order by customer_id asc;
    
-- Q29) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 전체금액을 기준으로 내림차순 정렬해서 조회하세요.
select *
    from order_header
    where order_date between '2019-01-01' and '2019-01-07'
    order by total_due desc;

-- Q30) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 사원번호를 기준으로 오름차순, 같은 사원번호는 주문일시를 기준으로 내림차순 정렬해서 조회하세요.
select *
    from order_header
    where order_date between '2019-01-01' and '2019-01-07'
    order by employee_id asc, order_date desc;
    
/**
	그룹함수
**/
/** customer 테이블 사용 **/
-- Q01) 고객의 포인트 합을 조회하세요.
select sum(point) point
    from customer;

-- Q02) '서울' 지역 고객의 포인트 합을 조회하세요.
select concat(format(sum(point), 0), '점') point
    from customer
    where city = '서울';

-- Q03) '서울' 지역 고객의 수를 조회하세요.
select count(*)
    from customer
    where city = '서울';

-- Q04) '서울' 지역 고객의 포인트 합과 평균을 조회하세요.
select concat(format(sum(point), 0), '점') point,
    concat(format(truncate(avg(point), 0), 0), '점') avg
    from customer
    where city = '서울';
     
-- Q05) '서울' 지역 고객의 포인트 합, 평균, 최댓값, 최솟값을 조회하세요.
select concat(format(sum(point), 0), '점') point,
       concat(format(truncate(avg(point), 0), 0), '점') avg,
       concat(format(min(point), 0), '점') min,
       concat(format(max(point), 0), '점') max
	from customer
    where city = '서울';

-- Q06) 남녀별 고객의 수를 조회하세요.
select gender 성별, 
	   format(count(*), 0) count,
       concat(format(truncate(avg(point), 0), 0), '점') avg,
       concat(format(min(point), 0), '점') min,
       concat(format(max(point), 0), '점') max
    from customer
    group by gender;

-- Q07) 지역별 고객의 수를 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city,
	   format(count(*), 0) count,
       concat(format(truncate(avg(point), 0), 0), '점') avg,
       concat(format(min(point), 0), '점') min,
       concat(format(max(point), 0), '점') max
    from customer
    group by city;
 
-- Q08) 지역별 고객의 수를 조회하세요.
--      단, 고객의 수가 10명 이상인 행만 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
   select city, 
		  format(count(*), 0) count,
		  concat(format(truncate(avg(point), 0), 0), '점') avg,
		  concat(format(min(point), 0), '점') min,
		  concat(format(max(point), 0), '점') max
    from customer
    group by city
    having count >= 10
    order by count desc;
    
-- Q09) 남녀별 포인트 합을 조회하세요.
/*
	case [컬럼명]
		when 'f' then '여자'
        else '남자'
    end
*/
select case gender  
		when 'f' then '여자'
		else '남자'
        end as gender,
	   concat(format(count(*), 0), '명') count,
	   concat(format(sum(point), 0), '점') sum,
	   concat(format(truncate(avg(point), 0), 0), '점') avg,
	   concat(format(min(point), 0), '점') min,
	   concat(format(max(point), 0), '점') max
    from customer
    group by gender;
    
-- Q10) 지역별 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
	select city,
		   format(sum(point), 0) point,
           format(truncate(avg(point), 0), 0) avg
	   from customer
       group by city
       order by point asc;
    
-- Q11) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합이 1,000,000 이상인 행만 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
select city,
    sum(point) point,
    avg(point) avg
    from customer
    group by city
    having point >= 1000000
    order by point desc;
      
-- Q12) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
   

-- Q13) 지역별 고객의 수, 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.


-- Q14) 지역별 포인트 합, 포인트 평균을 조회하세요.
--      단, 포인트가 NULL이 아닌 고객을 대상으로 하며, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
select city, format(sum(point), 0) sum,
    format(truncate(avg(point), 0),0) avg
    from customer
    where point is not null
    group by city
    order by city;

-- Q15) '서울', '부산', '대구' 지역 고객의 지역별, 남녀별 포인트 합과 평균을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순, 같은 지역은 성별을 기준으로 오름차순 정렬해서 조회하세요.
select city, gender, sum(point) sum, avg(point) avg
	from customer
	where city in ('서울', '부산', '대구')
    group by city, gender
    order by city asc, gender asc;
    -- having 쓰니까 결과 무한루프?

/** order_header 테이블 사용 **/
    
-- Q16) 2019년 1월 주문에 대하여 고객아이디별 전체금액 합을 조회하세요.
select customer_id, count(*) count, sum(total_due) sum
    from order_header
    where left(order_date, 7) = '2019-01'
    group by customer_id;
    
    -- roll up 이름 오라클에서는 함수 나올 경우 적용안되는 오류가 있음
    select if(grouping(customer_id), '총 합 계', ifnull(customer_id, 0)) cid,
    sum(total_due), avg(total_due)
    from order_header
    group by customer_id with rollup;

-- Q17) 주문연도별 전체금액 합계를 조회하세요.
select left(order_date, 4) order_date, 
	   count(total_due) count, 
       sum(total_due) sum, 
       avg(total_due) avg
from order_header
group by left(order_date, 4);

-- Q18) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합을 조회하세요.

-- Q20) 주문연도별, 주문월별 전체금액 합과 평균을 조회하고, rollup 함수를 이용하여 소계와 총계를 출력해주세요.


/**
	테이블 조인
*/
-- Q01) 전체금액이 8,500,000 이상인 주문의
--      주문번호, 고객아이디, 사원번호, 주문수량, 주문일시, 전체금액을 조회하세요.
select oh.order_date, c.customer_id, e.employee_id, oh.total_due
	from order_header oh, customer c, employee e
    where oh.customer_id = c.customer_id
    and oh.employee_id = e.employee_id
    and oh.total_due >= 8500000;

-- Q02) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름도 같이 조회되게 수정하세요.
select oh.order_date, 
	   c.customer_id,
       c.customer_name,
       e.employee_id, 
       oh.order_date,
       oh.total_due
	from order_header oh, customer c, employee e
    where oh.customer_id = c.customer_id
    and oh.employee_id = e.employee_id
    and oh.total_due >= 8500000;

-- Q03) Q01 쿼리를 복사해 붙여 넣은 후 직원이름도 같이 조회되게 수정하세요.
select oh.order_date, 
	   c.customer_id,
       c.customer_name,
       e.employee_id, 
       e.employee_name,
       oh.order_date,
       oh.total_due
	from order_header oh, customer c, employee e
    where oh.customer_id = c.customer_id
    and oh.employee_id = e.employee_id
    and oh.total_due >= 8500000;

-- Q04) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름, 직원이름도 같이 조회되게 수정하세요.

-- Q05) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 고객만 조회되게 수정하세요.
select oh.order_date, 
	   c.customer_id,
       c.customer_name,
       e.employee_id, 
       e.employee_name,
       oh.order_date,
       oh.total_due,
       c.city
	from order_header oh, customer c, employee e
    where oh.customer_id = c.customer_id
    and oh.employee_id = e.employee_id
    and oh.total_due >= 8500000
    and c.city = '서울'
    order by oh.total_due desc;
 
-- Q06) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 '남자' 고객만 조회되게 수정하세요.
select oh.order_date, 
	   c.customer_id,
       c.customer_name,
       e.employee_id, 
       e.employee_name,
       oh.order_date,
       oh.total_due,
       c.city
	from order_header oh, customer c, employee e
    where oh.customer_id = c.customer_id
    and oh.employee_id = e.employee_id
    and oh.total_due >= 8500000
    and c.city = '서울'
    and c.gender ='m'
    order by oh.total_due desc;

    /*
    뷰로 만들때는 디테일한 조건은 넣지 않는다.
    ex)     and oh.total_due >= 8500000
			and c.city = '서울'
			and c.gender = 'm';
	공통 조건? 넣는게 좋음
    ex)		where oh.employee_id = e.employee_id
			and oh.customer_id = c.customer_id
			and oh.order_id = od.order_id
    */  
-- Q07) 주문수량이 30개 이상인 주문의 주문번호, 상품코드, 주문수량, 단가, 지불금액을 조회하세요.

-- Q08) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 상품이름도 같이 조회되도록 수정하세요.
-- Q09) 상품코드, 상품이름, 소분류아이디를 조회하세요.
-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 소분류이름, 대분류아이디가 조회되게 수정하세요.
-- Q11) 다정한 사원이 2019년에 주문한 상품명을 모두 출력해주세요.
-- Q12) 청소기를 구입한 고객아이디, 사원번호, 주문번호, 주문일시를 조회하세요.
    

/**
	서브쿼리
*/
-- Q13) 'mtkim', 'odoh', 'soyoukim', 'winterkim' 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.    
-- Q14) '전주' 지역 고객의 아이디를 조회하세요.    
-- Q15) 위 두 쿼리문을 조합해서 하위 쿼리를 사용해 '전주' 지역 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
-- Q16) 고객의 포인트 최댓값을 조회하세요.
-- Q17) 하위 쿼리를 사용해 가장 포인트가 많은 고객의 이름, 아이디, 등록일, 포인트를 조회하세요.
-- Q18) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하세요.
-- Q19) 하위 쿼리를 사용해 홍길동(gdhong) 고객과 같은 지역의 고객 이름, 아이디, 지역, 등록일, 포인트를 조회하세요.
--      단, 고객 이름을 기준으로 오름차순 정렬해서 조회하세요.
-- Q20) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하고, 행번호를 추가하여 출력하세요.

    