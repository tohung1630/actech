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
                                        <img className={styles.img_logo} src="/imgACTech/Logo-37.png" />
                                        <h1>QUẢN LÝ KHO SẢN XUẤT THÔNG MINH</h1>
                                        <div className={styles.div_img_left}>
                                            <p>Quản lý và kiểm kê kho ACTech SSM là công cụ hỗ trợ doanh nghiệp quản trị tổng thể các vấn đề xoay quanh tình hình xuất nhập kho, hàng tồn kho…thống kê, lưu trữ các thông tin hàng hóa.</p><br />
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
                                <img src="/imgACTech/web-2-196.png" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.field}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>

                                <Col span={24} lg={12}>
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_r}>
                                            <div className={styles.img_secrmr}>
                                                <img src="/imgACTech/Logo-37.png" />
                                                <h1>LÀ GÌ?​</h1>
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p>Quản lý và kiểm kê kho <strong>ACTech SSM</strong> là công cụ hỗ trợ doanh nghiệp quản trị tổng thể các vấn đề xoay quanh tình hình xuất nhập kho, hàng tồn kho…thống kê, lưu trữ các thông tin hàng hóa. ACTech SSM giúp người dùng quản lý hàng hóa xuyên suốt từ quá trình nhập kho, điều chuyển nội bộ, kiểm kê hàng hóa, xuất kho, vận chuyển,…đến tổng hợp và đối chiếu công nợ. Từ đó, người dùng có thể dễ dàng nắm bắt tình hình kinh doanh của doanh nghiệp nhằm giảm thiểu tối đa rủi ro, tiết kiệm thời gian và tối ưu chi phí.</p><br />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_f}>
                                        <img src="/imgACTech/web-2-197.png" />
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
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/AFM-132.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Sắp xếp kho thiếu khoa học</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={6}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-1-26-20221208180821-xqrmw.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Không lập được kế hoạch dự trữ hợp lý.</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={6}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-185.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Lơ là trong công tác kiểm kê hàng hóa.</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={6}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-190.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Gặp nhiều sai sót trong việc đặt hàng</h3>
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
                                        <img src="/imgACTech/web-2-198.png" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_r}>
                                            <div className={styles.img_secrmr}>
                                                <h1>QUẢN LÝ NHÀ KHO TỰ ĐỘNG
                                                    GIA TĂNG HIỆU SUẤT
                                                    BÁN HÀNG
                                                </h1>
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p>Việc dữ liệu không được đồng bộ và cập nhật liên tục giữa bộ phận kho, kế toán, bán hàng, sản xuất….nên doanh nghiệp mất nhiều thời gian, công sức, chi phí để quản lý. Hãy để <strong>ACTech SSM</strong> giúp bạn quản lý kho tự động để từ đó gia tăng hiệu suất bán hàng.</p><br />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className={styles.product}>
                    <div className={styles.main_field}>
                        <div className={styles.div_img_logo}>
                            <h1>
                                TÍNH NĂNG NỔI BẬT CỦA
                            </h1>
                            <img className={styles.img_logo_tn} src="/imgACTech/Logo-37.png" />
                            <div className={styles.underlined_red}></div>
                        </div>
                        <Row gutter={24}>
                            <Col span={12} lg={6} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-2-200.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý kho hàng</h3>
                                        <p>Hỗ trợ người dùng nhập liệu, lưu trữ và tra cứu thông tin; quản lý và tự động cập nhật số lượng hàng trong kho, cảnh báo hàng cận date,…</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={6} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-2-201.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý đơn hàng</h3>
                                        <p>Hỗ trợ người dùng tạo đơn và kiểm soát toàn bộ trạng thái đơn hàng một cách tự động, dễ dàng.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col span={12} lg={6} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-2-202.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Báo cáo quản trị</h3>
                                        <p>Quản lý công nợ, dòng tiền,…và đưa ra báo cáo dựa trên những dữ liệu được tổng hợp và phân tích tự động.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col span={12} lg={6} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-2-202.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý giao hàng</h3>
                                        <p>Kết nối với các đối tác vận chuyển, thiết lập chuyên dụng cho hoạt động quản lý đội xe, điều phối, báo cáo … hỗ trợ người vận hành dễ dàng, giảm thiểu sai sót. Giúp doanh nghiệp cải thiện hiệu quả vận chuyển, giảm chi phí, đạt được khả năng hiển thị chuỗi cung ứng theo thời gian thực. Ngoài ra hỗ trợ kết nối , kiểm soát với các đơn vị vận chuyển thứ ba.</p>
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

                                        <img src="/imgACTech/web-2-199.png" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_r}>
                                            <div className={styles.img_secrmr}>
                                                <h1>LỢI THẾ SỬ DỤNG​</h1>
                                                <img src="/imgACTech/Logo-37.png" />
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p>Công nghệ quản lý kho sản xuất ACTech SSM giúp mọi thông tin và dữ liệu được duy trì xuyên suốt, đồng bộ và kế thừa lẫn nhau giữa các bộ phận như kho, bán hàng, kế toán…giúp tiết kiệm 90% thời gian trao đổi, xử lý công việc.</p><br />
                                                <p>Hệ thống báo cáo tồn kho theo thời gian thực cho biết được mặt hàng sắp hết, mặt hàng tồn nhiều, hàng sắp đến hạn… để có kế hoạch kinh doanh, xuất, nhập kho phù hợp.</p>
                                            </div>
                                        </div>
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