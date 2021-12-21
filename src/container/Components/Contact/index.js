import React from "react";
import { ContactWrapper } from "./style";
import { Link, NavLink } from "react-router-dom";
const Contact = props => {
  return (
    <ContactWrapper className="contact">
      <div className="container">
        <div className="header-page">
          <NavLink
            className="link-to"
            exact
            to="/"
          >
            Trang chủ
          </NavLink>
          <span>/</span>
          <span>Liên hệ</span>
        </div>
        <h2 className="title-contact">
          liên hệ
        </h2>
        <h3 className="name-brand">
          PANDA - thời trang giới trẻ
        </h3>
        <p>
          Panda chuyên bán quần áo trẻ trung, lịch lãm online với hàng ngàn mẫu mã để quý khách lựa chọn cho bé yêu của bạn.
          Hãy đặt hàng online để được hưởng nhiều ưu đãi hơn tại siêu thị Panda.
          Chọn mua ngay các mẫu quần áo  mới nhất trong danh mục "Hàng mới nhất"
        </p>
        <h3 className="name-info">
          Thông tin liên hệ nhanh
        </h3>
        <p>
          Hotline:  037.6326.810 | 039.2272.154
        </p>
        <p>
          Zalo:  039.2272.154
        </p>
        <p>
          FB: <a
            href="https://www.facebook.com/profile.php?id=100038260591228"
          >
            https://www.facebook.com
          </a>
        </p>
        <p>
          Youtube:
          <a
            href="https://www.youtube.com/channel/UCq4CgoNLMHFo_8EopsMcgWA"
          >
            https://www.youtube.com
          </a>
        </p>

        <iframe width={`100%`} height={315} src="https://www.youtube.com/embed/pySR0NJ0uR4?rel=0&autoplay=1"   />
      </div>
    </ContactWrapper>
  );
}
export default Contact;