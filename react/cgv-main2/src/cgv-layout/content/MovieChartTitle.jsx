export default function MovieChartTitle({ text1, text2, text3 }) {
  return (
    <div class="contnet-moviechart-title">
      <div>
        <span class="content-title-tyle-font font-color-main">{text1}</span>
        <span class="content-title-tyle-font font-color-gray">{text2}</span>
      </div>
      <div>
        <button class="total-view-button">{text3}</button>
      </div>
    </div>
  );
}
