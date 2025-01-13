show databases;
use myshop2019;
select database();
show tables;

/*
	실습 데이터베이스 연결 : myshop2019
	실습 내용 - 기본적인 데이터 조회 
*/
-- Q01) customer 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q02) employee 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q03) product 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q04) order_header 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q05) order_detail 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
-- Q06) 모든 고객의 아이디, 이름, 지역, 성별, 이메일, 전화번호를 조회하세요.
-- Q07) 모든 직원의 이름, 사원번호, 성별, 입사일, 전화번호를 조회하세요.
-- Q08) 이름이 '홍길동'인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q09) 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q10) '울산' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.


-- Q11) 포인트가 500,000 이상인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q12) 이름에 공백이 들어간 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q13) 전화번호가 010으로 시작하지 않는 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q14) 포인트가 500,000 이상 '서울' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q15) 포인트가 500,000 이상인 '서울' 이외 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q16) 포인트가 400,000 이상인 '서울' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q17) '강릉' 또는 '원주' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q18) '서울' 또는 '부산' 또는 '제주' 또는 '인천' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q19) 포인트가 400,000 이상, 500,000 이하인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
-- Q20) 1990년에 출생한 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요
desc customer;
select customer_name, customer_id, gender, city, phone, birth_date, point
    from customer
    where left(birth_date,4) = '1990';
-- Q21) 1990년에 출생한 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.

-- Q22) 1990년에 출생한 '대구' 또는 '경주' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
-- Q23) 1990년에 출생한 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
--      단, 홍길동(gildong) 형태로 이름과 아이디를 묶어서 조회하세요.
-- Q24) 근무중인 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
-- Q25) 근무중인 남자 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
-- Q26) 퇴사한 직원의 이름, 사원번호, 성별, 전화번호, 입사일, 퇴사일를 조회하세요.

-- Q28) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 고객아이디를 기준으로 오름차순 정렬해서 조회하세요.
desc order_header;
    
select *
	from order_header
    where order_date between '2019-01-01' and '2019-01-07'
    order by customer_id asc;
-- Q29) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 전체금액을 기준으로 내림차순 정렬해서 조회하세요.
select *
	from order_header
    where order_date between '2019-01-01' and '2019-01-07'
    order by customer_id desc;

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
select sum(point) point
    from customer
    where city = '서울';

-- Q03) '서울' 지역 고객의 수를 조회하세요.


-- Q04) '서울' 지역 고객의 포인트 합과 평균을 조회하세요.
     
-- Q05) '서울' 지역 고객의 포인트 합, 평균, 최댓값, 최솟값을 조회하세요.

-- Q06) 남녀별 고객의 수를 조회하세요.

-- Q07) 지역별 고객의 수를 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.

 
-- Q08) 지역별 고객의 수를 조회하세요.
--      단, 고객의 수가 10명 이상인 행만 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
   
    
-- Q09) 남녀별 포인트 합을 조회하세요.
    
-- Q10) 지역별 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
    
-- Q11) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합이 1,000,000 이상인 행만 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
select city, sum(point) sum
    from customer
    group by city
    having sum >= 1000000
    order by sum desc;
      
-- Q12) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
   select city, sum(point) point
    from customer
    group by city
    order by point desc;

-- Q13) 지역별 고객의 수, 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.


-- Q14) 지역별 포인트 합, 포인트 평균을 조회하세요.
--      단, 포인트가 NULL이 아닌 고객을 대상으로 하며, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.

-- Q15) '서울', '부산', '대구' 지역 고객의 지역별, 남녀별 포인트 합과 평균을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순, 같은 지역은 성별을 기준으로 오름차순 정렬해서 조회하세요.


/** order_header 테이블 사용 **/
    
-- Q16) 2019년 1월 주문에 대하여 고객아이디별 전체금액 합을 조회하세요.


-- Q17) 주문연도별 전체금액 합계를 조회하세요.

