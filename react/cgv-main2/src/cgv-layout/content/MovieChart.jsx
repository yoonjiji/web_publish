import MovieChartTitle from "./MovieChartTitle.jsx";
import MovieChartContent from "./MovieChartContent.jsx";

export default function MovieChart() {
  return (
    <div class="contnet-moviechart">
      <div>
        <MovieChartTitle text1="무비차트" text2="상영예정작" text3="전체보기" />
        <MovieChartContent />
      </div>
    </div>
  );
}
