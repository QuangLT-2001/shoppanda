import React from "react";
import TitleIntro from "./Component/TitleIntro";
import { IntroduceWrapper } from "./style";
import TitlePage from "./../../../Component/Title";
import { useEffect } from "react";
const Introduce = props => {
    const pay = [
        {
            list: [
                'Cách 1: Thanh toán trực tiếp (người mua nhận hàng tại địa chỉ người bán):',
                'Bước 1: Người mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin;',
                'Bước 2: Người mua đến địa chỉ bán hàng',
                'Bước 3: Người mua thanh toán và nhận hàng;'
            ]
        },
        {
            list: [
                'Cách 2: Thanh toán sau (COD – giao hàng và thu tiền tận nơi):',
                'Bước 1: Người mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin;',
                'Bước 2: Người mua xác thực đơn hàng (điện thoại, tin nhắn, email);',
                'Bước 3: Người bán xác nhận thông tin Người mua;',
                'Bước 4: Người bán chuyển hàng;',
                'Bước 5: Người mua nhận hàng và thanh toán.'
            ]
        },
        {
            list: [
                'Cách 3: Thanh toán online qua thẻ tín dụng, chuyển khoản',
                'Bước 1: Người mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin;',
                'Bước 2: Người mua xác thực đơn hàng (điện thoại, tin nhắn, email);',
                'Bước 3: Người bán xác nhận thông tin Người mua;',
                'Bước 4: Ngưởi mua thanh toán;',
                'Bước 5: Người bán chuyển hàng;',
                'Bước 6: Người mua nhận hàng.'
            ]
        }

    ]
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <IntroduceWrapper className="intro" bgIntro="./assets/images/banner/banner-9.jpg">
            <TitlePage name="Giới Thiệu" />
            <div className="banner-intro">
                <div className="container intro-content">
                    <img src="./assets/images/banner/banner2.jpg" alt="" />
                    <div className="content-text">
                        <h4 className="name">
                            giới thiệu
                        </h4>
                        <p className="desc-intro">
                            Chào mừng quý khách đến với cửa hàng của chúng tôi! Tại đây,
                            chúng tôi đảm bảo quý khách sẽ chọn được những mặt hàng ưng
                            ý nhất, phù hợp nhất. <b>Shop QClothes & Sneaker </b>
                            với phương châm là “ Sẽ luôn luôn là người bạn đồng hành
                            cùng với phong cách thời trang của bạn”.
                            <b>QClothes & Sneaker</b> sẽ là một trong những shop đồ
                            thời trang uy tín và chất lượng nhất và chúng tôi luôn mang
                            đến cho khách hàng những sản phẩm mới nhất và chất lượng,
                            giá thành hợp lý nhất tại cửa hàng Thời Trang QClothes & Sneaker
                            dưới đây là đối nét giới thiệu cơ bản
                            về <b>Shop Thời Trang Cao Cấp QClothes & Sneaker.</b>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container intro-body">
                <TitleIntro name="Hướng dẫn sử dụng website" />
                <p>
                    Khi vào web của chúng tôi, khách hàng phải đảm
                    bảo đủ 18 tuổi, hoặc truy cập dưới sự giám sát
                    của cha mẹ hay người giám hộ hợp pháp. Khách
                    hàng đảm bảo có đầy đủ hành vi dân sự để thực
                    hiện các giao dịch mua bán hàng hóa theo quy định
                    hiện hành của pháp luật Việt Nam.
                    <br />
                    <br />
                    Chúng tôi sẽ cấp một tài khoản (Account) sử dụng
                    để khách hàng có thể mua sắm trên website qclothesSneaker.vn
                    trong khuôn khổ Điều khoản và Điều kiện sử dụng đã đề ra.
                    <br />
                    <br />
                    Quý khách hàng sẽ phải đăng ký tài khoản với thông tin xác
                    thực về bản thân và phải cập nhật nếu có bất kỳ thay đổi
                    nào. Mỗi người truy cập phải có trách nhiệm với mật khẩu,
                    tài khoản và hoạt động của mình trên web. Hơn nữa, quý
                    khách hàng phải thông báo cho chúng tôi biết khi tài
                    khoản bị truy cập trái phép. Chúng tôi không chịu bất kỳ
                    trách nhiệm nào, dù trực tiếp hay gián tiếp, đối với những
                    thiệt hại hoặc mất mát gây ra do quý khách không tuân thủ
                    quy định.
                    <br />
                    <br />
                    Nghiêm cấm sử dụng bất kỳ phần nào của trang web này với
                    mục đích thương mại hoặc nhân danh bất kỳ đối tác thứ ba
                    nào nếu không được chúng tôi cho phép bằng văn bản. Nếu
                    vi phạm bất cứ điều nào trong đây, chúng tôi sẽ hủy tài
                    khoản của khách mà không cần báo trước.
                    <br />
                    <br />
                    Trong suốt quá trình đăng ký, quý khách đồng ý nhận email
                    quảng cáo từ website. Nếu không muốn tiếp tục nhận mail,
                    quý khách có thể từ chối bằng cách nhấp vào đường link ở
                    dưới cùng trong mọi email quảng cáo.
                </p>
                <TitleIntro name="Ý kiến của khách hàng" />
                <p>
                    Tất cả nội dung trang web và ý kiến phê bình của quý khách
                    đều là tài sản của chúng tôi. Nếu chúng tôi phát hiện bất
                    kỳ thông tin giả mạo nào, chúng tôi sẽ khóa tài khoản của
                    quý khách ngay lập tức hoặc áp dụng các biện pháp khác
                    theo quy định của pháp luật Việt Nam.
                </p>
                <TitleIntro name="Chấp nhận đơn hàng và giá cả" />
                <p>
                    Chúng tôi có quyền từ chối hoặc hủy đơn hàng của quý khách vì
                    bất kỳ lý do gì liên quan đến lỗi kỹ thuật, hệ thống một cách
                    khách quan vào bất kỳ lúc nào.
                    <br />
                    <br />
                    Ngoài ra, để đảm bảo tính công bằng cho khách hàng là người
                    tiêu dùng cuối cùng của QClothes & Sneaker, chúng tôi cũng sẽ từ chối các
                    đơn hàng không nhằm mục đích sử dụng cho cá nhân, mua hàng
                    số lượng nhiều hoặc với mục đích mua đi bán lại.
                    <br />
                    <br />
                    Chúng tôi cam kết sẽ cung cấp thông tin giá cả chính xác nhất
                    cho người tiêu dùng. Tuy nhiên, đôi lúc vẫn có sai sót xảy ra,
                    ví dụ như trường hợp giá sản phẩm không hiển thị chính xác
                    trên trang web hoặc sai giá, tùy theo từng trường hợp chúng
                    tôi sẽ liên hệ hướng dẫn hoặc thông báo hủy đơn hàng đó cho
                    quý khách. Chúng tôi cũng có quyền từ chối hoặc hủy bỏ bất kỳ
                    đơn hàng nào dù đơn hàng đó đã hay chưa được xác nhận hoặc đã
                    thanh toán.
                </p>
                <TitleIntro name="Thương hiệu và bản quyền" />
                <p>
                    Mọi quyền sở hữu trí tuệ (đã đăng ký hoặc chưa đăng ký),
                    nội dung thông tin và tất cả các thiết kế, văn bản, đồ
                    họa, phần mềm, hình ảnh, video, âm nhạc, âm thanh, biên
                    dịch phần mềm, mã nguồn và phần mềm cơ bản đều là tài
                    sản của chúng tôi. Toàn bộ nội dung của trang web được
                    bảo vệ bởi luật bản quyền của Việt Nam và các công ước
                    quốc tế. Bản quyền đã được bảo lưu.
                </p>
                <TitleIntro name="Thanh toán an toàn và tiện lợi tại QClothes & Sneaker" />
                <p>
                    Người mua có thể tham khảo các phương thức thanh toán sau đây và lựa chọn áp dụng phương thức phù hợp:
                    <br />
                    <br />

                </p>
                <ul className="list-pay">
                    {pay.map((item, index) => {
                        return item.list.map((i, ind) => {
                            return <li className="pay-item" key={ind}>{i}</li>
                        })
                    })}
                </ul>
                <p>
                    Đối với người mua hàng từ QClothes & Sneaker thì phải tuẩn thu theo chính sách thanh toán của công ty.
                </p>
            </div>
        </IntroduceWrapper>
    );
}
export default Introduce;