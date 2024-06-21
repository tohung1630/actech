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
                    ACTECH giới thiệu loạt giải pháp quản trị ưu việt tới ENTECH Hanoi 2023
                </h1>
                <div className={styles.page_content}>
                    <h2>
                        <span>Sáng 28/6/2023, ACTech đã có mặt tại Hội chợ Triển lãm quốc tế Công nghệ Năng lượng – Môi trường Hà Nội 2023 (ENTECH HANOI 2023) với chủ đề “Chuyển dịch năng lượng – Môi trường bền vững” đã chính thức khai mạc tại Trung tâm Triển lãm quốc tế I.C.E Hanoi – Số 91 Trần Hưng Đạo, Hà Nội. </span>
                    </h2>
                    <p>
                        <img src="/imgACTech/tintuc/entech-2022-85-1024x683.jpg" />
                    </p>
                    <p>
                        <span>Công ty phần mềm ACTech là một trong những doanh nghiệp chính tham dự sự kiện tại gian hàng C11. Tại ENTECH Hanoi 2023, ACTech giới thiệu đến đông đảo khách hàng, đối tác những sản phẩm công nghệ quản trị ưu việt như phần mềm ACTech Business, HRM, MRP, Office, AFM, Marketing, SocialAI, CRM, SSM, Purchase, DMS+, DAS, AMS …</span>
                    </p>
                    <p>
                        <img src="/imgACTech/tintuc/Facebook-3-1024x683.jpg" />
                    </p>
                    <p>
                        <span>Bà Phạm Kim Chung – CEO ACTech cho biết: Chúng tôi hy vọng thông qua ENTECH Hanoi 2023, các doanh nghiệp sẽ có nhiều lựa chọn hơn về các phần mềm ứng dụng trong quản lý doanh nghiệp thông minh. Chúng tôi tự tin các sản phẩm của ACTech sẽ mang đến sự ưu việt, hài lòng cho quý doanh nghiệp.</span>
                    </p>
                    <p>
                        <img src="/imgACTech/tintuc/ACTech-tu-van-1024x681.jpg" />
                    </p>
                    <p>
                        <img src="/imgACTech/tintuc/DSC05234-1024x683.jpg" />
                    </p>
                    <p>
                        <img src="/imgACTech/tintuc/z4472252252517_bfa899d1effc81c515703068877027a7-1024x680.jpg" />
                    </p>
                    <p>
                        <span>Được biết, ENTECH Hanoi 2023 diễn ra từ ngày 28 đến hết ngày 30/6/2023 với sự tham gia của các doanh nghiệp đến từ các nước như: Hàn Quốc, Việt Nam, Trung Quốc, Nhật Bản,… nhằm giới thiệu, quảng bá các sản phẩm, thiết bị về tiết kiệm năng lượng trong sản xuất công nghiệp, năng lượng tái tạo… Trong đó, các sản phẩm được trang bị công nghệ tiên tiến, hiệu suất cao, bảo vệ môi trường. Đồng thời, tạo môi trường thuận tiện cho các doanh nghiệp tiếp cận các giải pháp công nghệ tiên tiến có hàm lượng tri thức cao.</span>
                    </p>
                    <p>
                        <span>ENTECH Hanoi 2023 kỳ vọng tạo môi trường giao thương sôi động, hợp tác kinh doanh về lĩnh vực hiệu quả năng lượng – môi trường cho các doanh nghiệp Hà Nội nói riêng và Việt Nam nói chung tiếp cận các giải pháp công nghệ tiên tiến, thúc đẩy giao thương sự hợp tác kinh tế với các doanh nghiệp trong nước và trên thế giới, qua đó chuyển giao công nghệ, phát triển kinh doanh.</span>
                    </p>


                    <p>
                        <strong>Chi tiết xin liên hệ:</strong>
                    </p>
                    <p>
                        <strong>Hotline: (+84) 936 825 566 / (+84) 906 083 998</strong>
                    </p>
                    <p>
                        <strong>Fanpage: <a target="_blank" href="https://www.facebook.com/actechsmt/">https://www.facebook.com/actechsmt/</a> </strong>
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