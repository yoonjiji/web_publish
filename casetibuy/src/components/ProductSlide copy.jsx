import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import axios from "axios";
import Product from "../components/Product.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductSlide() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [productList, setProductList] = useState([]);
  const [activePage, setActivePage] = useState(0); // 현재 보이는 페이지 인덱스

  // const slideImg = [
  //   {
  //     essentials: [
  //       "/images/accessories/accessorie_1.webp",
  //       "/images/accessories/accessorie_2.webp",
  //       "/images/accessories/accessorie_3.webp",
  //       "/images/accessories/accessorie_4.webp",
  //       "/images/accessories/accessorie_5.webp",
  //       "/images/accessories/accessorie_6.webp",
  //       "/images/accessories/accessorie_7.webp",
  //     ],
  //   },
  // ];

  useEffect(() => {
    axios.get("/data/product.json").then((res) => {
      setProductList(res.data.featuredCollection);
    });
  }, []);

  const totalPages = Math.ceil(productList.length / 3); // 3장씩 보여줄 때 총 페이지 수

  useEffect(() => {
    axios
      .get("/data/product.json")
      .then((res) => {
        console.log("데이터 로드 성공:", res.data.featuredCollection);
        setProductList(res.data.featuredCollection); // 상태 업데이트 추가
      })
      .catch((error) => console.error("데이터 불러오기 실패:", error));
  }, []);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <div className="relative border border-red">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
          type: "bullets",
          renderBullet: (index, className) => {
            const isActive = index === activePage; // 현재 페이지의 불릿만 길게 설정
            return `<span class="${className} ${
              isActive ? "custom-bullet-large" : ""
            }"></span>`;
          },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {productList.map(() => (
          <SwiperSlide>
            <Product />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <p className="flex justify-center append-buttons gap-[10px] p-6">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          ㅇ
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          ㅇ
        </button>
        <button onClick={() => append()} className="append-slide">
          ㅇ
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          ㅇ
        </button>
      </p> */}

      {/* 페이지네이션 스타일 적용 */}
      <style jsx>{`
        .swiper-pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #000;
          transition: width 0.3s ease, height 0.3s ease;
        }
        .custom-bullet-large {
          width: 24px !important;
          height: 8px !important;
          border-radius: 4px !important;
          background: #000 !important;
        }
      `}</style>

      {/* 커스텀 네비게이션 버튼 */}
      <div className="flex justify-end gap-6 text-5xl text-white">
        <button className="px-6 py-1 bg-black custom-prev rounded-[30px]">
          <HiArrowLongLeft />
        </button>
        <button className="px-6 py-1 bg-black custom-next rounded-[30px]">
          <HiArrowLongRight />
        </button>
      </div>
    </div>
  );
}
