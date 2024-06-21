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
                                        <img className={styles.img_logo} src="/imgACTech/Logo-38.svg" />
                                        <h1>PHÂN HỆ QUẢN LÝ MUA HÀNG TIỆN LỢI</h1>
                                        <div className={styles.div_img_left}>
                                            <p>Purchase giúp doanh nghiệp tự động hóa quy trình mua hàng, quản lý đấu thầu mua hàng</p><br />
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
                                <img src="/imgACTech/web-2-183.svg" />
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
                                                <img src="/imgACTech/Logo-38.svg" />
                                                <h1>LÀ GÌ?​</h1>
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p><strong>Purchase (Purchase Management)</strong> là phân hệ quản lý mua hàng. Purchase giúp doanh nghiệp tự động hóa quy trình mua hàng, quản lý đấu thầu mua hàng, tự động gửi yêu cầu mua hàng đến các nhà cung cấp dựa trên mức tồn kho của kho hàng, cải thiện hiệu suất mua hàng và kiểm kê với các quy tắc cung ứng tùy thuộc vào lượng hàng tồn kho, quy tắc hậu cần, đơn đặt hàng bán hàng, dự báo đơn đặt hàng sản xuất.</p><br />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_f}>
                                        <img src="/imgACTech/web-2-184.svg" />
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
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-183.svg" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Hiệu quả và doanh thu bán hàng thấp, chưa tiếp cận được với nhiều khách hàng.</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-184.svg" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Rủi ro khi đề nghị mua hàng và dịch vụ: Người mua không nắm và kiểm soát được số lượng hàng tồn kho mà vẫn mua hàng, gây lãng phí ngân sách.</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-190.svg" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Lựa chọn nhà cung cấp chưa đáp ứng đúng – trúng nhu cầu của doanh nghiệp.</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-196.svg" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Khó khăn khi kiểm tra và nhận hàng</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-189.svg" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Rủi ro thanh toán: Các vấn đề gặp phải có thể là hồ sơ thanh toán không có đầy đủ chứng từ quy định, đơn hàng không được phê duyệt hay số lượng hàng hoá có vấn đề, đang tranh chấp mà vẫn yêu cầu thanh toán.</h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className={styles.field2}>
                    <div className={styles.product}>
                        <div className={styles.main_field}>
                            <h1 className={styles.h1_logo_b}>
                                MỤC TIÊU CỦA
                            </h1>
                            <div className={styles.img_logo_g}>
                                <img src="/imgACTech/Logo-38.svg" />
                                <div className={styles.underlined_red}></div>
                                <p>Giúp kiểm soát quá trình mua hàng của doanh nghiệp, đảm bảo đáp ứng được đúng yêu cầu mua sắm thực tế với 5 yêu cầu sau:</p>
                            </div>

                            <Row gutter={12}>
                                <Col className={styles.col_48}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-2-185.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Đúng thời gian</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col className={styles.col_48}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-2-186.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Đúng mặt hàng</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col className={styles.col_48}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-2-187.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Đúng số lượng</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col className={styles.col_48}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-2-188.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Giá hợp lý

                                                Chất lượng sản phẩm tốt</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col className={styles.col_48}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-2-189.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Nguồn thông tin chính xác</h3>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className={styles.product}>
                    <div className={styles.main_field}>
                        <h1 className={styles.h1_logo_b}>
                            TÍNH NĂNG NỔI BẬT CỦA
                        </h1>
                        <div className={styles.img_logo_g}>
                            <img src="/imgACTech/Logo-38.svg" />
                        </div>
                        <div className={styles.underlined_red}></div>

                        <Row gutter={12}>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-191-150x150.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Quản lý mua hàng: Giảm bớt số lượng hàng tồn kho với các quy tắc mua hàng.</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-192-150x150.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Tự động đề xuất mua hàng, đấu thầu mua hàng: Bạn sẽ có được giá tốt nhất bằng cách đàm phán với một số nhà cung cấp</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-193-150x150.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Tích hợp Email: Báo giá, đấu thầu và gửi hóa đơn thanh toán đến nhà cung cấp.</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-194-150x150.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Kiểm soát sản phẩm và hóa đơn</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/web-2-195-150x150.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Báo cáo thống kê lịch sử đơn mua hàng, phân loại theo mặt hàng.</h3>
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

                                        <img src="/imgACTech/web-2-190.svg" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_r}>
                                            <div className={styles.img_secrmr}>
                                                <h1>ƯU THẾ NỔI BẬT CỦA</h1>
                                                <img src="/imgACTech/Logo-38.svg" />
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p>Tự động tạo các yêu cầu mua sắm, yêu cầu khởi tạo cho báo giá từ thỏa thuận mua hàng, theo dõi đơn hàng, quản lý thông tin, kiểm soát việc nhận hàng và kiểm tra hóa đơn của nhà cung cấp. Bạn có thể làm tất cả và nhiều hơn nữa với hệ thống quản lý mua hàng của chúng tôi.</p><br />
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