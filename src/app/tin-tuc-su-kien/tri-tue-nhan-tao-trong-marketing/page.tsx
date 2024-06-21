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
                Ứng dụng của trí tuệ nhân tạo (AI) đem lại trong Marketing
                </h1>
                <div className={styles.page_content}>
                    <h2>
                        <span>Ứng dụng AI – Trí tuệ nhân tạo trong các lĩnh vực của cuộc sống ngày càng trở nên phổ biến. Trong đó, đưa AI vào các hoạt động marketing của doanh nghiệp cho thấy nhiều lợi ích, giúp doanh nghiệp tiết kiệm thời gian và chi phí vận hành. </span>
                    </h2>
                    <p>
                        <img src="/imgACTech/tintuc/tri-tue-nhan-tao-AI-tgroup-travel-6-1024x576.png" />
                    </p>
                    <p>
                        <span>Hiện nay, rất nhiều công ty lớn đầu tư và ứng dụng trí tuệ nhân tạo như: Google, Amazon, Apple, Facebook, Microsoft,… Dưới đây là một số ứng dụng AI phổ biến trong marketing giúp doanh nghiệp nắm bắt xu hướng công nghệ, khai thác trí tuệ nhân tạo một cách hiệu quả nhất:</span>
                    </p>
                    <p>
                        <strong>1/ Trong công cụ tìm kiếm</strong>
                    </p>
                    <p>
                        <span>Các dịch vụ tìm kiếm có thể ứng dụng AI để tối ưu hóa trải nghiệm tìm kiếm, giúp người dùng tra cứu thông tin một cách chính xác và nhanh chóng. Một hệ thống phổ biến đang được Google triển khai hiện nay là RankBrain. Thông qua nền tảng học máy (Machine Learning), RankBrain có thể hiểu các truy vấn tìm kiếm (từ khóa), đo lường cách người dùng tương tác với kết quả tìm kiếm, để từ đó phân loại kết quả tìm kiếm phù hợp nhất cho truy vấn của người dùng.</span>
                    </p>
                    <p>
                        <strong>2/ Xây dựng và phát triển mối quan hệ với khách hàng tiềm năng</strong>
                    </p>
                    <p>
                        <span>Một ứng dụng khác của AI trong hoạt động marketing đó là việc sử dụng hệ thống bán hàng ứng dụng trí tuệ nhân tạo để giao tiếp với khách hàng tiềm năng của công ty. Ví dụ như việc sử dụng Chatbot trong việc bán hàng, tư vấn, đặt chỗ giúp cá nhân hóa trải nghiệm của khách hàng, phản hồi khách hàng nhanh chóng. Điều này giúp cải thiện trải nghiệm mua sắm, dịch vụ cho khách hàng, tăng tỉ lệ tiếp cận được với khách hàng tiềm năng.  </span>
                    </p>
                    <p>
                        <img src="/imgACTech/tintuc/2304.i039.011.S.m004.c13.AI-generated-art-AI-powered-content-creation-isometric-1024x809.jpg" />
                    </p>
                    <p>
                        <strong>3/ Hoạt động bán hàng</strong>
                    </p>
                    <p>
                        <span>AI sử dụng xử lí ngôn ngữ tự nhiên (Natural Language Processing), nhờ đó các website bán hàng có thể gợi ý các sản phẩm phù hợp với nhu cầu hoặc cho phép tìm kiếm sản phẩm bằng giọng nói, bằng hình ảnh giống như giao tiếp với người bán hàng trong thực tế, nâng cao trải nghiệm của khách hàng.</span>
                    </p>
                    <p>
                        <strong>4/ Trong quảng cáo tự động (Programmatic Advertising)</strong>
                    </p>
                    <p>
                        <span> Bên cạnh ứng dụng trong hoạt động nghiên cứu khách hàng, bán hàng và công cụ tìm kiếm, các công ty có thể sử dụng những thế mạnh của computational advertising – chuỗi thuật toán cho phép các chuyên gia marketing cung cấp quảng cáo vào đúng thời điểm, dựa vào những yếu tố như nhân khẩu học, thói quen trong hoạt động online và những nội dung mà khách hàng xem khi quảng cáo xuất hiện.</span>
                    </p>
                    <p>
                        <strong>5/ Quảng cáo hình ảnh </strong>
                    </p>
                    <p>
                        <span> AI được ứng dụng trong quảng cáo hình ảnh để gợi ý những mẫu quảng cáo phù hợp trong từng trường hợp cụ thể. Dựa trên nền tảng học máy (Machine Learning) với một chuỗi thuật toán thông minh xử lý thông tin theo cách tương tự như não bộ của con người, công nghệ này còn có thể phân tích hiệu quả của chiến dịch quảng cáo, từ đó có sự điều chỉnh cần thiết để tăng cường thêm hiệu quả.</span>
                    </p>
                    <p>
                        <strong>6/ Hoạt động định giá</strong>
                    </p>
                    <p>
                        <span>Các chuyên gia marketing còn có thể ứng dụng AI trong hoạt động định giá. Cụ thể, dựa vào những gì khách hàng sẵn sàng trả cho sản phẩm trong hoàn cảnh tương tự ở quá khứ, các doanh nghiệp và các chuyên gia marketing có thể sử dụng Machine Learning để đưa ra mức giá tốt nhất cho hàng hóa và dịch vụ của người bán ở bất kỳ thời điểm nào. Điều đó giải thích tại sao khách hàng phải trả nhiều tiền hơn vào những ngày cuối tuần cho ứng dụng đặt khách sạn, chỗ ở hay giá vé máy bay lại khác nhau tùy theo thời điểm khách hàng mua.</span>
                    </p>
                    <p>
                        <span>Sự phát triển của trí tuệ nhân tạo mang đến nhiều lợi ích đáng kể cho lĩnh vực Marketing, giúp doanh nghiệp tìm kiếm thông tin, tạo nội dung, xác định đối tượng khách hàng mục tiêu và tăng cường hiệu quả quảng cáo. Áp dụng trí tuệ nhân tạo trong Marketing cho phép các doanh nghiệp tạo ra trải nghiệm tốt hơn cho khách hàng và nâng cao hiệu suất kinh doanh.</span>
                    </p>

                    <p>
                        <strong>ACTech – Quản trị doanh nghiệp chỉ với 5 phút mỗi ngày!</strong>
                    </p>
                    <p>
                        <strong>Chi tiết xin liên hệ:</strong>
                    </p>
                    <p>
                        <strong>Hotline: (+84) 936 825 566 / (+84) 906 083 998</strong>
                    </p>
                    <p>
                        <strong>Fanpage: <a target="_blank" href="https://www.facebook.com/actechsmt/">https://www.facebook.com/actechsmt/ </a></strong>
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