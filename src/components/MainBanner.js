import MainBannerItem from "./MainBannerItem";

const MainBanner = ({ bannerItems }) => {
  return (
    <div className="w-[900px] mx-auto flex overflow-x-auto">
      {bannerItems.map((item) => (
        <MainBannerItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MainBanner;