-- Q18) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합을 조회하세요.

-- Q19) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합과 평균을 조회하세요.

-- Q20) 주문연도별, 주문월별 전체금액 합과 평균을 조회하고, rollup 함수를 이용하여 소계와 총계를 출력해주세요.


/**
	테이블 조인
*/
-- Q01) 전체금액이 8,500,000 이상인 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 전체금액을 조회하세요.
-- order_header 테이블 : order_id, customer_id, employee_id, order_date, total_due
select count(*) from order_header;	-- 903
select count(*) from order_header where total_due >= 8500000;	-- 7
select order_id, 
	   customer_id, 
       employee_id, 
       order_date, 
       total_due
	from order_header
    where total_due >= 8500000
    order by total_due desc;

-- Q02) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름도 같이 조회되게 수정하세요.
select oh.order_id, 
	   oh.customer_id, 
       c.customer_name,
       oh.employee_id, 
       oh.order_date, 
       oh.total_due
	from order_header oh, customer c
    where oh.customer_id = c.customer_id
    and total_due >= 8500000
    order by total_due desc;
-- Q03) Q01 쿼리를 복사해 붙여 넣은 후 직원이름도 같이 조회되게 수정하세요.
select oh.order_id, 
	   oh.customer_id, 
       c.customer_name,
       oh.employee_id, 
       e.employee_name,
       oh.order_date, 
       oh.total_due
	from order_header oh, customer c, employee e
    where oh.customer_id = c.customer_id
    and oh.employee_id = e.employee_id
    and total_due >= 8500000
    order by total_due desc;
-- Q04) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름, 직원이름도 같이 조회되게 수정하세요.
-- Q05) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 고객만 조회되게 수정하세요.
select oh.order_id, 
	   oh.customer_id, 
       c.customer_name,
       oh.employee_id, 
       e.employee_name,
       oh.order_date, 
       oh.total_due,
       c.city
	from order_header oh, customer c, employee e
    where oh.customer_id = c.customer_id
    and oh.employee_id = e.employee_id
    and total_due >= 8500000
    and c.city = '서울'
    order by total_due desc;
    
-- ansi sql
select oh.order_id, 
	   oh.customer_id, 
       c.customer_name,
       oh.employee_id, 
       e.employee_name,
       oh.order_date, 
       oh.total_due,
       c.city
	from order_header oh inner join customer c
						 inner join employee e
    on oh.customer_id = c.customer_id
    and oh.employee_id = e.employee_id
    and total_due >= 8500000
    and c.city = '서울'
    order by total_due desc;
-- Q06) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 '남자' 고객만 조회되게 수정하세요.
select oh.order_id, 
	   oh.customer_id, 
       c.customer_name,
       oh.employee_id, 
       e.employee_name,
       oh.order_date, 
       oh.total_due
	from order_header oh, customer c, employee e
    where oh.customer_id = c.customer_id
    and oh.employee_id = e.employee_id
    and total_due >= 8500000
    order by total_due desc;
-- Q04) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름, 직원이름도 같이 조회되게 수정하세요.
-- Q05) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 고객만 조회되게 수정하세요.
select oh.order_id, 
	   oh.customer_id, 
       c.customer_name,
       oh.employee_id, 
       e.employee_name,
       oh.order_date, 
       oh.total_due,
       c.city
	from order_header oh, customer c, employee e
    where oh.customer_id = c.customer_id
    and oh.employee_id = e.employee_id
    and total_due >= 8500000
    and c.city = '서울'
    and  c.gender = 'n'
    order by total_due desc;
-- Q07) 주문수량이 30개 이상인 주문의 주문번호, 상품코드, 주문수량, 단가, 지불금액을 조회하세요.
    select * from order_detail;
    -- 테이블 컬럼명 변경
    select *
	from oder_detail;
    alter table order_detail
		rename column drder_detail_id to order_detail_id;
        desc order_detail;
	
	-- oracle 방식
    select order_id, order_detail_id, order_qty, unit_price, line_total
    from order_detail
    where order_qty >= 30;
        
