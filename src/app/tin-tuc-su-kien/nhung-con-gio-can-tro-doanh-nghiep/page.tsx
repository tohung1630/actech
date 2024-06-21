'use client'
import React, { useState } from "react";
import ReactDOM from "react-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { Carousel } from 'antd';
import { Row, Col, Modal, Collapse } from 'antd';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {
    FacebookOutlined,
    TikTokOutlined,
    InstagramOutlined,
    YoutubeOutlined,
    ArrowRightOutlined
} from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import DefaultLayout from '../../../components/DefaultLayout/layoutMenu';
import styles from "./page.module.scss";

export default function Home() {

    return (
        <DefaultLayout>
            <div className={styles.site_main}>
                <h1 className={styles.entry_title}>
                3 cơn gió ngược cản trợ doanh nghiệp tư nhân vượt bão
                </h1>
                <div className={styles.page_content}>
                    <h2>
                        <span>Đây là nhận định của các chuyên gia tại Hội thảo Kinh tế Việt Nam 2023: SMEs đối diện và vượt bão do Tổ chức Giáo dục Đào tạo PTI và PBS tổ chức chiều 8/4, khi nhận định về bức tranh vĩ mô tác động tới khu vực kinh tế doanh nghiệp tư nhân Việt Nam.</span>
                    </h2>
                    <p>
                        <span>Nhận định về kinh tế thế giới tại hội thảo, PGS. TS Trần Đình Thiên, nguyên Viện trưởng Viện Kinh tế Việt Nam chỉ ra, có “3 cơn gió ngược” đang thổi vào nền kinh tế thế giới nói chung và Việt Nam nói riêng. Đó là lạm phát tăng, điều kiện tài chính xấu và tăng trưởng suy giảm. Theo vị chuyên gia, bối cảnh “bất thường” đang dần trở nên “bình thường” và thế giới đang tư duy lại tương quan sức mạnh cũng như cách thức hành động.</span>
                    </p>
                    <p>
                        <span>Ông Thiên cho biết, thế giới đang đề cập đến một khái niệm rất mới là không chỉ năm 2023 khó khăn mà nguy cơ đối mặt với “một thập niên mất mát toàn cầu” như World Bank nhận định. “Kinh tế thế giới đang được dự báo tăng trưởng tiếp tục giảm. Chấn động này sẽ tác động những nền kinh tế mở trong đó có Việt Nam. Bối cảnh kinh tế thế giới dội vào nền kinh tế Việt Nam nhiều tác động gồm áp lực lãi suất cao, đơn hàng giảm sút”, ông Trần Đình Thiên chỉ ra.</span>
                    </p>
                    <p>
                        <img src="/imgACTech/tintuc/anh-1-2-jpg-1659083389-7827-1659083708-860x0-8661.jpg" />
                    </p>
                    <p>
                        <span>Tuy nhiên, PGS. TS Trần Đình Thiên cũng chỉ ra một nghịch lý là tăng trưởng của kinh tế tư nhân và tăng trưởng GDP đang có sự đối ngược nhau. Năm 2022 chính là mốc thời gian bộc lộ những điểm yếu của khu vực kinh tế tư nhân, để Chính phủ có cơ hội đánh giá và đưa ra giải pháp thay đổi.</span>
                    </p>

                    <p>
                        <span>Dẫn chứng nhìn thấy rõ nhất là quý 1/2023 đã chứng kiến đầu tàu kinh tế TP HCM giảm mạnh, chỉ tăng trưởng 0,7%. Đồng Nai, Bình Dương cũng có sự giảm sút. Ở miền Bắc – trung tâm gắn với FDI là Bắc Ninh cũng tăng trưởng âm 11,8%.</span>
                    </p>
                    <p>
                        <span>Số doanh nghiệp thành lập mới trong quý 1 ghi nhận sự sụt giảm 5,4%, chỉ đạt 57.000 doanh nghiệp, trong khi số doanh nghiệp rút lui khỏi thị trường tăng 17,4% với hơn 60.200 doanh nghiệp.</span>
                    </p>
                    <p>
                        <span>“Đây là những báo động của nền kinh tế. Đòi hỏi phải có các giải pháp mạnh mẽ mang lại sự thay đổi. Trong thời gian qua, Chính phủ đã đưa ra những chính sách có ý nghĩa thực tế, sốc lại niềm tin cho cộng đồng doanh nghiệp như nghị định về trái phiếu doanh nghiệp, hạ lãi suất, giảm thủ tục hành chính”, ông Trần Đình Thiên nhấn mạnh.</span>
                    </p>
                    <p>
                        <span>Bất động sản – một trong hai tử huyệt nền kinh tế</span>
                    </p>
                    <p>
                        <span>Cùng chung ý kiến với ông Thiên về bối cảnh “3 cơn gió ngược”, TS. Cấn Văn Lực, Chuyên gia Kinh tế trưởng BIDV, chỉ ra các yếu tố khó khăn cho doanh nghiệp. Trong đó, có môi trường lãi suất cao; kinh tế suy giảm những tín hiệu tốt là có thể đánh giá nhẹ nhàng và chỉ trong thời gian ngắn trong 1 năm; thị trường tài chính tiền tệ toàn cầu rủi ro tác động đến Việt Nam.</span>
                    </p>
                    <p>
                        <span>Theo ông Lực, niềm tin và sự lạc quan là yếu tố quan trọng để doanh nghiệp vượt bão trong bối cảnh nhiều khó khăn.</span>
                    </p>


                    <p>
                        <img src="/imgACTech/tintuc/pti-733.png" />
                    </p>
                    <p>
                        <span>Hội thảo Kinh tế Việt Nam 2023: SMEs Đối diện và vượt bão do Trường doanh nhân (PTI) tổ chức, chiều 8/4</span>
                    </p>
                    <p>
                        <span>Nói riêng về ngành có nhiều tác động đến nền kinh tế Việt Nam thời gian qua, TS. Cấn Văn Lực nhận định bất động sản là một trong những “điểm huyệt của nền kinh tế” trong khi vẫn còn nhiều dư địa phát triển. Bất động sản Việt Nam có độ lan tỏa đến 35 ngành nghề lĩnh vực khác nhau, đặc biệt là 4 lĩnh vực xây dựng, du lịch, tài chính ngân hàng và lưu trú ăn uống. Riêng 4 lĩnh vực này đóng góp 22% GDP.</span>
                    </p>
                    <p>
                        <span>Như vậy, khoảng 1/3 GDP nền kinh tế liên quan đến bất động sản. Vốn FDI vào lĩnh vực bất động sản thường cao đứng thứ hai trong các lĩnh vực.</span>
                    </p>
                    <p>
                        <span>Theo ông Cấn Văn Lực, có 6 yếu tố tác động lớn nhất liên quan đến bất động sản, gồm pháp lý; kinh tế vĩ mô; quy hoạch và cơ sở hạ tầng; tiền; tài chính (thuế, phí, vốn, giao dịch trên thị trường sơ cấp và thứ cấp); thông tin dữ liệu và tính minh bạch.</span>
                    </p>
                    <p>
                        <span>Do đó, vị chuyên gia này cho rằng, để tháo gỡ những khó khăn của thị trường bất động sản hiện nay cần phát triển cân bằng, hài hòa hơn thị trường tài chính, kiến tạo phát triển song vẫn kiểm soát rủi ro. Ông Lực kiến nghị Chính phủ quan tâm nhiều hơn đến kiểm soát rủi ro tài chính, đảm bảo quyền lợi chính đáng của nhà đầu tư trong các vụ việc vừa qua.</span>
                    </p>
                    <p>
                        <span>Về phía doanh nghiệp, TS Cấn Văn Lực đề cập đến tầm quan trọng của việc lên kế hoạch cụ thể, khả thi trong thanh toán nợ trái phiếu doanh nghiệp đáo hạn, nhất là trong 2 năm 2023 – 2024. Theo ông, doanh nghiệp cần đa dạng hóa nguồn vốn, ngoài kênh tín dụng ngân hàng, còn có phát hành trái phiếu, cổ phiếu, quỹ đầu tư, thuê tài chính.</span>
                    </p>
                    <p>
                        <span>Doanh nghiệp cũng cần lưu ý huy động vốn gắn với mục đích sử dụng vốn cụ thể, hạn chế đầu tư dàn trải. Hướng tới minh bạch, chuyên nghiệp, nhất là hồ sơ thuế, tín dụng, hồ sơ phát hành chứng khoán, thực hiện các cam kết.</span>
                    </p>
                    <p>
                        <strong>Công ty phần mềm ACTech rất vinh dự, tự hào khi được đồng hành và là nhà tài trợ Kim Cương cho chương trình Hội Thảo “Kinh tế Việt Nam 2023: Đối diện và vượt bão” được tổ chức tại Khách sạn Rex, Quận 1, TP. Hồ Chí Minh. Chúng tôi cam kết sẽ đồng hành hỗ trợ các doanh nghiệp chuyển đổi số thành công, toàn diện và có hệ thống.</strong>
                    </p>
                    <p>
                        <strong>Để được tư vấn chi tiết về sản phẩm phù hợp, vui lòng liên hệ:</strong>
                    </p>
                    <p>
                        <strong>Hotline: +84 936 825 566 / +84 906 083 998</strong>
                    </p>

                    <h2 className={styles.comment_reply_title}>Trả lời</h2>
                    <p>
                        <span>Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</span>
                    </p>
                    <p>
                        <strong>Bình luận *</strong>
                    </p>
                    <p>
                        <textarea name="comment" className={styles.textarea} ></textarea>
                    </p>
                    <p>
                        <strong>Tên *</strong>
                    </p>
                    <p>
                        <input className={styles.input}/>
                    </p>
                    <p>
                        <strong>Email *</strong>
                    </p>
                    <p>
                        <input className={styles.input}/>
                    </p>
                    <p>
                        <strong>Trang web</strong>
                    </p>
                    <p>
                        <input className={styles.input}/>
                    </p>
                    <p>
                        <input type="checkbox"/>
                        Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi.
                    </p>
                    <p>
                        <input type="submit" value="Gửi bình luận" className={styles.submit}/>
                    </p>
                </div>
            </div>
        </DefaultLayout>
    )
}