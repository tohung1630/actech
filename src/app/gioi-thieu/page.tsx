'use client'
import React, { useState } from "react";
import ReactDOM from "react-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { Carousel } from 'antd';
import { Row, Col, Modal } from 'antd';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {
    FacebookOutlined,
    TikTokOutlined,
    InstagramOutlined,
    YoutubeOutlined,
    ArrowRightOutlined
} from '@ant-design/icons';
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
                                            <div className={styles.div_img_left}>
                                                <p><strong>ACTech</strong> với khát vọng đồng hành cùng doanh nghiệp giải quyết “BÀI TOÁN QUẢN TRỊ” đa ngành nghề với độ linh hoạt cao và phù hợp với doanh nghiệp ở nhiều quy mô và lĩnh vực. </p>
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
                                    <img src="/imgACTech/web-2-155.svg" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className={styles.field}>
                    <div className={styles.div_field}>
                        <div className={`${styles.main_field} ${styles.background_field}`}>
                            <h1>
                                VỀ ACTECH
                                <div className={styles.underlined}></div>
                            </h1>
                            <p>Những sản phẩm của ACTech SMT: CRM, HRM, OFFICE, MRP, AFM, MARKETING, SSM, DAS, MBO, DMS+, ASM, PURCHASE…được lập trình dựa trên các nền tảng công nghệ hiện đại. Với đội ngũ chuyên gia giàu kinh nghiệm, cùng các lập trình viên có trình độ. ACTech luôn sáng tạo để nâng cao hiệu suất quản trị, quy trình tự động hóa. Đó chính là những tiêu chí hàng đầu để ACTech giúp các nhà quản trị hoạch định chiến lược rõ ràng, phát huy hết nguồn lực doanh nghiệp cho khách hàng và đối tác.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.product}>
                    <div className={styles.main_field}>
                        <Row gutter={24}>
                            <Col span={12} lg={6}>
                                <div className={styles.cart_prod}>
                                    <img src="/imgACTech/icon-trang-ve-chung-toi-60.svg" />
                                    <h1>SỨ MỆNH</h1>
                                    <p>
                                        Sứ mệnh của ACTech là mang đến quy trình tự động hóa, nâng cao năng lực quản trị, tối ưu các phương pháp quản lý doanh nghiệp. Giúp các nhà quản trị nắm bắt thông tin nhanh hơn, đưa ra những quyết định kịp thời dựa trên các dữ liệu được phân tích chuyên sâu, tổng hợp và báo cáo tự động nhằm tiết kiệm thời gian và mang lại hiệu quả kinh tế cao.
                                    </p>
                                </div>
                            </Col>
                            <Col span={12} lg={6}>
                                <div className={styles.cart_prod}>
                                    <img src="/imgACTech/icon-trang-ve-chung-toi-61.svg" />
                                    <h1>TẦM NHÌN</h1>
                                    <p>
                                        Mục tiêu dài hạn của ACTech là trở thành công ty công nghệ hàng đầu, không ngừng sáng tạo những sản phẩm công nghệ quản trị thông minh nhằm giải quyết triệt để “bài toán” quản trị đa ngành nghề, góp phần thúc đẩy sự tăng trưởng năng suất công việc và hiệu quả kinh tế vượt bậc cho các doanh nghiệp, tổ chức kinh tế – xã hội,…
                                    </p>
                                </div>
                            </Col>
                            <Col span={12} lg={6}>
                                <div className={styles.cart_prod}>
                                    <img src="/imgACTech/icon-trang-ve-chung-toi-62.svg" />
                                    <h1>CHIẾN LƯỢC PHÁT TRIỂN</h1>
                                    <p>
                                        Với kim chỉ nam “Sự phát triển của khách hàng là mục tiêu hàng đầu”, ACTech luôn không ngừng sáng tạo nhằm nâng cao chất lượng sản phẩm, dịch vụ. Từ đó, mang đến những công nghệ quản trị tối ưu, quy trình tự động hóa cùng những trải nghiệm tuyệt vời nhất.
                                    </p>
                                </div>
                            </Col>
                            <Col span={12} lg={6}>
                                <div className={styles.cart_prod}>
                                    <img src="/imgACTech/icon-trang-ve-chung-toi-63.svg" />
                                    <h1>ĐỘI NGŨ NHÂN SỰ</h1>
                                    <p>
                                        ACTech có những chuyên gia nước ngoài kinh nghiệm nhiều năm ở các nước Châu  Âu, Mỹ, Nhật Bản,…cùng các lập trình viên có trình độ cao. Đặc biệt ACTech chú trọng đào tạo đội ngũ nhân lực để nâng cao chất lượng vì mục tiêu nhằm mang đến những sản phẩm công nghệ chất lượng tốt nhất dành cho khách hàng.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className={styles.field1}>
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