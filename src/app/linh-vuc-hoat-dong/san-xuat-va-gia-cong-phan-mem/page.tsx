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

const customStyles = {
    lg: {
        flex: '0 0 20%',
        maxWidth: '20%',
        minWidth: '20%',
    },
};

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
                                        <h1>GIA CÔNG PHẦN MỀM</h1>
                                        <div className={styles.div_img_left}>
                                            <p><strong>ACTech</strong>  với đội ngũ chuyên gia nhiều kinh nghiệm ở các nước Châu Âu, Mỹ, Nhật Bản trong tư vấn và thiết kế hệ thống, dịch vụ, cung cấp sản phẩm tới các doanh nghiệp Việt Nam và Thế giới.</p>
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
                                <img src="/imgACTech/Linh-vuc-77.svg" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.field2}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.div_img_key}>
                                        <img src="https://actechsmt.com/wp-content/uploads/2023/01/web-2-213.svg" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.text_key}>
                                        <h1>
                                            LỢI THẾ TRONG SẢN XUẤT<br />
                                            VÀ GIA CÔNG PHẦN MỀM​</h1>
                                        <img src="/imgACTech/web-2-156.svg" />
                                        <div className={styles.underlined_key}></div>
                                        <div className={styles.p_text_key}>
                                            <p><strong>ACTech</strong> với đội ngũ chuyên gia nhiều kinh nghiệm ở các nước Châu Âu, Mỹ, Nhật Bản trong tư vấn và thiết kế hệ thống, dịch vụ, cung cấp sản phẩm tới các doanh nghiệp Việt Nam và Thế giới. <strong>ACTech</strong> tự tin mang đến cho doanh nghiệp giải pháp tối ưu nhất về quản lý kinh doanh, truyền thông, tài chính, nguồn lực,…</p><br />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className={styles.product}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <h1 className={styles.title_appli}>
                                CÁC BƯỚC SẢN XUẤT
                                <br />
                                VÀ GIA CÔNG PHẦN MỀM
                                <div className={styles.underlined}></div>
                            </h1>
                            <Row gutter={12}>
                                <Col span={12} lg={customStyles.lg}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/icon-trang-ve-chung-toi-60.svg" />
                                        <h1>BƯỚC 1</h1>
                                        <br />
                                        <div className={styles.text_call_appli}>
                                            <p>Xác định nhu cầu của doanh nghiệp</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={customStyles.lg}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/linh-vuc-78.svg" />
                                        <h1>BƯỚC 2</h1>
                                        <br />
                                        <div className={styles.text_call_appli}>
                                            <p>Khảo sát hiện trạng công nghệ doanh nghiệp đang sử dụng</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={customStyles.lg}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/linh-vuc-79.svg" />
                                        <h1>BƯỚC 3</h1>
                                        <br />
                                        <div className={styles.text_call_appli}>
                                            <p>Lập báo cáo phân tích hiện trạng và bảng so sánh giữa nhu cầu của doanh nghiệp và các tính năng sẵn có của ACTech SMT</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={customStyles.lg}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/linh-vuc-80.svg" />
                                        <h1>BƯỚC 4</h1>
                                        <br />
                                        <div className={styles.text_call_appli}>
                                            <p>Tư vấn giải pháp SMT & đưa ra kế hoạch phù hợp với nhu cầu và hiện trạng của doanh nghiệp</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={customStyles.lg}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/linh-vuc-81.svg" />
                                        <h1>BƯỚC 5</h1>
                                        <br />
                                        <div className={styles.text_call_appli}>
                                            <p>Triển khai công nghệ SMT (bao gồm: chuyển giao công nghệ, đào tạo, khởi tạo dữ liệu ban đầu, chạy thử, hỗ trợ triển khai, …).</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className={`${styles.field}`}>
                    <Row gutter={24}>
                        <Col span={24} lg={12}>
                            <div className={styles.text_car}>
                                <div className={styles.text_car_tow}>
                                    <div className={styles.text_carth}>
                                        <h1 className={styles.h1_text_carth}>HOẠT ĐỘNG SẢN XUẤT VÀ GIA CÔNG PHẦN MỀM</h1>
                                        <div className={styles.underlined_key}></div>
                                        <div className={styles.div_img_left}>
                                            <ul>
                                                <li>Dịch vụ gia công từng thành phần của sản phẩm (gia công một phần trong toàn bộ hệ thống)</li>
                                                <li>Dịch vụ gia công từng thành phần trong quy trình (gia công một phần chức năng của một / nhiều qui trình hay các bộ phận)</li>
                                                <li>Dịch vụ gia công phần mềm khác…</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col span={24} lg={12}>
                            <div className={styles.img_car2}>
                                <img src="/imgACTech/web-2-157.svg" />
                            </div>
                        </Col>
                    </Row>
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