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
                    <img className={styles.img_conter_logo} src="/imgACTech/web-2-152-453x402.png" />
                    <Row gutter={24}>
                        <Col span={24} lg={12}>
                            <div className={styles.text_car}>
                                <div className={styles.text_car_tow}>
                                    <div className={styles.text_carth}>
                                        <img className={styles.img_logo} src="/imgACTech/Logo-36.png" />
                                        <h1>QUẢN LÝ TÀI CHÍNH VÀ KẾ TOÁN MINH BẠCH CHI TIẾT</h1>
                                        <div className={styles.div_img_left}>
                                            <p><strong>AFM</strong> là viết tắt của cụm từ Advanced Financial Management, có ý nghĩa là quản trị tài chính</p><br />
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
                                <img src="/imgACTech/web-1-110.png" />
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
                                                <img src="/imgACTech/Logo-36.png" />
                                                <h1>LÀ GÌ?​</h1>
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p>AFM là viết tắt của cụm từ Advanced Financial Management, có ý nghĩa là quản trị tài chính. Với công nghệ quản trị tài chính kế toán ACTech AFM sẽ giúp doanh nghiệp cập nhật, lưu trữ và kiểm soát toàn bộ thông tin về tài chính của công ty, doanh nghiệp.</p><br />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_f}>
                                        <img src="/imgACTech/AFM-111.svg" />
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
                                            <img src="/imgACTech/AFM-112.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Mất nhiều thời gian, công sức để làm báo cáo tài chính</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/AFM-113.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Sử dụng “cả trăm” file Excel, thiếu đồng bộ nên khó quản lý</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/AFM-114.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Sai lệch số liệu thường xuyên</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/AFM-115.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Quản lý thu chi, công nợ phức tạp</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_outstanding}>
                                    <div className={styles.cart_out}>
                                        <div className={styles.img_outstanding}>
                                            <img src="/imgACTech/AFM-116.png" />
                                        </div>
                                    </div>
                                    <div className={styles.text_outstanding}>
                                        <h3>Tốn quá nhiều thời gian để nhập/xuất dữ liệu</h3>
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
                                        <img src="/imgACTech/AFM-109.svg" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_r}>
                                            <div className={styles.img_secrmr}>
                                                <h1>TẠI SAO DOANH NGHIỆP CỦA BẠN CẦN</h1>
                                                <img src="/imgACTech/Logo-36.png" />
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p>Công nghệ quản trị tài chính kế toán <strong>ACTech AFM</strong> giúp giảm tối đa chi phí quản lý, kết xuất báo cáo theo thời gian. Với mục tiêu tối ưu hóa cho người dùng <strong>ACTech AFM</strong> đem đến những tính năng thiết thực nhất, hỗ trợ tối đa cho người dùng, sử dụng thời gian làm việc triệt để.</p><br />
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
                            <img className={styles.img_logo_tn} src="/imgACTech/Logo-36.png" />
                            <h1>
                                CÓ NHỮNG TÍNH NĂNG GÌ?
                                <div className={styles.underlined_red}></div>
                            </h1>
                        </div>
                        <Row gutter={24}>
                            <Col span={12} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/AFM-117.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <p>Quản lý hợp đồng, thuế, ngân sách</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/AFM-118.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <p>Tính lương thưởng của nhân viên, quản lý phiếu lương, chi phí của nhân viên.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col span={12} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/AFM-119.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <p>Quản lý các sổ nhật ký, bán hàng, mua hàng, sổ cái doanh nghiệp, sổ cái đối tác; Hoàn ứng; Tạm ứng; Phiếu chi và ứng lương….</p>
                                    </div>
                                </div>
                            </Col>


                            <Col span={12} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/AFM-120.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <p>Thanh toán tự động các khoản chi phí như: Chi phí mặt bằng, điện, nước,… theo định kỳ hàng tháng/quý/năm khi được cài đặt trước đó.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/AFM-121.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <p>Quản lý hóa đơn bán hàng, giá thành sản phẩm</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/AFM-122-1.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <p>Thông tin kho: Hợp nhất các báo cáo tài chính. Ngoài báo cáo tổng hợp, có tổng hợp các báo cáo đối tác, báo cáo kiểm toán , báo cáo MIS,…</p>
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
                                        <div className={styles.img_secrmr}>
                                            <h1>LỢI THẾ SỬ DỤNG​</h1>
                                            <img src="/imgACTech/Logo-36.png" />
                                            <div className={styles.underlined_key}></div>
                                        </div>
                                        <div className={styles.dip_f}>
                                            <div className={styles.service_crm_r}>
                                                <br />
                                                <div className={styles.text_secr}>
                                                    <ul>
                                                        <li><p>Chuẩn hóa nguồn dữ liệu liên quan đến tài chính, kế toán của doanh nghiệp.</p></li>
                                                        <li><p>Thiết lập và quản lý ngân sách chuyên nghiệp</p></li>
                                                        <li><p>Theo dõi thu chi hiệu quả</p></li>
                                                        <li><p>Xây dựng hệ thống báo cáo thuế chuẩn chỉnh, tự động hóa quy trình vận hành.</p></li>
                                                        <li><p>Bảo mật thông tin</p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.img_secrmr_c}>
                                        <img src="/imgACTech/office-108.png" />
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

                            <div className={styles.btn_submit}><input type="submit" value='ĐĂNG KÝ NGAY' /></div>
                            <p>{isEamil}</p>
                        </form>
                    </div>
                </Modal>
            </div>
        </DefaultLayout>
    )
}