-- Q08) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 상품이름도 같이 조회되도록 수정하세요.
    select od.order_id, 
		   od.order_detail_id,
           od.product_id,
           p.product_name,
           od.order_qty, 
           od.unit_price, 
           od.line_total
    from order_detail od, product p
    where od.product_id = p.product_id
    and order_qty >= 30;
    
    -- ansi sql
	select od.order_id, 
		   od.order_detail_id,
           od.product_id,
           p.product_name,
           od.order_qty, 
           od.unit_price, 
           od.line_total
    from order_detail od inner join product p
    on od.product_id = p.product_id;
-- Q09) 상품코드, 상품이름, 소분류아이디를 조회하세요.
desc product;
select count(*) from product;	-- 41
select product_id, 
	   product_name, 
       sub_category_id 
   from product;
-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 소분류이름, 대분류아이디가 조회되게 수정하세요.
select p.product_id, 
	   p.product_name, 
       sc.sub_category_name,
       p.sub_category_id,
       sc.category_id
   from product p, sub_category sc
   where p.sub_category_id = sc.sub_category_id;
   
-- ansi sql
select p.product_id, 
	   p.product_name, 
	   sc.sub_category_name,
       p.sub_category_id,
       sc.category_id
   from product p inner join sub_category sc
   on p.sub_category_id = sc.sub_category_id;
 
 -- 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 대분류이름 추가해서 조회
 select p.product_id, 
	   p.product_name, 
       sc.sub_category_name,
       p.sub_category_id,
       sc.category_id,
       c.category_name
   from product p, sub_category sc, category c
   where p.sub_category_id = sc.sub_category_id
   and sc.category_id = c.category_id;
   
-- ansi sql
 select p.product_id, 
	    p.product_name, 
        sc.sub_category_name,
        p.sub_category_id,
        sc.category_id,
        c.category_name
   from product p inner join sub_category sc on p.sub_category_id = sc.sub_category_id
				  inner join category c on sc.category_id = c.category_id;
   
-- 대분류, 소분류별 상품갯수
-- 집계함수와 일반 칼럼을 같이 사용할 수 없음 --> 서브쿼리를 이용
select category_name,
	   sub_category_name, 
       count(product_id) count
	from ( select p.product_id, 
				  p.product_name, 
				  sc.sub_category_name,
				  p.sub_category_id,
				  sc.category_id,
				  c.category_name
				from product p, sub_category sc, category c
				where p.sub_category_id = sc.sub_category_id
				and sc.category_id = c.category_id) t1
	group by category_id, sub_category_name;
    
    select * from order_detail;
    
 -- 대분류, 소분류별 상품갯수, 총상품가격 합계, 상품가격 평균
 select distinct product_id unit_price from order_detail;
 
 select category_name,
	   sub_category_name, 
       concat(count(product_id), '개') count,
       concat(format(sum(unit_price), 0), '원') 합계,
       concat(format(truncate(avg(unit_price), 0), 0), '원') 평균
	from (select distinct p.product_id, 
						  p.product_name, 
						  sc.sub_category_name,
						  p.sub_category_id,
						  sc.category_id,
						  c.category_name,
						  od.unit_price
					from product p, sub_category sc, category c, order_detail od
					where p.sub_category_id = sc.sub_category_id
					and sc.category_id = c.category_id
					and p.product_id = od.product_id) t1
	group by category_id, sub_category_name;
    
-- Q11) 다정한 사원이 2019년에 주문한 상품명을 모두 출력해주세요.
select count(*)	-- 2425
	from employee e, order_header oh, order_detail od, product p
    where e.employee_id = oh.employee_id
    and oh.order_id = od.order_id
    and od.product_id = p.product_id;
    
