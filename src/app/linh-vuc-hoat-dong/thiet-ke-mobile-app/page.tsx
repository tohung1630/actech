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
                                        <h1>THIẾT KẾ MOBILE APP</h1>
                                        <div className={styles.div_img_left}>
                                            <p>Tăng doanh thu với <strong>Mobile App</strong> , tại sao không?</p><br />
                                            <p>Doanh nghiệp kinh doanh ở bất kỳ lĩnh vực nào cũng đều cần có Mobile App để tối ưu hóa khả năng tiếp cận khách hàng. Mobile App cũng sẽ giúp doanh nghiệp truyền thông marketing hiệu quả, quảng bá sản phẩm dịch vụ rộng rãi. Đặc biệt thương hiệu của doanh nghiệp đến gần với cộng đồng người dùng hơn.</p>
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
                                <img src="/imgACTech/banner-77.svg" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.field1}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.div_img_key}>
                                        <img src="/imgACTech/web-2-158-1024x987.png" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.text_key}>
                                        <h1>TẠI SAO DOANH NGHIỆP CẦN<br />
                                            THIẾT KẾ MOBILE APP?​</h1>
                                        <br />
                                        <div className={styles.underlined_key}></div>
                                        <div className={styles.p_text_key}>
                                            <p><strong>Mobile App</strong> hiện được ứng dụng và sử dụng ngày càng rộng rãi. Việc thiết kế Mobile App sẽ giúp doanh nghiệp giới thiệu sản phẩm, dịch vụ tới khách hàng nhanh chóng, đơn giản và thuận tiện. Từ đó tạo ra hiệu quả kinh doanh cao, đồng thời giúp doanh nghiệp sở hữu hệ thống CRM mini quản lý hàng ngàn khách hàng tiềm năng.</p><br />
                                        </div>
                                        <br /><br />
                                        <h1>LỰA CHỌN THIẾT KẾ<br />
                                            MOBILE APP TẠI ACTECH<br />
                                            CÓ LỢI THẾ GÌ?
                                        </h1>
                                        <br />
                                        <div className={styles.underlined_key}></div>
                                        <div className={styles.p_text_key}>
                                            <p><strong>ACTech</strong> là đơn vị thiết kế app đa lĩnh vực theo yêu cầu khách hàng. Với những ưu điểm vượt trội như: giao diện bắt mắt, dễ sử dụng, nhiều tính năng,… Chúng tôi luôn tự hào mang đến những sản phẩm chất lượng với mức chi phí tối ưu nhất cho quý khách hàng.</p><br />
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
                            <div className={styles.div_ti_logo}>
                                <h1 className={styles.title_appli}>
                                    QUY TRÌNH THIẾT KẾ<br />
                                    MOBILE APP TẠI
                                </h1>
                                <img className={styles.logo_procedure} src="/imgACTech/web-1-18.svg" />
                                <div className={styles.underlined}></div>
                            </div>

                            <Row gutter={24}>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/mobile-app-78.svg" />
                                        <h1>BƯỚC 1</h1>
                                        <h1>GẶP VÀ TRAO ĐỔI<br />
                                            THÔNG TIN</h1>
                                        <br />
                                        <div className={styles.text_call_appli}>
                                            <p>ACTech sẽ thảo luận với khách hàng về nội dung và hình thức để có thể thiết kế một Mobile App khác biệt và độc đáo.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/mobile-app-79.svg" />
                                        <h1>BƯỚC 2</h1>
                                        <h1>LÊN<br />
                                            GIẢI PHÁP</h1>
                                        <br />
                                        <div className={styles.text_call_appli}>
                                            <p>Chúng tôi sẽ lập kế hoạch thiết kế Mobile App, đồng thời sẽ tư vấn hỗ trợ khách hàng để tối ưu chức năng cũng như chi phí. Để có sản phẩm tốt nhất đến quý khách.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/mobile-app-80.svg" />
                                        <h1>BƯỚC 3</h1>
                                        <h1>GỬI BÁO GIÁ<br />
                                            VÀ HỢP ĐỒNG</h1>
                                        <br />
                                        <div className={styles.text_call_appli}>
                                            <p>Chúng tôi đưa ra báo giá phù hợp với nhu cầu của khách hàng và ký hợp đồng</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/mobile-app-80.svg" />
                                        <h1>BƯỚC 4</h1>
                                        <h1>THIẾT KẾ<br />
                                            VÀ LẬP TRÌNH</h1>
                                        <br />
                                        <div className={styles.text_call_appli}>
                                            <p>Đội ngũ kỹ thuật sẽ thiết kế App dựa trên yêu cầu của khách hàng. Kết quả từng công đoạn sẽ được gửi đến khách hàng để phê duyệt và chỉnh sửa kịp thời..</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/linh-vuc-78.svg" />
                                        <h1>BƯỚC 5</h1>
                                        <h1>VẬN HÀNH BẢO TRÌ<br />
                                            THÔNG MINH</h1>
                                        <br />
                                        <div className={styles.text_call_appli}>
                                            <p>Chúng tôi luôn tâm niệm mỗi sản phẩm đều cần tư duy, chỉn chu và hoàn hảo trước khi đến tay khách hàng. Do đó mọi nội dung, lỗi sai đều được xử lý trước khi bàn giao cho khách.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8}>
                                    <div className={styles.cart_appli}>
                                        <img src="/imgACTech/mobile-app-82.svg" />
                                        <h1>BƯỚC 6</h1>
                                        <h1>AN NINH<br />
                                            THÔNG MINH</h1>
                                        <br />

                                        <div className={styles.text_call_appli}>
                                            <p>Triển khai và hỗ trợ khách hàng vận hành App một cách chuyên nghiệp, cung cấp đầy đủ các hướng dẫn và cách thức quản trị Mobile App. ACTech cam kết hỗ trợ xử lý yêu cầu nhanh nhất có thể.</p>
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