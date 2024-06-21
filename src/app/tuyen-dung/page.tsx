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
    YoutubeOutlined
} from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import DefaultLayout from '../../components/DefaultLayout/layoutMenu';
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

interface IFormInput2 {
    name: string
    email: string
    phone: string
    content: string
    locations: string
    file: FileList
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

const schema2 = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone is required"),
    content: yup.string().required("Content is required"),
    locations: yup.string().required("Locations is required"),
    file: yup.mixed<FileList>().required("File is required")
}).required();

export default function Home() {
    const { register: register1, handleSubmit: handleSubmit1, formState: { errors: errors1 } } = useForm({
        resolver: yupResolver(schema)
      });
    const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm<IFormInput2>({
        resolver: yupResolver(schema2),
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEamil, setIsEmail] = useState('');
    const [isEamilSigning, setIsEmailSigning] = useState('');



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

    const onSubmitSigning: SubmitHandler<IFormInput2> = async data => {
        console.log(data)
        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('phone', data.phone);
            formData.append('content', data.content);
            formData.append('locations', data.locations);
            if (data.file.length > 0) {
                formData.append('file', data.file[0]);
            }

            const res = await fetch('http://127.0.0.1:8000/cms/nghiencuu/email_recruitment', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                setIsEmailSigning('Chúng tôi đã nhận được yêu cầu của bạn')
            } else {
                setIsEmailSigning('Đã có lỗi, xin hay gửi lại cho chúng tôi')
            }
        } catch (error) {
            setIsEmailSigning('Đã có lỗi, xin hay gửi lại cho chúng tôi')
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <DefaultLayout>
            <div>
                <div className={`${styles.contentStyle}`}>
                    <Row gutter={24}>
                        <Col span={24} lg={12}>
                            <div className={styles.text_car}>
                                <div className={styles.text_car_tow}>
                                    <div className={styles.text_carth}>
                                        <img className={styles.img_logo} src='/imgACTech/ACTech_Horizontal-1.png' />
                                        <h1>TUYỂN DỤNG</h1>
                                        <div className={styles.div_img_left}>
                                            <p>Bạn có muốn trở thành một thành viên của ACTech?

                                                Hãy để chúng tôi kết nối với bạn!</p><br />
                                        </div>
                                        <div className={styles.div_btn}>
                                            {/* <button className={styles.btn_advise} onClick={showModal}>Đăng ký tư vấn</button>
                                            <button className={styles.btn_trial} onClick={showModal}>Dùng thử miễn phí</button> */}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col span={24} lg={12}>
                            <div className={styles.img_car}>
                                <img src="/imgACTech/web-1-75.svg" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.field_w}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={8}>
                                    <div className={styles.information}>
                                        <h1>TRƯỞNG PHÒNG KINH DOANH</h1>
                                        <p>Số lượng: 2</p>
                                        <button>Xem Thêm</button>
                                    </div>
                                </Col>
                            </Row>
                            <div className={styles.signing}>
                                <h1>ĐĂNG KÍ NỘP HỒ SƠ</h1>
                                <div className={styles.div_signing}>
                                    <form onSubmit={handleSubmit2(onSubmitSigning)}>
                                        <div>
                                            <Row gutter={24}>
                                                <Col span={24} lg={12}>
                                                    <div className={styles.div_free_sign_upsi}>
                                                        <input {...register2("name")} placeholder="Họ Và Tên" />
                                                    </div>
                                                </Col>
                                                <Col span={24} lg={12}>
                                                    <div className={styles.div_free_sign_upsi}>
                                                        <input {...register2("email")} placeholder="Email" />
                                                    </div>
                                                </Col>
                                                <Col span={24} lg={12}>
                                                    <div className={styles.div_free_sign_upsi}>
                                                        <input {...register2("phone")} placeholder="Số điện thoại" />
                                                    </div>
                                                </Col>
                                                <Col span={24} lg={12}>
                                                    <div className={styles.div_free_sign_upsi}>
                                                        <input {...register2("content")} placeholder="Để lại lời nhắn cho chúng tôi" />
                                                    </div>
                                                </Col>
                                                <Col span={24} lg={12}>
                                                    <div className={styles.div_free_sign_upsi}>
                                                        <input {...register2("locations")} placeholder="Vị trí ứng tuyển" />
                                                    </div>
                                                </Col>
                                                <Col span={24} lg={12}>
                                                    <div className={styles.div_free_sign_upsi}>
                                                        <input
                                                            type="file"
                                                            {...register2("file")}
                                                            placeholder="Chọn tệp"
                                                        />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className={styles.btn_submit}><input type="submit" value='ĐĂNG KÝ NGAY' /></div>
                                        <p>{isEamilSigning}</p>
                                    </form>
                                </div>
                            </div>
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
                                        <form onSubmit={handleSubmit1(onSubmit)}>
                                            <div className={styles.div_free_sign_up}>
                                                <input {...register1("name")} placeholder="Họ và tên" />
                                                {errors1.name && <p>{errors1.name.message}</p>}
                                            </div>
                                            <div>
                                                <Row gutter={24}>
                                                    <Col span={12}>
                                                        <div className={styles.div_free_sign_up}>
                                                            <input {...register1("email")} placeholder="Email" />
                                                            {errors1.email && <p>{errors1.email.message}</p>}
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div className={styles.div_free_sign_up}>
                                                            <input {...register1("phone")} placeholder="Số điện thoại" />
                                                            {errors1.phone && <p>{errors1.phone.message}</p>}
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div className={styles.div_free_sign_up}>
                                                            <input {...register1("company")} placeholder="Công ty" />
                                                            {errors1.company && <p>{errors1.company.message}</p>}
                                                        </div>
                                                    </Col>
                                                    <Col span={12}>
                                                        <div className={styles.div_free_sign_up}>
                                                            <select {...register1("scale")}>
                                                                <option value="" disabled selected>Quy mô</option>
                                                                <option value="small">Dưới 50 người</option>
                                                                <option value="fit">51 - 100 người</option>
                                                                <option value="big">Trên 100 người</option>
                                                            </select>
                                                            {errors1.scale && <p>{errors1.scale.message}</p>}
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className={styles.div_free_sign_up}>
                                                <select {...register1("area")}>
                                                    <option value="" disabled selected>Khu vực</option>
                                                    <option value="hanoi">Hà Nội</option>
                                                    <option value="hochiminh">Hồ Chí Minh</option>
                                                    <option value="mienbac">Miền Bắc</option>
                                                    <option value="mientrung">Miền Trung</option>
                                                    <option value="miennam">Miền Nam</option>
                                                </select>
                                                {errors1.area && <p>{errors1.area.message}</p>}
                                            </div>
                                            <div className={styles.div_free_sign_up}>
                                                <input {...register1("content")} placeholder="Nội dung yêu cầu" />
                                                {errors1.content && <p>{errors1.content.message}</p>}
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
                        <form onSubmit={handleSubmit1(onSubmit)}>
                            <div className={styles.div_free_sign_up}>
                                <input {...register1("name")} placeholder="Họ và tên" />
                                {errors1.name && <p>{errors1.name.message}</p>}
                            </div>
                            <div>
                                <Row gutter={24}>
                                    <Col span={12}>
                                        <div className={styles.div_free_sign_up}>
                                            <input {...register1("email")} placeholder="Email" />
                                            {errors1.email && <p>{errors1.email.message}</p>}
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className={styles.div_free_sign_up}>
                                            <input {...register1("phone")} placeholder="Số điện thoại" />
                                            {errors1.phone && <p>{errors1.phone.message}</p>}
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className={styles.div_free_sign_up}>
                                            <input {...register1("company")} placeholder="Công ty" />
                                            {errors1.company && <p>{errors1.company.message}</p>}
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className={styles.div_free_sign_up}>
                                            <select {...register1("scale")}>
                                                <option value="" disabled selected>Quy mô</option>
                                                <option value="small">Dưới 50 người</option>
                                                <option value="fit">51 - 100 người</option>
                                                <option value="big">Trên 100 người</option>
                                            </select>
                                            {errors1.scale && <p>{errors1.scale.message}</p>}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.div_free_sign_up}>
                                <select {...register1("area")}>
                                    <option value="" disabled selected>Khu vực</option>
                                    <option value="hanoi">Hà Nội</option>
                                    <option value="hochiminh">Hồ Chí Minh</option>
                                    <option value="mienbac">Miền Bắc</option>
                                    <option value="mientrung">Miền Trung</option>
                                    <option value="miennam">Miền Nam</option>
                                </select>
                                {errors1.area && <p>{errors1.area.message}</p>}
                            </div>
                            <div className={styles.div_free_sign_up}>
                                <input {...register1("content")} placeholder="Nội dung yêu cầu" />
                                {errors1.content && <p>{errors1.content.message}</p>}
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