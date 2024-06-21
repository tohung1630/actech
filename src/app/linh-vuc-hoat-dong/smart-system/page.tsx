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
    return (
        <DefaultLayout>
            <div>
                <div className={`${styles.contentStyle}`}>
                    <img className={styles.img_conter} src="/imgACTech/background-1-1910x557.png" />
                    <img className={styles.img_conter_logo} src="/imgACTech/web-2-152-453x402.png" />
                    <Row gutter={24}>
                        <Col span={24} lg={12}>
                            <div className={styles.text_car}>
                                <div className={styles.text_car_tow}>
                                    <div className={styles.text_carth}>
                                        <img className={styles.img_logo} src='/imgACTech/ACTech_Horizontal-1.png' />
                                        <h1>SMART SYSTEM</h1>
                                        <div className={styles.div_img_left}>
                                            <p>Hệ thống thông minh ACTech Smart System sẽ cung cấp các dịch vụ: Smart home, Smart Building, Smart City, Smart Factory…</p>
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
                                <img src="/imgACTech/web-2-82-2048x1799.png" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.field}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <h1>
                                SMART SYSTEM
                                <div className={styles.underlined}></div>
                            </h1>
                            <p>Hệ thống thông minh <strong> ACTech Smart System</strong> sẽ cung cấp các dịch vụ: Smart home, Smart Building, Smart City, Smart Factory… Với ứng dụng công nghệ hiện đại, kỹ thuật tiên tiến, ACTech sẽ đưa ra các giải pháp phù hợp với nhu cầu của khách hàng. </p><br />
                            <p>Từ việc ứng dụng công nghệ thông minh vào không gian căn nhà, đến việc quản lý dự án, đô thị,… Đồng thời, <strong> ACTech Smart System</strong> cũng sẽ cung cấp các chức năng ứng dụng và hệ sinh thái phần cứng phong phú.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.product}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <h1 className={styles.title_appli}>
                                MỘT SỐ ỨNG DỤNG CỦA<br />
                                SMART SYSTEM
                                <div className={styles.underlined}></div>
                            </h1>
                            <Row gutter={24}>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/web-2-83.svg" />
                                        <h1>KIỂM SOÁT NGƯỜI<br />
                                            RA VÀO THÔNG MINH</h1>
                                        <div className={styles.text_call_appli}>
                                            <p>➤ Quét khuôn mặt</p>
                                            <p>➤ Mở cửa vân tay </p>
                                            <p>➤ Mở cửa mã QR</p>
                                            <p>➤ Khách hẹn đến thăm liên lạc qua ứng dụng điện toán đám mây</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/web-2-84.svg" />
                                        <h1>KIỂM SOÁT PHƯƠNG<br />
                                            TIỆN GIAO THÔNG</h1>
                                        <div className={styles.text_call_appli}>
                                            <p>➤ Nhận diện biển số thông tin trực tuyến</p>
                                            <p>➤ Thẻ tháng Khóa đỗ xe thông minh </p>
                                            <p>➤ Bốt sạc thông minh</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/web-2-85.svg" />
                                        <h1>KIỂM SOÁT<br />
                                            THANG MÁY</h1>
                                        <div className={styles.text_call_appli}>
                                            <p>➤  Ấn gọi thang máy</p>
                                            <p>➤ Nhận diện khuôn mặt </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/Tu-dong-01.svg" />
                                        <h1>TRANG<br />
                                            THIẾT BỊ</h1>
                                        <div className={styles.text_call_appli}>
                                            <p>➤  Sổ cái BA </p>
                                            <p>➤ Vận hành bảo trì thang máy </p>
                                            <p>➤  Kiểm tra tự động</p>
                                            <p>➤ Đọc đồng hồ công tơ điện từ xa </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/tu-dong-a-01.svg" />
                                        <h1>VẬN HÀNH BẢO TRÌ<br />
                                            THÔNG MINH</h1>
                                        <div className={styles.text_call_appli}>
                                            <p>➤  Đặt trước địa điểm</p>
                                            <p>➤ Báo cáo sửa chữa  </p>
                                            <p>➤  Phản ánh kiến nghị</p>
                                            <p>➤ Thông tin trực tuyến</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/tu-dong-b-01.svg" />
                                        <h1>AN NINH<br />
                                            THÔNG MINH</h1>
                                        <div className={styles.text_call_appli}>
                                            <p>➤  Trang bị các khu vực quan trọng</p>
                                            <p>➤ Giám sát danh sách đen </p>
                                            <p>➤  Phát hiện và cảnh báo xâm nhập </p>
                                            <p>➤ Báo động liên kết đa hệ thống IoT </p>
                                            <p>➤  PCCC </p>
                                            <p>➤ Phát hiện parabol ở độ cao</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/tu-dong-c-01.svg" />
                                        <h1>PCCC THÔNG MINH</h1>
                                        <div className={styles.text_call_appli}>
                                            <p>➤  Hệ thống nước chữa cháy thông minh</p>
                                            <p>➤ Cảm biến khói thông minh </p>
                                            <p>➤   Cửa chống cháy thông minh</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/tu-dong-d-01.svg" />
                                        <h1>TIẾT KIỆM XANH</h1>
                                        <div className={styles.text_call_appli}>
                                            <p>➤  Hệ thống HVAC thông minh</p>
                                            <p>➤  Chiếu sáng thông minh </p>
                                            <p>➤  Phân phối điện thông minh</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/tu-dong-d-02.svg" />
                                        <h1>GIA DỤNG THÔNG MINH</h1>
                                        <div className={styles.text_call_appli}>
                                            <p>➤ Điều khiển trung tâm thông minh</p>
                                            <p>➤ Khóa cửa thông minh</p>
                                            <p>➤ Bảng điều khiển thông minh</p>
                                            <p>➤ Thiết bị thông minh</p>
                                            <p>➤ Điều khiển giọng nói.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className={styles.field}>
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

                                            <div className={styles.btn_submit}><input type="submit" value='ĐĂNG KÝ NGAY' /></div>
                                            <p>{isEamil}</p>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                            <div className={styles.icon_bring_society}>
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

                            <div className={styles.btn_submit}><input type="submit" value='ĐĂNG KÝ NGAY' /></div>
                            <p>{isEamil}</p>
                        </form>
                    </div>
                </Modal>
            </div>
        </DefaultLayout>
    )
}