select e.employee_name, 
	   oh.order_date,
	   p.product_name,
       od.order_id,
       od.order_detail_id
	from employee e, order_header oh, order_detail od, product p
    where e.employee_id = oh.employee_id
    and oh.order_id = od.order_id
    and od.product_id = p.product_id
    and e.employee_name = '다정한'
    and left(oh.order_date, 4) = '2019';
 
 -- 2019년 1월에 주문한 주문아이디별 다정한 사원의 주문건수 조회
 select order_id, count(order_id) 'order_count'
 from (select e.employee_name, 
		      oh.order_date,
		      p.product_name,
		      od.order_id,
		      od.order_detail_id
		from employee e, order_header oh, order_detail od, product p
		where e.employee_id = oh.employee_id
		and oh.order_id = od.order_id
		and od.product_id = p.product_id
		and e.employee_name = '다정한'
        and left(oh.order_date, 7) = '2019-01') t1
  group by order_id
;

-- 주문년도별, 주문월별, 주문아이디별, 다정한 사원의 주문건수 조회
-- 2019년도
 select left(order_date, 4) year, 
	    substring(order_date, 6, 2) month,
	    count(order_id) 'order_count'
 from (select e.employee_name, 
		      oh.order_date,
		      p.product_name,
		      od.order_id,
		      od.order_detail_id
		from employee e, order_header oh, order_detail od, product p
		where e.employee_id = oh.employee_id
		and oh.order_id = od.order_id
		and od.product_id = p.product_id
		and e.employee_name = '다정한') t1
  group by left(order_date, 4), substring(order_date, 6, 2)
  having year = '2019';
    
-- Q12) 청소기를 구입한 고객아이디, 사원번호, 주문번호, 주문일시를 조회하세요.
select row_number() over(order by oh.order_date desc) no,
	   od.order_id, 
	   oh.employee_id, 
	   oh.customer_id, 
       oh.order_date date,
	   p.product_name 
	from order_header oh, order_detail od, product p
    where oh.order_id = od.order_id
		and p.product_id = od.product_id
        and p.product_name like '%청소기%';
/**
	서브쿼리
*/
-- Q13) 'mtkim', 'soyoukim' 고객 주문의
-- 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요. 
select oh.order_id, 
       c.customer_id, 
       oh.order_date, 
       oh.total_due
	from customer c, order_header oh
    where c.customer_id = oh.customer_id
    and c.customer_id in('mtkim', 'soyoukim');

-- 김마트, 김소유 고객의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
select * from customer;
select oh.order_id, 
       c.customer_id, 
       oh.order_date, 
       oh.total_due
	from customer c, order_header oh
    where c.customer_id = oh.customer_id
    and c.customer_id in(select customer_id  -- 김마트, 김소유 고객의 아이디를 가져오는 쿼리
							from customer 
                            where customer_name in ('김마트', '김소유')); 
   

-- Q14) '전주' 지역 고객의 아이디, 고객명, 고객의 생일을 조회하세요.
select customer_id, customer_name, birth_date, city
	from customer
    where city = '전주';
    
-- '전주' 지역 고객 주문의 주문번호를 조회하세요.
select count(*)
	from order_header
    where customer_id in (select customer_id from customer where city = '전주');
    
-- Q15) 위 두 쿼리문을 조합해서 하위 쿼리를 사용해 
-- '전주' 지역 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
-- 만약 고객명을 함께 출력하고자 한다면, order_header & customer 조인해야 함
select order_id, customer_id, order_date, total_due
	from customer
	where customer_id in (select customer_id from customer where city = '전주');

-- Q16) 고객의 포인트 최댓값을 조회하세요.
select max(point) from customer;
-- Q17) 하위 쿼리를 사용해 가장 포인트가 많은 고객의 이름, 아이디, 등록일, 포인트를 조회하세요.
select customer_name,
	   customer_id,
       register_date,
       point
	from customer
    where point in (select max(point) from customer);
