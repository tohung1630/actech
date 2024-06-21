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
                Phần mềm ACTech Business, Tối ưu chi phí – Gia tăng lợi nhuận – Bứt phá doanh thu!
                </h1>
                <div className={styles.page_content}>
                    <h2>
                        <span>Trong môi trường kinh doanh cạnh tranh ngày nay, việc tối ưu chi phí, gia tăng lợi nhuận và bứt phá doanh thu là những yếu tố quan trọng để đạt được sự thành công. Phần mềm ACTech Business – Quản lý kinh doanh thông minh là một giải pháp toàn diện được thiết kế để giúp doanh nghiệp dễ dàng đạt được mục tiêu này.</span>
                    </h2>
                    <p>
                        <img src="/imgACTech/tintuc/z4281903946834_9e9f2376fc016e6ea6a199e4dc67f6f4-1024x470.jpg" />
                    </p>
                    <p>
                        <span>ACTech Business được phát triển bởi công ty phần mềm ACTech, doanh nghiệp có nhiều năm kinh nghiệm trong việc sản xuất, phát triển công nghệ thông tin, phần mềm, nền tảng ứng dụng công nghệ,…  ACTech hiểu được thực tế thị trường cần những giải pháp phù hợp với tình hình kinh tế số, giúp doanh nghiệp dễ dàng nắm bắt và kinh doanh trong thời đại mới. Do đó, sự ra đời của ACTech Business giúp quản lý mối quan hệ khách hàng mạnh mẽ, đồng thời có khả năng tích hợp với các công cụ và chức năng quản lý tự động hóa cho doanh nghiệp. </span>
                    </p>
                    <p>
                        <span>Nền tảng cung cấp những tính năng độc đáo, đa dạng giúp doanh nghiệp tối ưu hóa chi phí, gia tăng lợi nhuận và bứt phá doanh thu. Ứng dụng ACTech Business sẽ giúp doanh nghiệp hạn chế những lỗi hay mắc phải như:</span>
                    </p>
                    <ul>
                        <li>Kế hoạch kinh doanh chưa nâng cao được hiệu suất, mục tiêu chưa hoàn thành .</li>
                        <li>Không tối ưu được quá trình chăm sóc khách hàng: bỏ quên khách hàng, đánh mất khách hàng, chăm sóc khách hàng chậm dẫn đến doanh thu giảm.</li>
                        <li>Quản lý quy trình bán hàng đang theo cách thủ công, khó theo dõi .</li>
                        <li>Không kiểm soát, đánh giá được tiến độ sales, telesale, marketing. Thất thoát data khách hàng, tỷ lệ khách hàng quay lại thấp.</li>
                        <li>Sử dụng phần mềm rời rạc không đồng bộ, thao tác tính năng khó sử dụng.</li>
                        <li>Không biết kênh quảng cáo nào, chiến dịch marketing nào đang đem lại hiệu quả trong việc tìm kiếm khách hàng tiềm năng hay lãng phí ngân sách.</li>
                        <li>Báo cáo lên ban lãnh đạo chưa thể hiện hết được thực trạng của thị trường, khách hàng và nhân viên, phòng ban đang mắc phải. Tốn nhiều giờ để làm báo cáo, thống kê nhưng không chính xác, khoa học. </li>
                        <li>Các phòng ban không hoàn thành mục tiêu đặt ra ảnh hưởng đến sự tăng trưởng và phát triển của công ty.</li>
                    </ul>

                    <p>
                        <img src="/imgACTech/tintuc/PR1_2-1024x611.jpeg" />
                    </p>
                    <p>
                        <span>Đồng thời, ACTech Business cũng mang tới giải pháp chăm sóc khách hàng và kinh doanh hiệu quả với:</span>
                    </p>
                    <ul>
                        <li>Quản lý mục tiêu, kế hoạch kinh doanh theo hệ thống, quy trình chuyên nghiệp. </li>
                        <li>Thực hiện kế hoạch mục tiêu quản lý KPI hiệu quả đến từng bộ phận công ty.</li>
                        <li>Giúp cấp trên theo dõi và quản lý đội ngũ bán hàng dễ dàng; nâng cao hiệu suất đội ngũ quản lý cấp trung.</li>
                        <li>Giúp doanh nghiệp tối ưu quy trình bán hàng, chăm sóc khách hàng đạt được hiệu quả cao thông qua các công cụ, tính năng quản lý được cập nhật thường xuyên, hiện đại nhất. </li>
                        <li>Quản lý toàn bộ thông tin khách hàng một cách tập trung, lưu trữ thông tin khách hàng đầy đủ giúp doanh nghiệp có thể theo dõi, phân tích và tìm ra cơ hội kinh doanh kịp thời. </li>
                        <li>Tích hợp thông tin đa kênh nhằm kết nối với khách hàng qua email – mạng xã hội – website, tối ưu hoạt động bán hàng và gia tăng doanh số.</li>
                        <li>Kiểm soát được công việc của nhân viên, đồng thời lưu trữ lại quá trình làm việc với khách hàng, giúp lãnh đạo dễ dàng theo sát, hỗ trợ và quản lý.</li>
                        <li>Tự động truy xuất lỗi hệ thống các mục tiêu chưa hoàn thành từ đó cân bằng và xử lý toàn bộ lỗi hệ thống phòng ban. </li>
                        <li>Phân quyền truy cập một cách chi tiết nhất: chỉ định người dùng truy cập xem thông tin, báo cáo. Tránh được những vấn đề sai sót hay trùng lặp trong theo dõi, chăm sóc khách hàng. </li>
                        <li>Nhà quản lý dễ dàng kiểm soát chặt chẽ các số liệu, tiết kiệm chi phí trong hoạt động vận hành .</li>
                        <li>Phân tích dữ liệu khách hàng, thị trường, xu hướng ngành hàng, sản phẩm.</li>
                        <li>Quản lý và tối ưu chi phí marketing, quảng cáo. </li>
                        <li>Báo cáo hiệu suất, năng suất, doanh thu, doanh số, tiến độ kinh doanh. </li>
                        <li>Báo cáo chiến dịch, ngân sách, chỉ số chiến dịch PR – Marketing</li>
                    </ul>
                    <p>
                        <img src="/imgACTech/tintuc/27115-1024x717.jpg" />
                    </p>
                    <p>
                        <span>Những lợi ích này mang tới cho doanh nghiệp khả năng:</span>
                    </p>
                    <ul>
                        <li>Quản lý mối quan hệ khách hàng: ACTech Business cung cấp một giao diện tiện ích để quản lý thông tin khách hàng, tương tác và quản lý các hoạt động kinh doanh. Nó giúp doanh nghiệp nắm bắt thông tin quan trọng về khách hàng, từ đó xây dựng một chiến lược tiếp thị hiệu quả, tăng cường tương tác và tạo mối quan hệ lâu dài với khách hàng.</li>
                        <li>Tối ưu hóa chi phí: ACTech Business cung cấp các công cụ phân tích dữ liệu mạnh mẽ để phân loại và ưu tiên khách hàng theo giá trị và tiềm năng. Điều này giúp doanh nghiệp tập trung nguồn lực vào nhóm khách hàng quan trọng nhất và tối ưu hóa chi phí tiếp cận, quảng cáo và chăm sóc khách hàng. Kết quả là doanh nghiệp sẽ tiết kiệm được chi phí và tăng cường hiệu suất tiếp thị.</li>
                        <li>Gia tăng lợi nhuận: ACTech Business giúp nâng cao hiệu quả bán hàng và tối ưu hóa quy trình kinh doanh. Phần mềm cung cấp các tính năng như quản lý dữ liệu khách hàng, theo dõi hoạt động bán hàng, xây dựng và quản lý hợp đồng. Nhờ đó, doanh nghiệp có thể tăng cường khả năng chốt hợp đồng, tối đa hóa giá trị giao dịch và gia tăng lợi nhuận.</li>
                        <li>Bứt phá doanh thu: ACTech Business giúp doanh nghiệp nắm bắt và tận dụng các cơ hội kinh doanh. Phần mềm này cung cấp các tính năng như quản lý cơ hội kinh doanh, theo dõi tiềm năng khách hàng và tổ chức chiến dịch tiếp thị. Điều này giúp doanh nghiệp xây dựng một quy trình bán hàng hiệu quả, tăng cường khả năng chốt hợp đồng và bứt phá doanh thu.</li>
                    </ul>

                    <p>
                        <strong>Do đó, ứng dụng ACTech Business ngay hôm nay sẽ là giải pháp và hướng đi không thể bỏ qua của doanh nghiệp kinh doanh thời đại công nghệ số.</strong>
                    </p>
                    <p>
                        <strong>Liên hệ: Hotline: (+84) 936 825 566 / (+84) 906 083 998</strong>
                    </p>
                    <p>
                        <strong>Fanpage: <a target="_blank" href="Actechsmt.com">Actechsmt.com</a></strong>
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
                        <input className={styles.input} />
                    </p>
                    <p>
                        <strong>Email *</strong>
                    </p>
                    <p>
                        <input className={styles.input} />
                    </p>
                    <p>
                        <strong>Trang web</strong>
                    </p>
                    <p>
                        <input className={styles.input} />
                    </p>
                    <p>
                        <input type="checkbox" />
                        Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi.
                    </p>
                    <p>
                        <input type="submit" value="Gửi bình luận" className={styles.submit} />
                    </p>
                </div>
            </div>
        </DefaultLayout>
    )
}