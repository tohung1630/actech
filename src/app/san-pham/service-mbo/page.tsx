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

enum companySize {
    small = "small",
    fit = "fit",
    big = "big",
}
enum area {
    hanoi = "hanoi",
    hochiminh = "hochiminh",
    mienbac = "mienbac",
    mientrung = "mientrung",
    miennam = "miennam"
}

interface IFormInput {
    name: string
    email: string
    phone: string
    company: string
    scale: companySize
    area: area
    content: string
}

const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone is required"),
    company: yup.string().required("Company is required"),
    scale: yup.mixed<companySize>().oneOf(Object.values(companySize)).required("Scale is required"),
    area: yup.mixed<area>().oneOf(Object.values(area)).required("Area is required"),
    content: yup.string().required("Content is required"),
}).required();
export default function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEamil, setIsEmail] = useState('');
    const [activeKey, setActiveKey] = useState<string | string[]>(['1']);



    const onSubmit: SubmitHandler<IFormInput> = async data => {
        try {
            const res = await fetch('https://social.actechsoftware.com/cms/nghiencuu/email_web', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setIsEmail('Chúng tôi đã nhận được yêu cầu của bạn')
            } else {
                setIsEmail('Đã có lỗi, xin hay gửi lại cho chúng tôi')
            }
        } catch (error) {
            setIsEmail('Đã có lỗi, xin hay gửi lại cho chúng tôi')
        }
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const onChange = (key: string | string[]) => {
        setActiveKey(key);
        console.log(key);
    };

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <div className={`${styles.lable_call} ${activeKey.includes('1') ? styles.active : ''}`}>
                <p>Social Media</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Truyền thông xã hội (Social Media) là một trong những yếu tố quan trọng của Marketing Online,  giúp doanh nghiệp tương tác với khách hàng qua các nền tảng social của bên thứ ba như: Facebook, Instagram, Youtube, Forum, Twitter,… </li>
                    <li>ACTech Marketing sẽ kết nối, tích hợp các kênh social để doanh nghiệp có thể vận dụng tối đa lợi thế của social media trong kết nối và xây dựng mối quan hệ với khách hàng mục tiêu.</li>
                </ul>
            </div>,
        },
        {
            key: '2',
            label: <div className={`${styles.lable_call} ${activeKey.includes('2') ? styles.active : ''}`}>
                <p>Email Marketing</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Là một công cụ trong digital marketing, email marketing giúp xây dựng thương hiệu, lòng tin và mối quan hệ với khách hàng với chi phí hợp lý. Với ACTech Marketing, các chiến dịch email marketing có thể đo lường, đánh giá hiệu quả để có sự điều chỉnh một cách phù hợp.</li>
                </ul>
            </div>,
        },
        {
            key: '3',
            label: <div className={`${styles.lable_call} ${activeKey.includes('3') ? styles.active : ''}`}>
                <p>SMS BrandName Marketing</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>SMS Brandname Marketing là công cụ tiếp thị bằng tin nhắn, cho phép doanh nghiệp cung cấp thông tin quảng bá sản phẩm, dịch vụ và thông tin doanh nghiệp thông qua kênh thông tin di động. Nội dung của SMS Marketing thường bao gồm: thông tin giới thiệu sản phẩm, dịch vụ, thông tin khuyến mại, chăm sóc khách hàng,… ACTech Marketing cung cấp dịch vụ SMS Marketing đánh đúng đối tượng khách hàng mục tiêu.</li>
                </ul>
            </div>,
        },
        {
            key: '4',
            label: <div className={`${styles.lable_call} ${activeKey.includes('4') ? styles.active : ''}`}>
                <p>AutoCall</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Sử dụng giải pháp call marketing tại ACTech, doanh nghiệp có thể tiết kiệm nguồn chi phí kinh doanh đáng kể. Ngoài ra, dịch vụ này mang đến nhiều ưu điểm nổi trội như: tiếp cận được nhiều khách hàng, gia tăng tần số liên lạc, chăm sóc khách hàng theo kịch bản có sẵn, tối ưu nguồn nhân lực.</li>
                </ul>
            </div>,
        },
    ];

    return (
        <DefaultLayout>
            <div>
                <div className={`${styles.contentStyle}`}>
                    <img className={styles.img_conter_logo} src="/imgACTech/web-2-152-453x402.png" />
                    <Row gutter={24}>
                        <Col span={24} lg={12}>
                            <div className={styles.text_car}>
                                <div className={styles.text_car_tow}>
                                    <div className={styles.text_carth}>
                                        <img className={styles.img_logo} src="/imgACTech/Logo-42.png" />
                                        <h1>QUẢN LÝ THEO

                                            MỤC TIÊU HIỆU QUẢ

                                            TĂNG NĂNG SUẤT

                                            LAO ĐỘNG</h1>
                                        <div className={styles.div_img_left}>
                                            <p>Công nghệ quản trị MBO là các nhà quản lý và nhân viên cùng thiết lập và giám sát các mục tiêu trong thời gian cụ thể.</p><br />
                                        </div>
                                        <div className={styles.div_btn}>
                                            <button className={styles.btn_advise} onClick={showModal}>Đăng ký tư vấn <ArrowRightOutlined /></button>
                                            <button className={styles.btn_trial} onClick={showModal}>Dùng thử miễn phí <ArrowRightOutlined /></button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col span={24} lg={12}>
                            <div className={styles.img_car}>
                                <img src="/imgACTech/web-1-127.png" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.field2}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>

                                <Col span={24} lg={12}>
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_r}>
                                            <div className={styles.img_secrmr}>
                                                <img src="/imgACTech/Logo-42.png" />
                                                <h1>LÀ GÌ?​</h1>
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p><strong>MBO</strong> là viết tắt của Management by Objectives, một phương pháp tiếp cận chiến lược nhằm nâng cao hiệu quả hoạt động của tổ chức. Công nghệ quản trị MBO là các nhà quản lý và nhân viên cùng thiết lập và giám sát các mục tiêu trong thời gian cụ thể. Mục đích của phương pháp quản trị MBO là sẽ đặt các mục tiêu cá nhân, riêng lẻ có thể đo lường hướng tới các mục tiêu chung của công ty, doanh nghiệp.</p><br />
                                                <p><strong>ACTech MBO</strong> giúp xác định mục tiêu cho từng cá nhân, bộ phận. Từ đó ghi nhận và giám sát các công việc mục tiêu trong khoảng thời gian để có sự điều chỉnh phù hợp nhất.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_f}>
                                        <img src="/imgACTech/web-1-128.png" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className={styles.product}>
                    <div className={styles.main_field}>
                        <h1>
                            DOANH NGHIỆP CỦA BẠN<br />
                            ĐANG GẶP PHẢI VẤN ĐỀ
                            <div className={styles.underlined_red}></div>
                            
                        </h1>
                        <Row gutter={12}>
                            <Col span={12} lg={6}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/web-2-210.png" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Sếp ôm hết việc, nhân viên ngồi chơi</p>
                                    </div>
                                </div>
                            </Col>

                            <Col span={12} lg={6}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/web-2-214.png" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Thiếu sự liên kết giữa kế hoạch của các bộ phận</p>
                                    </div>
                                </div>
                            </Col>

                            <Col span={12} lg={6}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/web-2-216.png" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Việc đánh giá và kiểm định chưa công bằng</p>
                                    </div>
                                </div>
                            </Col>

                            <Col span={12} lg={6}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/web-2-220.png" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Doanh nghiệp lãng phí quá nhiều chi phí cho việc mua phần mềm nhưng không mang lại hiệu quả</p>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </div>

                <div className={styles.field2}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_f}>
                                        <img src="/imgACTech/web-1-129.png" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_r}>
                                            <div className={styles.img_secrmr}>
                                                <h1>TẠI SAO DOANH NGHIỆP CẦN</h1>
                                                <img src="/imgACTech/Logo-42.png" />
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p><strong>ACTech MBO</strong> là giải pháp giúp đánh giá chính xác năng lực, hiệu quả làm việc của từng cá nhân, bộ phận; Góp phần giúp nhân viên hiểu hơn về công việc của mình. Từ đó, có chiến lược phát triển và hoàn thành nhiệm vụ tốt hơn.</p><br />
                                                <p><strong>ACTech MBO</strong> giúp doanh nghiệp sử dụng nguồn lực hiệu quả: Mỗi cá nhân đều hiểu được vai trò nhiệm vụ của mình. Đây là yếu tố tiên quyết giúp doanh nghiệp tạo ra giá trị lớn trong quản trị mục tiêu chung.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </div>
                </div>

                <div className={styles.field3}>
                    <div className={styles.product}>
                        <div className={styles.main_field}>
                            <h1 className={styles.h1_mfie}>
                                6 BƯỚC QUẢN LÝ THEO MỤC TIÊU CỦA
                            </h1>
                            <div className={styles.field_img}>
                                <img src="/imgACTech/Logo-42.png" />
                            </div>
                            <div className={styles.underlined_red}></div>
                            <Row gutter={12}>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-1-130.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Xác nhận mục tiêu

                                                của doanh nghiệp</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-1-131.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Xác định mục tiêu

                                                của nhân viên</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-1-132.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Giám sát, đo lường hiệu suất

                                                và tiến độ công việc</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-1-133.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Đánh giá hiệu suất</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-1-134.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Cung cấp phản hồi</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-1-135.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Ghi nhận thành tích

                                                khen thưởng</h3>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className={styles.field2}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_f}>
                                            <div className={styles.img_secrmr}>
                                                <h1>ƯU THẾ NỔI TRỘI CỦA​</h1>
                                                <img src="/imgACTech/Logo-42.png" />
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <div className={styles.text_secr}>
                                                <p>Nhân viên chủ động sáng tạo trong công việc, các hoạt động trong quản trị doanh nghiệp linh hoạt, tính linh động cao và chủ động trong những phát sinh ngoài ý muốn, nhiều thời gian quản lý, công bằng, minh bạch theo đúng năng lực của từng bộ phận nhân viên</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_r}>
                                        <img src="/imgACTech/web-1-136.png" />
                                    </div>
                                </Col>
                            </Row>
                            <div className={`${styles.div_btn} ${styles.text_al}`}>
                                <button className={styles.btn_advise} onClick={showModal}>Đăng ký tư vấn <ArrowRightOutlined /></button>
                                <button className={styles.btn_trial} onClick={showModal}>Dùng thử miễn phí <ArrowRightOutlined /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.field3}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.youtube}>
                                        <iframe src="https://www.youtube.com/embed/RZDA5zuw3Y4?si=E7zd2Ts76YtTQqRT" title="YouTube video player"></iframe>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.free_sign_up}>
                                        <p>ĐĂNG KÝ</p>
                                        <h2>DÙNG THỬ MIỄN PHÍ</h2>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className={styles.div_free_sign_up}>
                                                <input {...register("name")} placeholder="Họ và tên" />
                                                {errors.name && <p>{errors.name.message}</p>}
                                            </div>
                                            <div>
                                                <Row gutter={24}>
                                                    <Col span={12}>
                                                        <div className={styles.div_free_sign_up}>
                                                            <input {...register("email")} placeholder="Email" />
                                                            {errors.email && <p>{errors.email.message}</p>}
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div className={styles.div_free_sign_up}>
                                                            <input {...register("phone")} placeholder="Số điện thoại" />
                                                            {errors.phone && <p>{errors.phone.message}</p>}
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div className={styles.div_free_sign_up}>
                                                            <input {...register("company")} placeholder="Công ty" />
                                                            {errors.company && <p>{errors.company.message}</p>}
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div className={styles.div_free_sign_up}>
                                                            <select {...register("scale")}>
                                                                <option value="" disabled selected>Quy mô</option>
                                                                <option value="small">Dưới 50 người</option>
                                                                <option value="fit">51 - 100 người</option>
                                                                <option value="big">Trên 100 người</option>
                                                            </select>
                                                            {errors.scale && <p>{errors.scale.message}</p>}
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className={styles.div_free_sign_up}>
                                                <select {...register("area")}>
                                                    <option value="" disabled selected>Khu vực</option>
                                                    <option value="hanoi">Hà Nội</option>
                                                    <option value="hochiminh">Hồ Chí Minh</option>
                                                    <option value="mienbac">Miền Bắc</option>
                                                    <option value="mientrung">Miền Trung</option>
                                                    <option value="miennam">Miền Nam</option>
                                                </select>
                                                {errors.area && <p>{errors.area.message}</p>}
                                            </div>
                                            <div className={styles.div_free_sign_up}>
                                                <input {...register("content")} placeholder="Nội dung yêu cầu" />
                                                {errors.content && <p>{errors.content.message}</p>}
                                            </div>

                                            <div className={styles.btn_submit}><input type="submit" value='ĐĂNG KÝ NAY' /></div>
                                            <p>{isEamil}</p>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className={styles.field4}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field2}>
                            <div className={styles.icon_bring_society2}>
                                <a href="https://www.facebook.com/actechsmt" target="_blank"><FacebookOutlined /></a>
                                <a href="https://www.tiktok.com/@actechsmt.com" target="_blank"><TikTokOutlined /></a>
                                <a href="https://www.instagram.com/actechsmt/" target="_blank"><InstagramOutlined /></a>
                                <a href="https://www.youtube.com/@ACTechSMT-Congnghequantri" target="_blank"><YoutubeOutlined /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* modal */}
                <Modal title="" visible={isModalOpen} footer={[]} onCancel={handleCancel}>
                    <div className={styles.free_sign_up}>
                        <p>ĐĂNG KÝ</p>
                        <h2>DÙNG THỬ MIỄN PHÍ</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.div_free_sign_up}>
                                <input {...register("name")} placeholder="Họ và tên" />
                                {errors.name && <p>{errors.name.message}</p>}
                            </div>
                            <div>
                                <Row gutter={24}>
                                    <Col span={12}>
                                        <div className={styles.div_free_sign_up}>
                                            <input {...register("email")} placeholder="Email" />
                                            {errors.email && <p>{errors.email.message}</p>}
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className={styles.div_free_sign_up}>
                                            <input {...register("phone")} placeholder="Số điện thoại" />
                                            {errors.phone && <p>{errors.phone.message}</p>}
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className={styles.div_free_sign_up}>
                                            <input {...register("company")} placeholder="Công ty" />
                                            {errors.company && <p>{errors.company.message}</p>}
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className={styles.div_free_sign_up}>
                                            <select {...register("scale")}>
                                                <option value="" disabled selected>Quy mô</option>
                                                <option value="small">Dưới 50 người</option>
                                                <option value="fit">51 - 100 người</option>
                                                <option value="big">Trên 100 người</option>
                                            </select>
                                            {errors.scale && <p>{errors.scale.message}</p>}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.div_free_sign_up}>
                                <select {...register("area")}>
                                    <option value="" disabled selected>Khu vực</option>
                                    <option value="hanoi">Hà Nội</option>
                                    <option value="hochiminh">Hồ Chí Minh</option>
                                    <option value="mienbac">Miền Bắc</option>
                                    <option value="mientrung">Miền Trung</option>
                                    <option value="miennam">Miền Nam</option>
                                </select>
                                {errors.area && <p>{errors.area.message}</p>}
                            </div>
                            <div className={styles.div_free_sign_up}>
                                <input {...register("content")} placeholder="Nội dung yêu cầu" />
                                {errors.content && <p>{errors.content.message}</p>}
                            </div>

                            <div className={styles.btn_submit}><input type="submit" value='ĐĂNG KÝ NAY' /></div>
                            <p>{isEamil}</p>
                        </form>
                    </div>
                </Modal>
            </div>
        </DefaultLayout>
    )
}