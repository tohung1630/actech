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
                Xu hướng của các phần mềm Quản lý kinh doanh CRM hiệu quả hiện nay
                </h1>
                <div className={styles.page_content}>
                    <h2>
                        <span>Được nhận định là “cánh tay phải đắc lực” giúp doanh nghiệp bắt nhịp với công cuộc chuyển đổi số, các phần mềm quản lý kinh doanh CRM hiện nay đều được lập trình thông minh, dễ sử dụng nhằm tối ưu hóa lợi ích cho doanh nghiệp.                        </span>
                    </h2>
                    <p>
                        <img src="/imgACTech/tintuc/PR1_1-scaled.jpg" />
                    </p>
                    <p>
                        <strong>Hiện đại, tùy biến và dễ sử dụng</strong>
                    </p>
                    <p>
                        <span>Xu hướng phát triển phần mềm kinh doanh hiện nay đi theo khuynh hướng thúc đẩy để khách hàng làm trung tâm, mục tiêu là cung cấp cho họ những trải nghiệm toàn diện, phù hợp và đa kênh. </span>
                    </p>
                    <p>
                        <span>Hầu hết các phần mềm hỗ trợ kinh doanh đều được lập trình dựa trên những tiến bộ của khoa học kỹ thuật, ứng dụng các kỹ thuật hiện đại như trí tuệ nhân tạo (AI), big data, điện toán đám mây, IoT… và cho phép người dùng truy cập và sử dụng nền tảng bất kỳ nơi nào.</span>
                    </p>
                    <p>
                        <img src="/imgACTech/tintuc/825c6107f98525db7c94.jpg" />
                    </p>
                    <p>
                        <span>Cùng với đó, các dự án phần mềm kinh doanh cũng tiếp cận kỹ thuật mới, chuyển đổi từ các ứng dụng toàn bộ sang các ứng dụng được phát triển dựa trên việc áp dụng các mô hình kiến trúc, phân chia dự án phần mềm thành nhiều dịch vụ nhỏ tồn tại độc lập (mô hình microservices) và các phương pháp tiếp cận mới, tạo điều kiện cho việc cấu thành dịch vụ/ứng dụng. </span>
                    </p>
                    <p>
                        <span>Các phần mềm kinh doanh cũng được tùy biến linh hoạt giúp doanh nghiệp có thể vận hành và sử dụng phù hợp với tình hình thực tế của đơn vị mình. </span>
                    </p>
                    <p>
                        <img src="/imgACTech/tintuc/PR1_2-scaled.jpeg" />
                    </p>
                    <p>
                        <strong>Tích hợp đa chức năng</strong>
                    </p>

                    <p>
                        <span>Được nhiều doanh nghiệp quan tâm, ứng dụng thời gian gần đây, nền tảng kinh doanh và chăm sóc khách hàng chuyên nghiệp – ACTech Business của Công ty phần mềm ACTech nhận được nhiều phản hồi tích cực của thị trường.</span>
                    </p>
                    <p>
                        <span>Dù “sinh sau đẻ muộn”, nhưng ACTech Business có khả năng tối ưu quá mọi quy trình liên quan đến bán hàng, chăm sóc khách hàng, quản trị marketing, báo cáo và thống kê. Đặc biệt, lợi thế đi sau cũng giúp ACTech Business thấu hiểu những vấn đề các phần mềm, nền tảng đi trước gặp phải như cách sử dụng phức tạp, khó tùy biến cho nhiều ngành nghề,… Từ đó điều chỉnh và trở nên dễ sử dụng hơn rất nhiều.</span>
                    </p>

                    <p>
                        <span>ACTech Business tích hợp “all in one” giải quyết tất cả bài toán của doanh nghiệp liên quan đến kinh doanh và chăm sóc khách hàng. Tại đây có đầy đủ các mẫu báo cáo, tích hợp kênh chạy marketing, chu trình chăm sóc khách hàng,… luôn được cập nhật và tinh chỉnh phù hợp cho mỗi đơn vị kinh doanh. Nhà quản lý có thể chủ động quản lý, xuất thông tin ra file để quản lý, chỉnh sửa, tổng hợp dễ dàng.</span>
                    </p>


                    <p>
                        <span>Đặc biệt, ACTech Business cũng được cài đặt tính năng bảo mật như mã hóa dữ liệu, xác thực người dùng và giám sát hoạt động đăng nhập nhằm đảm bảo mọi thông tin và dữ liệu của doanh nghiệp, khách hàng đều được lưu trữ an toàn.</span>
                    </p>
                    <p>
                        <span>Bà Lê Phương Lan, CEO một doanh nghiệp bất động sản tại Hà Nội và Thành phố Hồ Chí Minh cho biết: Mặc dù mới ứng dụng nền tảng ACTech Business nhưng tôi đã nhìn thấy rất rõ lợi ích phần mềm này mang đến cho công ty tôi thời điểm này. Thị trường có dấu hiệu trầm lắng, mọi doanh nghiệp đều cần tối ưu chi phí. Và với ACTech Business, chúng tôi đã chuẩn hóa hơn quy trình chăm sóc khách, tiết kiệm được nhiều thời gian, công sức và tài chính cho mỗi đợt chạy marketing, lọc data và chăm sóc khách hàng. Tôi cảm thấy vô cùng hài lòng.</span>
                    </p>

                    <p>
                        <span>Hiện nay, ACTech Business đang được giới thiệu ra thị trường với nhiều ưu đãi hấp dẫn cho những khách hàng đầu tiên, cài đặt sớm nhất như: Miễn phí bảo hành trọn đời, hỗ trợ sử dụng,….</span>
                    </p>



                    <p>
                        <strong>Để được tư vấn chi tiết vui lòng liên hệ:</strong>
                    </p>
                    <p>
                        <strong>Hotline: +84 936 825 566 </strong>
                    </p>
                    <p>
                        <strong>Link đăng kí trải nghiệm: https://actechsmt.com/dang-ky-trai-nghiem-san-pham/</strong>
                    </p>
                    <p>
                        <strong>Đọc bài viết tại:<a target="_blank" href="https://www.24h.com.vn/kham-pha-cong-nghe/xu-huong-cua-cac-phan-mem-quan-ly-kinh-doanh-crm-hieu-qua-hien-nay-c675a1458582.html"> https://www.24h.com.vn/kham-pha-cong-nghe/xu-huong-cua-cac-phan-mem-quan-ly-kinh-doanh-crm-hieu-qua-hien-nay-c675a1458582.html</a> </strong>
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