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
                ACTech MRP – Công nghệ Quản lý sản xuất tự động thông minh tinh gọn
                </h1>
                <div className={styles.page_content}>
                    <h2>
                        <span>Với thời đại công nghiệp 4.0 hiện nay, công nghệ ngày càng trở nên quan trọng và tác động đáng kể đến các ngành công nghiệp truyền thống. Trong lĩnh vực sản xuất, việc áp dụng các công nghệ mới giúp tăng cường hiệu suất, đồng thời giảm thiểu lãng phí và tối ưu hóa quy trình sản xuất. </span>
                    </h2>
                    <p>
                        <span>Được đầu tư và phát triển bởi công ty phần mềm ACTech, ACTech MRP là nền tảng công nghệ quản lý sản xuất tự động thông minh tinh gọn, đáp ứng nhu cầu sản xuất của doanh nghiệp.</span>
                    </p>
                    <p>
                        <img src="/imgACTech/tintuc/z4431490292013_95ff23ed24500b420d6c78ef42a73790-1024x1024.jpg" />
                    </p>
                    <p>
                        <span><b>ACTech MRP</b> là một hệ thống quản lý sản xuất được xây dựng dựa trên nền tảng công nghệ 4.0, kết hợp các yếu tố như trí tuệ nhân tạo (AI), học máy (Machine Learning) và Internet of Things (IoT). Nền tảng cung cấp cho doanh nghiệp khả năng giám sát, dự báo và điều phối quy trình sản xuất một cách tự động, giúp tối ưu hóa sự linh hoạt và nhanh chóng thích ứng với nhu cầu thay đổi. Đặc biệt, khi ứng dụng ACTech MRP, doanh nghiệp sẽ hạn chế tối đa các lỗi thường mắc phải như:</span>
                    </p>
                    <ul>
                        <li>Sản xuất chưa đáp ứng được kế hoạch, thời gian, năng xuất, hiệu quả hoạt động </li>
                        <li>Mắc lỗi thao tác nhân viên, máy móc hay hỏng hóc, các bộ phận hoạt động rời rạc.</li>
                        <li>Lãng phí nguyên vật liệu vượt định mức sản xuất, nhân lực dư thừa.</li>
                        <li>Nhà quản lý khó nắm bắt từng công đoạn sản xuất.</li>
                        <li>Sản phẩm lỗi sai hỏng, tồn kho nhiều.</li>
                        <li>Báo cáo chưa thể hiện được hết thực trạng trong quá trình sản xuất. </li>
                    </ul>
                    <p>
                        <span>ACTech thấu hiểu được những khó khăn, khúc mắc trong quá trình các doanh nghiệp đang gặp phải để từ đó phát triển nền tảng ACTech MRP giúp giải quyết triệt để những phương pháp quản trị sản xuất tiên tiến, tự động hóa quy trình, công đoạn trong sản xuất mang đến hiệu xuất, năng xuất cao cho doanh nghiệp. </span>
                    </p>
                    <p>
                        <span>Với <b>ACTech MRP</b>, nhà quản trị nắm bắt toàn diện tình hình sản xuất một cách chính xác và nhanh chóng từ khâu tiếp nhận đơn hàng, lập kế hoạch sản xuất đến khâu giao hàng, tối ưu nguyên vật liệu đầu vào, kiểm soát hiệu quả sản xuất, tránh thất thoát, theo dõi hoạt động sản xuất ở mọi nơi, vào mọi thời điểm, trên một nền tảng. ACTech MRP cung cấp các giải pháp quản trị thông minh, tinh gọn, quản lý tổng thể quy trình sản xuất, từ lập kế hoạch, mua hàng, quản lý kho, theo dõi sản xuất, đến vận chuyển và giao hàng. Hệ thống này tự động hóa nhiều công việc thủ công và cung cấp thông tin trực tiếp và chính xác cho các bộ phận liên quan. Nó giúp tăng cường sự liên kết và tương tác giữa các phòng ban trong doanh nghiệp, từ bộ phận sản xuất đến bộ phận mua hàng và kế toán.</span>
                    </p>
                    <p>
                        <img src="/imgACTech/tintuc/MRP-smart-factory-working-person-using-wireless-technology-control-1024x410.png" />
                    </p>
                    <p>
                        <span>Một trong những ưu điểm nổi bật của ACTech MRP là khả năng dự báo và tối ưu hóa nguồn lực. Hệ thống phân tích dữ liệu lịch sử, đưa ra mô hình dự đoán để ước lượng nhu cầu sản xuất và lập kế hoạch theo cách tối ưu nhất. Điều này giúp doanh nghiệp giảm thiểu rủi ro tồn kho, lãng phí nguyên vật liệu cùng với việc đảm bảo nguồn cung cấp liên tục và hiệu quả.</span>
                    </p>
                    <p>
                        <span>ACTech MRP cũng hỗ trợ giám sát thời gian thực và theo dõi hiệu suất sản xuất. Các cảm biến IoT được tích hợp vào các thiết bị sản xuất để tổng hợp dữ liệu về tình trạng máy móc, tiến độ sản xuất và chất lượng sản phẩm. Nhờ đó, doanh nghiệp có thể xác định sự cố sớm, tăng cường bảo trì và cải thiện quy trình sản xuất.</span>
                    </p>
                    <p>
                        <span>Hơn nữa, ACTech MRP cung cấp khả năng tương tác với người dùng thông qua giao diện người dùng thân thiện và dễ sử dụng. Người dùng có thể truy cập hệ thống từ xa, theo dõi quy trình sản xuất và thực hiện điều chỉnh nhanh chóng khi cần thiết. Điều này tạo điều kiện thuận lợi cho việc quản lý từ xa và làm việc đội nhóm đồng thời.</span>
                    </p>

                    <p>
                        <img src="/imgACTech/tintuc/MRP.png" />
                    </p>
                    <p>
                        <span>Việc ứng dụng nền tảng ACTech MRP sẽ giúp doanh nghiệp giảm thiểu lãng phí, tăng sự linh hoạt và tính liên kết trong quy trình sản xuất. Từ đó tạo điều kiện quan trọng trong việc phát triển các hệ thống sản xuất thông minh và giúp các doanh nghiệp tiếp cận với tiềm năng của công nghiệp 4.0.</span>
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