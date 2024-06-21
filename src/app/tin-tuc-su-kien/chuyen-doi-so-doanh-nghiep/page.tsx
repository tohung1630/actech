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
                Chỉ có 30% doanh nghiệp chuyển đổi số thành công, doanh nghiệp của bạn có nằm trong số đó?
                </h1>
                <div className={styles.page_content}>
                    <h2>
                        <span>Trong thời đại số hóa ngày càng phát triển, việc chuyển đổi số đã trở thành một yêu cầu cấp bách đối với doanh nghiệp. Tuy nhiên, việc chuyển đổi số thành công không chỉ đơn thuần là việc triển khai công nghệ mới, mà còn liên quan đến cách doanh nghiệp thay đổi quy trình, nền văn hóa và tư duy làm việc.</span>
                    </h2>
                    <p>
                        <img src="/imgACTech/tintuc/close-up-hands-business-concept-1-1024x682.jpg" />
                    </p>
                    <p>
                        <span>Doanh nghiệp chuyển đổi số là quá trình mà một doanh nghiệp sử dụng công nghệ số và các công cụ kỹ thuật số để cải thiện và nâng cao hiệu suất các hoạt động kinh doanh của mình. Chuyển đổi số nhằm thay đổi cách thức tổ chức, quản lý và vận hành doanh nghiệp, từ việc sử dụng công nghệ thông tin cơ bản đến việc áp dụng những tiến bộ mới như trí tuệ nhân tạo, Internet of Things (IoT), blockchain và nhiều công nghệ khác.</span>
                    </p>

                    <p>
                        <span>Quá trình chuyển đổi số đòi hỏi sự thay đổi trong cách thức doanh nghiệp tư duy và thực hiện công việc. Nó có thể bao gồm các phần tử như tạo lập chiến lược số, xây dựng cơ sở hạ tầng kỹ thuật số, triển khai hệ thống quản lý tương tác khách hàng (CRM), tối ưu hóa quy trình làm việc bằng tự động hóa, phát triển ứng dụng di động và website, và khai thác dữ liệu phân tích để đưa ra quyết định thông minh.</span>
                    </p>
                    <p>
                        <span>Lợi ích của việc chuyển đổi số cho doanh nghiệp là nâng cao năng suất lao động, tăng sự linh hoạt và thích ứng nhanh chóng đối với thay đổi thị trường, cải thiện sự phản hồi và trải nghiệm của khách hàng, tạo ra các mô hình kinh doanh mới và nâng cao khả năng cạnh tranh. Tuy nhiên, số lượng doanh nghiệp chuyển đổi số đạt hiệu quả vẫn chưa đạt được con số lý tưởng. Theo khảo sát toàn cầu, số lượng doanh nghiệp thành công trong quá trình chuyển đổi số chỉ dừng lại ở con số khiêm tốn 30%, điều này cho thấy 70% cho các nỗ lực chuyển đổi số của các doanh nghiệp bị thất bại trong việc đặt các mục tiêu đề ra. </span>
                    </p>
                    <p>
                        <span>Điều này là hoàn toàn dễ hiểu bởi chuyển đổi số là hành trình cần làm đúng – đủ, thay đổi hoàn toàn quy trình – bộ máy của doanh nghiệp. Chuyển đổi số sẽ không thành công nếu doanh nghiệp chỉ “chắp vá”.</span>
                    </p>
                    <p>
                        <span>Lấy ví dụ,</span>
                    </p>
                    <p>
                        <span>Nếu doanh nghiệp muốn đưa công nghệ vào việc vận hành, quản lý kinh doanh và chăm sóc khách hàng. Nhưng vẫn đi theo lối mòn cũ, sử dụng các công cụ thủ công (Excel, chat,…) để kết nối, báo cáo; Không đồng nhất quy trình tổng hợp thống kê số liệu đầy đủ để có cơ sở đo lường,…. Thì việc thất bại trong chuyển đổi số là điều đương nhiên.</span>
                    </p>

                    <p>
                        <img src="/imgACTech/tintuc/Anh-content-Business_1-1024x640.jpeg" />
                    </p>
                    <p>
                        <span>Để chuyển đổi số thành công, doanh nghiệp cần đề ra các mục tiêu:</span>
                    </p>
                    <p>
                        <span>1/ Số hóa toàn bộ quy trình kinh doanh trên giấy</span>
                    </p>
                    <p>
                        <span>2/ Số hóa toàn bộ quy chu trình chăm sóc khách hàng, tổng hợp, báo cáo</span>
                    </p>
                    <p>
                        <span>Hai mục tiêu cốt lõi này cũng là “kim chỉ nam” của ACTech Business. Ứng dụng ACTech Business vào kinh doanh và chăm sóc khách hàng, doanh nghiệp sẽ tối giản được mọi quy trình chuyển đổi số. Công việc của từng nhân sự được phân công, phân quyền cụ thể, chi tiết. Quy trình kinh doanh được lên khung bài bản, chu trình chăm sóc khách được tối ưu hóa, chuyên nghiệp. Chỉ cần 1 cú đúp chuột, nhà quản trị có thể dễ dàng nắm tình hình kinh doanh của doanh nghiệp mà không cần yêu cầu báo cáo, tổng hợp rời rạc từ các phòng ban.</span>
                    </p>
                    <p>
                        <span>Đồng thời, ACTech Business cũng sửa lỗi, tạo điều kiện để doanh nghiệp loại bỏ những sai lầm hay mắc phải như:</span>
                    </p>
                    <ul>
                        <li>Kế hoạch kinh doanh chưa nâng cao được hiệu suất, mục tiêu chưa hoàn thành </li>
                        <li>Không tối ưu được quá trình chăm sóc khách hàng: bỏ quên khách hàng, đánh mất khách hàng, chăm sóc khách hàng chậm dẫn đến doanh thu giảm.</li>
                        <li>Quản lý quy trình bán hàng đang theo cách thủ công, khó theo dõi </li>
                        <li>Không kiểm soát, đánh giá được tiến độ sales, telesale, marketing. Thất thoát data khách hàng, tỷ lệ khách hàng quay lại thấp.</li>
                        <li>Sử dụng phần mềm rời rạc không đồng bộ, thao tác tính năng khó sử dụng.</li>
                        <li>Không biết kênh quảng cáo nào, chiến dịch marketing nào đang đem lại hiệu quả trong việc tìm kiếm khách hàng tiềm năng hay lãng phí ngân sách.</li>
                        <li>Báo cáo lên ban lãnh đạo chưa thể hiện hết được thực trạng của thị trường, khách hàng và nhân viên, phòng ban đang mắc phải. Tốn nhiều giờ để làm báo cáo, thống kê nhưng không chính xác, khoa học. </li>
                        <li>Các phòng ban không hoàn thành mục tiêu đặt ra ảnh hưởng đến sự tăng trưởng và phát triển của công ty. </li>
                    </ul>

                    <p>
                        <img src="/imgACTech/tintuc/PR3_2-1024x649.jpg" />
                    </p>
                    <p>
                        <span>Như vậy, chuyển đổi số giúp doanh nghiệp nắm bắt và áp dụng các công nghệ mới nhất để nâng cao hiệu suất và tạo ra lợi thế cạnh tranh. Và bằng cách sử dụng ACTech Business doanh nghiệp có thể chuyển đổi số dễ dàng, từ đó cải thiện quy trình kinh doanh, tăng cường tương tác với khách hàng, và tạo ra các sản phẩm và dịch vụ mới.</span>
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