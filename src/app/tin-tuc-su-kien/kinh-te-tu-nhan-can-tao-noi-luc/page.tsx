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
                Kinh tế tư nhân 2023 cần chính sách tạo nội lực để phát triển
                </h1>
                <div className={styles.page_content}>
                    <h2>
                        <span>Đó là chia sẻ của PGS.TS Trần Đình Thiên về tình hình hiện tại của kinh tế tư nhân tại hội thảo với chủ đề: “Kinh tế Việt Nam 2023: SMEs đối diện và vượt bão” được tổ chức tại Khách sạn Rex, TP. Hồ Chí Minh.
                        </span>
                    </h2>
                    <p>
                        <img src="/imgACTech/tintuc/SK-PTI-799-1.jpg" />
                    </p>
                    <p>
                        <span>Năm 2023, trước tình hình kinh tế thế giới và Việt Nam có nhiều biến động, các doanh nghiệp Việt Nam đứng trước nhiều khó khăn thách thức. PTI, PBS và các đối tác thân hữu phối hợp tổ chức Hội thảo: “Kinh tế Việt Nam 2023: Đối diện & Vượt bão” tại Hà Nội và TP HCM. Chuyên gia Nguyễn Hoàng Phương – Chủ tịch Hội đồng giảng huấn Tổ chức Đào tạo chất lượng cao PBS, Chủ tịch Học viện ABE cho biết: “Năm 2023 dự báo là một năm có nhiều thách thức với các doanh nghiệp do ảnh hưởng của khó khăn kinh tế cùng với sự cạnh tranh khốc liệt của những hình thức thương mại mới. Đây là giai đoạn thử thách và cũng là áp lực để doanh nhân phát huy tinh thần đổi mới sáng tạo mở, thích nghi với hoàn cảnh.”</span>
                    </p>

                    <p>
                        <span>Hiện chúng ta có hơn 840.000 doanh nghiệp, doanh nghiệp vừa và nhỏ chiếm tới 98.1% tổng số và đóng góp tới 45% GDP. Điều này đã khẳng định vai trò chủ đạo của các doanh nghiệp vừa và nhỏ trong nền kinh tế tư nhân và cho thấy những tín hiệu tích cực đối với sự phát triển của cộng đồng SMEs. Doanh nghiệp muốn phát triển bền vững trong cuộc đua Chuyển đổi số cạnh tranh rất mở và nhanh này, các SME cần phải học tập, đào tạo không ngừng, có ý chí và tinh thần cầu tiến hội nhập.</span>
                    </p>
                    <p>
                        <img src="/imgACTech/tintuc/SK-PTI-318.jpg" />
                    </p>

                    <p>
                        <span>Chia sẻ tại Hội thảo, PGS.TS Trần Đình Thiên – Nguyên Viện trưởng Viện Kinh tế Việt Nam cho biết, sự suy giảm của nền kinh tế thế giới buộc các doanh nghiệp phải thay đổi cách nghĩ để phục vụ cho sự phát triển bền vững. Vị chuyên gia cho rằng không chỉ riêng năm 2023 khó khăn mà sẽ là cả một thập niên mất mát của nền kinh tế toàn cầu, đây là điều cần đặc biệt chú ý với Việt Nam – một nước đang phát triển. Tuy nhiên, ông Thiên cho rằng, trong bối cảnh kinh tế thế giới biến động chịu ảnh hưởng của dịch bệnh, lạm phát ngày càng tăng cao, kinh tế Việt Nam vẫn cho thấy dấu hiệu tốt qua kết quả tăng trưởng mặc dù tỷ trọng không cao, làm tiền đề cho sự phát triển và động lực để vượt qua những khó khăn trong giai đoạn mới của tương lai. </span>
                    </p>
                    <p>
                        <span>Công ty phần mềm ACTech rất vinh dự, tự hào khi được đồng hành và là nhà tài trợ Kim Cương cho chương trình Hội Thảo “Kinh tế Việt Nam 2023: Đối diện và vượt bão” được tổ chức tại Khách sạn Rex, Quận 1, TP. Hồ Chí Minh. Chúng tôi cam kết sẽ đồng hành hỗ trợ các doanh nghiệp chuyển đổi số thành công, toàn diện và có hệ thống</span>
                    </p>
                    <p>
                        <strong>ACTech SMT – Quản trị doanh nghiệp của bạn tự động hóa chỉ với 5 phút mỗi ngày!</strong>
                    </p>
                    <p>
                        <strong>Để được tư vấn chi tiết về sản phẩm phù hợp, vui lòng liên hệ:</strong>
                    </p>
                    <p>
                        <strong>Hotline: +84 936 825 566 / +84 906 083 998</strong>
                    </p>
                    <p><strong>Đọc bài viết tại: https://diendandoanhnghiep.vn/chinh-sach-can-tao-noi-luc-de-phat-trien-kinh-te-tu-nhan-242052.html?fbclid=IwAR2vDkOKlDkpjA4P_7FspdI1EdbtByCKgV7zjPYiJOvs5Npww6dVggnDFZk</strong></p>


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