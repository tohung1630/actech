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
import Link from 'next/link';
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
                <div className={`${styles.contentStyle}`}>
                    <img className={styles.img_conter} src="/imgACTech/background-1-1910x557.png" />
                    <img className={styles.img_conter_logo} src="/imgACTech/web-2-152-453x402.png" />
                    <Row gutter={24}>
                        <Col span={24} lg={12}>
                            <div className={styles.text_car}>
                                <div className={styles.text_car_tow}>
                                    <div className={styles.text_carth}>
                                        <img className={styles.img_logo} src='/imgACTech/ACTech_Horizontal-1.png' />
                                        <h1>TIN VĂN HÓA DOANH NGHIỆP VÀ KINH DOANH</h1>
                                        <div className={styles.div_img_left}>
                                            <p>Cùng ACTech cập nhật những thông tin mới nhất…</p><br />
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
                                <img src="/imgACTech/web-2-161.svg" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.news}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={15}>
                                    <Carousel arrows={true} autoplay className='caro_home caro_new'>
                                        <div>
                                            <Link href="tin-tuc-su-kien/chinh-sach-nhan-su">
                                                <div className={`${styles.carouselDiv}`}>
                                                    <img src="imgACTech/news1.jpg" />
                                                    <div className={styles.title_news}>
                                                        <h1>Định nghĩa về chính sách nhân sự? Cách thu hút nhân tài về cho doanh nghiệp?</h1>
                                                        <br />
                                                        <p>Chính sách nhân sự vô cùng quan trọng đối với doanh nghiệp. Đó là yếu tố thiết yếu trong việc thu hút được nhân tài, xây dựng và phát triển, để từ đó tăng sự cạnh tranh doanh nghiệp trên thị trường. </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="tin-tuc-su-kien/xu-huong-cua-erp-trong-tuong-lai">
                                                <div className={`${styles.carouselDiv}`}>
                                                    <img src="imgACTech/news2.jpg" />
                                                    <div className={styles.title_news}>
                                                        <h1>Xu hướng của ERP trong tương lai</h1>
                                                        <br />
                                                        <p>Hệ thống ERP hiện nay được ví như một trợ thủ đắc lực trong doanh nghiệp, hỗ trợ quản lý tất cả các phòng ban của doanh nghiệp một</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="tin-tuc-su-kien/quy-trinh-cham-soc-khach-hang">
                                                <div className={`${styles.carouselDiv}`}>
                                                    <img src="imgACTech/news3.jpg" />
                                                    <div className={styles.title_news}>
                                                        <h1>4 bước xây dựng quy trình chăm sóc khách hàng</h1>
                                                        <br />
                                                        <p>Trong bối cảnh cạnh tranh giữa các doanh nghiệp không ngừng gia tăng, việc chú trọng vào trải nghiệm khách hàng ngày càng được các doanh nghiệp ưu tiên.</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href="tin-tuc-su-kien/quan-ly-kho-hang-la-gi">
                                                <div className={`${styles.carouselDiv}`}>
                                                    <img src="imgACTech/news4.jpg" />
                                                    <div className={styles.title_news}>
                                                        <h1>Quản lý kho hàng là gì? Công việc cần làm khi quản lý kho hàng?</h1>
                                                        <br />
                                                        <p>Quản lý kho là công đoạn cần thiết và vô cùng quan trọng trong việc sắp xếp, nắm bắt thông tin sản phẩm, hàng hóa của doanh nghiệp hoặc cửa hàng. Việc kinh doanh càng phát triển, số lượng hàng hóa trong kho cũng ngày càng tăng cao.</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </Carousel>
                                    <div className={styles.most_view}>
                                        <h2>BÀI VIẾT XEM NHIỀU NHẤT</h2>
                                        <Row gutter={24}>
                                            <Col span={24} lg={8}>
                                                <Link href="tin-tuc-su-kien/tri-tue-nhan-tao-trong-marketing">
                                                    <div className={styles.img_most_view}>
                                                        <img src="/imgACTech/news5.png" />
                                                    </div>
                                                    <h5>Ứng dụng của trí tuệ nhân tạo (AI) đem lại trong Marketing</h5>
                                                </Link>
                                            </Col>

                                            <Col span={24} lg={8}>
                                                <Link href="tin-tuc-su-kien/phuong-phap-kaizen-la-gi">
                                                    <div className={styles.img_most_view}>
                                                        <img src="/imgACTech/news6.jpg" />
                                                    </div>
                                                    <h5>Phương pháp Kaizen là gì? Lợi ích Kaizen mang lại cho doanh nghiệp?</h5>
                                                </Link>
                                            </Col>
                                            <Col span={24} lg={8}>
                                                <Link href="tin-tuc-su-kien/actech-loat-giai-phap-entech-2023">
                                                    <div className={styles.img_most_view}>
                                                        <img src="/imgACTech/news7.jpg" />
                                                    </div>
                                                    <h5>ACTECH giới thiệu loạt giải pháp quản trị ưu việt tới ENTECH Hanoi 2023</h5>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={24} lg={9}>
                                    <div className={styles.latest_updates}>
                                        <h2>CẬP NHẬT MỚI NHẤT</h2>
                                        <div className={styles.cart_latest_updates}>
                                            <div>
                                                <Link href="/tin-tuc-su-kien/chinh-sach-nhan-su">
                                                    <Row gutter={24}>
                                                        <Col span={12}>
                                                            <div className={styles.img_cart_lu}>
                                                                <img src="imgACTech/news1.jpg" />
                                                            </div>
                                                        </Col>
                                                        <Col span={12}>
                                                            <div className={styles.text_cart_lu}>
                                                                <p>Định nghĩa về chính sách nhân sự? Cách thu hút nhân tài về cho doanh nghiệp?</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href="tin-tuc-su-kien/xu-huong-cua-erp-trong-tuong-lai">
                                                    <Row gutter={24}>
                                                        <Col span={12}>
                                                            <div className={styles.img_cart_lu}>
                                                                <img src="imgACTech/news2.jpg" />
                                                            </div>
                                                        </Col>
                                                        <Col span={12}>
                                                            <div className={styles.text_cart_lu}>
                                                                <p>Xu hướng của ERP trong tương lai</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href="tin-tuc-su-kien/quy-trinh-cham-soc-khach-hang">
                                                    <Row gutter={24}>
                                                        <Col span={12}>
                                                            <div className={styles.img_cart_lu}>
                                                                <img src="imgACTech/news3.jpg" />
                                                            </div>
                                                        </Col>
                                                        <Col span={12}>
                                                            <div className={styles.text_cart_lu}>
                                                                <p>4 bước xây dựng quy trình chăm sóc khách hàng</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href="tin-tuc-su-kien/quan-ly-kho-hang-la-gi">
                                                    <Row gutter={24}>
                                                        <Col span={12}>
                                                            <div className={styles.img_cart_lu}>
                                                                <img src="imgACTech/news4.jpg" />
                                                            </div>
                                                        </Col>
                                                        <Col span={12}>
                                                            <div className={styles.text_cart_lu}>
                                                                <p>Quản lý kho hàng là gì? Công việc cần làm khi quản lý kho hàng?</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className={styles.field_w}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={8}>
                                    <Link href="tin-tuc-su-kien/chuyen-doi-so-doanh-nghiep">
                                        <div className={styles.new_cart}>
                                            <img src="/imgACTech/Anh-content-Business_1-768x480.jpg" />
                                            <div className={styles.text_new_cart}>
                                                <h3>Chỉ có 30% doanh nghiệp chuyển đổi số thành công, doanh nghiệp của bạn có nằm trong số đó?</h3>
                                                <p>Trong thời đại số hóa ngày càng phát triển, việc chuyển đổi số đã trở thành một yêu cầu cấp bách đối với doanh nghiệp. Tuy nhiên, việc chuyển đổi số...</p>
                                                <button>Xem Ngay  <ArrowRightOutlined /></button>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>

                                <Col span={24} lg={8}>
                                    <Link href="tin-tuc-su-kien/actech-business-quan-ly-kinh-doanh">
                                        <div className={styles.new_cart}>
                                            <img src="/imgACTech/27115-768x538.jpg" />
                                            <div className={styles.text_new_cart}>
                                                <h3>Phần mềm ACTech Business, Tối ưu chi phí – Gia tăng lợi nhuận – Bứt phá doanh thu!</h3>
                                                <p>Trong môi trường kinh doanh cạnh tranh ngày nay, việc tối ưu chi phí, gia tăng lợi nhuận và bứt phá doanh thu là những yếu tố quan trọng để đạt được...</p>
                                                <button>Xem Ngay  <ArrowRightOutlined /></button>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>

                                <Col span={24} lg={8}>
                                    <Link href="tin-tuc-su-kien/actech-mrp-quan-ly-san-xuat-tu-dong">
                                        <div className={styles.new_cart}>
                                            <img src="/imgACTech/news8.png" />
                                            <div className={styles.text_new_cart}>
                                                <h3>ACTech MRP – Công nghệ Quản lý sản xuất tự động thông minh tinh gọn</h3>
                                                <p>Với thời đại công nghiệp 4.0 hiện nay, công nghệ ngày càng trở nên quan trọng và tác động đáng kể đến các ngành công nghiệp truyền thống. Trong lĩnh...</p>
                                                <button>Xem Ngay  <ArrowRightOutlined /></button>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>

                                <Col span={24} lg={8}>
                                    <Link href="tin-tuc-su-kien/nhung-con-gio-can-tro-doanh-nghiep">
                                        <div className={styles.new_cart}>
                                            <img src="/imgACTech/pti-733.png" />
                                            <div className={styles.text_new_cart}>
                                                <h3>3 cơn gió ngược cản trợ doanh nghiệp tư nhân vượt bão</h3>
                                                <p>Đây là nhận định của các chuyên gia tại Hội thảo Kinh tế Việt Nam 2023: SMEs đối diện và vượt bão do Tổ chức Giáo dục Đào tạo PTI và PBS tổ chức chiều...</p>
                                                <button>Xem Ngay  <ArrowRightOutlined /></button>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>

                                <Col span={24} lg={8}>
                                    <Link href="tin-tuc-su-kien/kinh-te-tu-nhan-can-tao-noi-luc">
                                        <div className={styles.new_cart}>
                                            <img src="/imgACTech/SK-PTI-799-1.jpg" />
                                            <div className={styles.text_new_cart}>
                                                <h3>Kinh tế tư nhân 2023 cần chính sách tạo nội lực để phát triển</h3>
                                                <p>Đó là chia sẻ của PGS.TS Trần Đình Thiên về tình hình hiện tại của kinh tế tư nhân tại hội thảo với chủ đề: “Kinh tế Việt Nam 2023: SMEs đối...</p>
                                                <button>Xem Ngay  <ArrowRightOutlined /></button>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>

                                <Col span={24} lg={8}>
                                    <Link href="tin-tuc-su-kien/xu-huong-phan-mem-quan-ly-crm">
                                        <div className={styles.new_cart}>
                                            <img src="/imgACTech/PR1_1-768x403.jpg" />
                                            <div className={styles.text_new_cart}>
                                                <h3>Xu hướng của các phần mềm Quản lý kinh doanh CRM hiệu quả hiện nay</h3>
                                                <p>Được nhận định là “cánh tay phải đắc lực” giúp doanh nghiệp bắt nhịp với công cuộc chuyển đổi số, các phần mềm quản lý kinh doanh CRM hiện nay đều...</p>
                                                <button>Xem Ngay  <ArrowRightOutlined /></button>
                                            </div>
                                        </div>
                                    </Link>
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