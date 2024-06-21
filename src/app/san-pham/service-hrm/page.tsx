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
                                        <img className={styles.img_logo} src="/imgACTech/Logo-33.png" />
                                        <h1>QUẢN LÝ NGUỒN NHÂN LỰC TOÀN DIỆN, ĐẦY ĐỦ</h1>
                                        <div className={styles.div_img_left}>
                                            <p><strong>HRM</strong> là viết tắt của cụm từ Human Resource Management, có thể được hiểu đơn giản là quản trị sức lao động của con người. Trong đó, quản trị nhân lực có những mục tiêu và vai trò mà các doanh nghiệp phải quan tâm.</p><br />
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
                                <img src="/imgACTech/banner-HRM-84.png" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.field2}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_f}>
                                        <img src="/imgACTech/web-1-75.png" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_r}>
                                            <div className={styles.img_secrmr}>
                                                <img src="/imgACTech/Logo-33.png" />
                                                <h1>LÀ GÌ?​</h1>
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p><strong>HRM</strong> là viết tắt của cụm từ Human Resource Management, có thể được hiểu đơn giản là quản trị sức lao động của con người. Trong đó, quản trị nhân lực có những mục tiêu và vai trò mà các doanh nghiệp phải quan tâm.</p><br />
                                                <p>Công nghệ quản trị nguồn nhân lực ACTech HRM giúp các doanh nghiệp quản trị nguồn nhân lực hiệu quả xuyên suốt quá trình tuyển dụng, quản lý hồ sơ, theo dõi chấm công, quản lý KPI, đánh giá năng lực, đào tạo,… Qua đó, nhà quản trị có thể xác định nhân sự phù hợp với nhu cầu của doanh nghiệp và hoạch định chiến lược phát triển nguồn nhân lực hiệu quả.</p>
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
                        <h1>
                            DOANH NGHIỆP CỦA BẠN<br />
                            ĐANG GẶP PHẢI VẤN ĐỀ
                            <div className={styles.underlined_red}></div>
                        </h1>
                        <Row gutter={12}>
                            <Col span={24} lg={8}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/banner-HRM-85.png" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Tốn chi phí đào tạo nhưng không xây được lộ trình thăng tiến rõ ràng, không giữ chân được nhân tài.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col span={24} lg={8}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/banner-HRM-86.png" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Hệ thống chấm công, tính lương thủ công khiến cho bộ phận nhân sự – kế toán mất nhiều thời gian tổng hợp, thường xuyên sai sót.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col span={24} lg={8}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/banner-HRM-87.png" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Nhà quản lý thiếu công cụ để đo lường, kiểm soát mục tiêu dẫn đến thiếu kịp thời trong khen thưởng, chế độ lương,  đãi ngộ.</p>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </div>

                <div className={styles.field}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_f}>
                                        <img src="/imgACTech/banner-HRM-90.png" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_r}>
                                            <div className={styles.img_secrmr}>
                                                <h1>TẠI SAO DOANH NGHIỆP CỦA BẠN CẦN</h1>
                                                <img src="/imgACTech/Logo-33.png" />
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p>ACTech HRM là ứng dụng công nghệ quản lý nhân sự một cách toàn diện, chuyên nghiệp, từ xây dựng cơ cấu tổ chức, quản lý hồ sơ nhân sự, đến chấm công, tính lương, quản lý BHYT, BHXH, Thuế TNCN, tuyển dụng, đào tạo, đánh giá nhân sự qua KPIs với quy trình đạt chuẩn. Với ACTech HRM, nhà quản lý có thể đề xuất và triển khai các chính sách lương thưởng và phúc lợi phù hợp. Từ đó góp phần tạo động lực, thúc đẩy nhân viên để mang lại kết quả tốt nhất cho doanh nghiệp.</p><br />
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
                            <img className={styles.img_logo_tn} src="/imgACTech/Logo-33.png" />
                            <h1>
                                CÓ NHỮNG TÍNH NĂNG GÌ?
                                <div className={styles.underlined_red}></div>
                            </h1>
                        </div>
                        <Row gutter={24}>
                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/banner-HRM-91.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý tuyển dụng</h3>
                                        <p>Doanh nghiệp dễ dàng theo dõi các công việc, vị trí còn trống, đơn ứng tuyển, phỏng vấn, xử lý các quy trình tuyển dụng một cách tự động (không cần can thiệp thủ công), v.v….. </p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-1-32-20221210155056-ukpwo.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý nhân sự</h3>
                                        <p>Giúp doanh nghiệp có cái nhìn tổng quan đối với tất cả các thông tin quan trọng trong hồ sơ nhân sự. Các luồng thông tin được phân cấp giúp từng cấp quản lý hoặc nhân sự được phép tìm kiếm thông tin nhân sự phục vụ cho công việc dễ dàng. Đồng thời, quản lý tài sản công cho nhân viên, quản lý chuyển công ty nội bộ, quản lý nghỉ việc.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/banner-HRM-92.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý đào tạo</h3>
                                        <p>Giúp kiểm soát các khóa học, lộ trình đào tạo cho từng đối tượng nhân viên.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/banner-HRM-93.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý chấm công</h3>
                                        <p>Chấm công thông qua công cụ, giải quyết các trường hợp nghỉ có phép/ không phép, đánh giá mức độ chuyên cần.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-1-35-20221210155100-uzo7j.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Kiểm tra, đánh giá KPI</h3>
                                        <p>Đánh giá và quản lý hiệu quả công việc dựa vào các chỉ số KPI trên phần mềm quản lý nhân sự ACTech HRM giúp doanh nghiệp đánh giá được chính xác hiệu quả làm việc của từng nhân viên, đồng thời tiết kiệm chi phí, nguồn lực và thời gian cho doanh nghiệp.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>


                <div className={styles.field2}>
                    <div className={styles.product}>
                        <div className={styles.main_field}>
                            <div className={styles.div_img_logo}>
                                <h1 className={styles.h1_noibat}>
                                    LỢI THẾ SỬ DỤNG
                                </h1>
                                <img className={styles.img_logo_tn} src="/imgACTech/Logo-33.png" />
                                <div className={styles.underlined_red}></div>
                            </div>
                            <Row gutter={24}>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/CRM-new-66.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <p>Số hóa và lưu trữ toàn bộ hồ sơ nhân sự, hợp đồng lao động, quản lý phép, bù công, tra cứu dễ dàng.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/CRM-new-67.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <p>Bảo mật thông tin nhân sự, tiền lương giữa các nhân viên.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/CRM-new-68.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <p>Đánh giá đúng – đủ ngày công, chuyên cần. Tính lương, thưởng tự động trên hệ thống phù hợp với từng nhân viên, từng vị trí.</p>
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