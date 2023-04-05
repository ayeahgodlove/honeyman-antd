import { Banner } from "components/banner/banner.component";
import BuyInThreeSteps from "components/buy-in-three-steps/buy-in-three-steps.component";
import PopularProducts from "components/popular-proucts/popular-proucts.component";
import Review from "components/review/review.component";
import Subscribe from "components/subscribe/subscribe.component";
// import FilterComponent from "components/product/filter.component";
import { WhyHoneyMan } from "components/why-honeyman/why-honeyman.component";
import { useToken } from "hooks/token.hook";
import GeneralAppShell from "layout/app/general-app-shell";
import React, { useEffect } from "react";

const WelcomePage: React.FC = () => {
  const { token } = useToken();
  useEffect(() => {}, [token]);
  return (
    <GeneralAppShell>
      <Banner />
      {/* why honeyman */}
      <WhyHoneyMan />

      {/* buy in 3 steps  */}
      <BuyInThreeSteps />

      {/* search component */}
      <PopularProducts />

      {/* subscribe */}
      <Subscribe />

      {/* reviews */}
      <Review />

      {/* product list */}
    </GeneralAppShell>
  );
};

export default WelcomePage;