-- 포인트가 가장 적은 고객 조회
select customer_name,
	   customer_id,
       register_date,
       point
	from customer
    where point in (select min(point) from customer);
-- Q18) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하세요.
select customer_name,
	   customer_id,
       register_date,
       point
	from customer
    where point > (select point from customer where customer_name = '홍길동');
-- Q19) 하위 쿼리를 사용해 홍길동(gdhong) 고객과 같은 지역의 고객 이름, 아이디, 지역, 등록일, 포인트를 조회하세요.
--      단, 고객 이름을 기준으로 오름차순 정렬해서 조회하세요.
select customer_name,
	   customer_id,
       register_date,
       point,
       city
	from customer
    where city = (select city from customer where customer_name = '홍길동')
    order by customer_name;

-- Q20) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하고, 행번호를 추가하여 출력하세요.
select row_number() over(order by customer_name) n, 
	   customer_name,
	   customer_id,
       register_date,
       point
	from customer
    where point > (select point from customer where customer_name = '홍길동');
    
-- 2016 ~ 2019년도까지 주문한 고객의 아이디, 고객명, 주문번호, 주문총금액을 조회
select count(*) from order_header;	-- 903
select count(*) from order_header2016;	-- 596
select count(*) from order_header2017;	-- 561

-- union all
select t1.customer_id,
	   c.customer_name,
       t1.order_id,
       t1.total_due
from customer c,
	 (select * from order_header
		  union all   
		  select * from order_header2016
		  union all 
		  select * from order_header2017) t1
where c.customer_id = t1.customer_id;

-- 년도별 주문건수, 총판매합계, 년도 기준 오름차순
-- 년도:year, 건수:count, 총판매합계:sum
-- '년도', '건', 3자리구분 '원'
select concat(left(order_date, 4), '년도') year, 
	   concat(count(order_id), '건') count, 
       concat(format(sum(total_due), 0), '원') sum
from customer c, order_header_total t1
where c.customer_id = t1.customer_id
group by concat(left(order_date, 4), '년도')
order by year;

-- view를 이용하여 order_header_total (2016 ~ 2019)
select * from information_schema.views
where table_schema = 'myshop2019';

--
-- 2016 ~ 2019 : order_header_total
create view order_header_total
as
select * from order_header
		  union all   
		  select * from order_header2016
		  union all 
		  select * from order_header2017;
          
--
-- 2016 ~ 2019 detail : order_detail_total
create view order_detail_total
as
select * from order_detail
		  union all   
		  select * from order_detail2016
		  union all 
		  select * from order_detail2017;
          
select count(*) from order_detail;          -- 2425
select count(*) from order_detail2016;      -- 1582
select count(*) from order_detail2017;      -- 1479
select count(*) from order_detail_total;	-- 5486

select * from order_detail_total;

--

 select left(order_date, 4) year, 
	    substring(order_date, 6, 2) month,
	    count(order_id) 'order_count'
 from (select e.employee_name, 
		      oh.order_date,
		      p.product_name,
		      od.order_id,
		      od.order_detail_id
		from employee e, order_header_total oh, order_detail_total od, product p
		where e.employee_id = oh.employee_id
		and oh.order_id = od.order_id
		and od.product_id = p.product_id) t1
		-- and e.employee_name = '다정한') t1
  group by left(order_date, 4), substring(order_date, 6, 2)
  order by year asc;
  
  -- 카테고리 활용 : 서브쿼리
  select * from category;
  
  -- 대분류로 '가전제품' 선택 후 소분류 값 가져오기
  select sub_category_name
	from sub_category
    where category_id in (select category_id 
						   from category 
                           where category_name = '가전제품');

-- 소분류에서 '대형'을 선택 한 후 상품명 가져오기
select product_name
	from product
    where sub_category_id in (select sub_category_id 
								from sub_category 
                                where sub_category_name = '대형');