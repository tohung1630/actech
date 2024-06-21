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
                    Xu hướng của ERP trong tương lai
                </h1>
                <div className={styles.page_content}>
                    <h2>
                        <span>Hệ thống ERP hiện nay được ví như một trợ thủ đắc lực trong doanh nghiệp, hỗ trợ quản lý tất cả các phòng ban của doanh nghiệp một cách tự động hóa, giảm bớt thao tác, công việc thủ công gây lãng phí thời gian cho doanh nghiệp. Hiện nay, hệ thống ERP rất quan trọng với nhiều doanh nghiệp thuộc quy mô kinh doanh và ngành nghề khác nhau.</span>
                    </h2>
                    <p>
                        <img src="/imgACTech/tintuc/businesspeople-meeting-plan-analysis-graph-company-finance-strat-1024x477.jpg" />
                    </p>
                    <p>
                        <span>ERP (Enterprise Resource Planning) là hệ thống quản lý doanh nghiệp toàn diện. ERP tích hợp tất cả các phần mềm quản lý của mỗi phòng ban trong doanh nghiệp trên một nền tảng, thay vì nhân viên phải làm việc trên các phần mềm riêng lẻ như trước. ERP hoạt động giống như bộ não của doanh nghiệp. Hệ thống kết nối các quy trình, tích hợp các phần mềm quản lý từ nhiều bộ phận, giúp nhà quản trị có thể dễ dàng theo dõi tình hình hoạt động của doanh nghiệp chỉ trên một nền tảng,</span>
                    </p>
                    <p>
                        <span>Mục tiêu chính của ERP là tăng cường quản lý tổ chức, số hóa quy trình kinh doanh, cải thiện hiệu suất và tăng sự cạnh tranh của doanh nghiệp.</span>
                    </p>
                    <p>
                        <span>Cùng với sự phát triển của khoa học công nghệ, trong tương lai, ERP có thể có những xu hướng phát triển như:</span>
                    </p>
                    <p>
                        <strong>ERP tích hợp Điện toán đám mây (Cloud Computing)</strong>
                    </p>
                    <p>
                        <span>Hệ thống ERP phát triển dựa trên nền tảng đám mây sẽ tiếp tục gia tăng. Các giải pháp ERP dựa trên đám mây cho phép truy cập từ xa với bất kỳ thiết bị nào có kết nối internet, có thể linh hoạt tùy biến trong mọi hoạt động, giúp các doanh nghiệp theo dõi và quản lý quá trình làm việc một cách hiệu quả ngay cả khi họ không có mặt trực tiếp tại nhà máy hay văn phòng. Không cần đầu tư lớn vào phần cứng và hạ tầng máy chủ riêng biệt, doanh nghiệp có thể tiết kiệm chi phí về cơ sở hạ tầng thông qua việc sử dụng hệ thống tích hợp điện toán đám mây.</span>
                    </p>
                    <p>
                        <img src="/imgACTech/tintuc/rpa-concept-with-blurry-hand-touching-screen-1024x683.jpg" />
                    </p>
                    <p>
                        <strong>ERP với IoT (Internet of Things)</strong>
                    </p>
                    <p>
                        <span>Sự kết nối của các thiết bị thông minh thông qua Internet of Things (IoT) sẽ tạo ra nhiều dữ liệu và thông tin mới. IoT cho phép doanh nghiệp sử dụng các cảm biến để theo dõi thông tin theo thời gian thực về quá trình sản xuất, tình trạng máy móc, và điều kiện môi trường. ERP tích hợp IoT giúp tự động hóa việc thu thập và phân tích dữ liệu từ các cảm biến, cung cấp thông tin chính xác và chi tiết hơn về hoạt động sản xuất. Ngoài ra, IoT có thể cung cấp thông tin về đánh giá của khách hàng sau khi sử dụng sản phẩm, giúp cải thiện chất lượng sản phẩm và dịch vụ khách hàng.</span>
                    </p>
                    <p>
                        <span>Sự kết hợp giữa ERP và IoT sẽ mang lại những giá trị to lớn cho doanh nghiệp, đem đến những lợi ích cho tất cả các bộ phận trong doanh nghiệp như hiệu quả sản xuất, kiểm soát chất lượng, dịch vụ khách hàng,…. Từ đó, nhà lãnh đạo có thể đưa ra những quyết định chính xác và hiệu quả hơn dựa vào những thông tin từ dữ liệu số.</span>
                    </p>
                    <p>
                        <strong>Ứng dụng ERP trên di động</strong>
                    </p>
                    <p>
                        <span>Ứng dụng ERP trên thiết bị di động giúp người dùng hoàn thành công việc khi họ không sử dụng máy tính, truy cập và thao tác một cách dễ dàng, nhanh chóng. Nhân viên có thể hoàn thành các nhiệm vụ như báo cáo chi phí, ghi nhật ký cuộc gọi và theo dõi thời gian, đồng thời có thể xem trạng thái của quy trình công việc quan trọng hoặc phê duyệt từ điện thoại của họ.</span>
                    </p>
                    <p>
                        <span>ERP trên thiết bị di động cung cấp dữ liệu và thông tin chi tiết theo thời gian thực, giúp nhà quản lý có thể truy cập thông tin quan trọng ngay lập tức để đưa ra quyết định nhanh chóng.</span>
                    </p>
                    <p>
                        <img src="/imgACTech/tintuc/athletic-woman-using-her-smartphone-1024x683.jpg" />
                    </p>
                    <p>
                        <span>Trong thời đại 4.0, một hệ thống ERP thiếu tính linh hoạt sẽ gây trở ngại cho quá trình số hóa toàn diện của doanh nghiệp. Ngược lại, một hệ thống ERP đáp ứng xu hướng hiện đại sẽ hỗ trợ mạnh mẽ cho doanh nghiệp trong việc triển khai quá trình chuyển đổi số, mang lại lợi ích cho cả doanh nghiệp và khách hàng. Do đó, những xu hướng được đề cập ở trên là những xu hướng không thể thiếu trong tương lai gần của phần mềm ERP.</span>
                    </p>

                    <p>
                        <strong>Để được tư vấn chi tiết về hệ thống ERP của ACTech, vui lòng liên hệ:</strong>
                    </p>
                    <p>
                        <strong>Hotline: (+84) 936 825 566 / (+84) 906 083 998</strong>
                    </p>
                    <p>
                        <strong>Fanpage: <a target="_blank" href="https://www.facebook.com/actechsmt/">https://www.facebook.com/actechsmt/</a></strong>
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