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


    const onChange = (key: string | string[]) => {
        setActiveKey(key);
        console.log(key);
    };

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <div className={`${styles.lable_call} ${activeKey.includes('1') ? styles.active : ''}`}>
                <p>Quản Lý Bảo Trì</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Giảm chi phí bảo trì</li>
                    <li>Lập kế hoạch bảo trì …</li>
                    <li>Tự động cảnh báo khi đến hạn bảo trì</li>
                    <li>Quản trình bảo trì sửa chữa, khắc phục sự cố khép kín.</li>
                    <li>Kiểm soát tồn kho vật tư, phụ tùng thay thế.</li>
                </ul>
            </div>,
        },
        {
            key: '2',
            label: <div className={`${styles.lable_call} ${activeKey.includes('2') ? styles.active : ''}`}>
                <p>Nâng Cao Hiệu Suất Thiết Bị Máy Móc</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Quản lý tập trung hồ sơ thiết bị, máy móc: thông tin chung, lịch sử vòng đời, nhân viên phụ trách, bảo hành & bảo hiểm,…</li>
                    <li>Nắm bắt thông tin, theo dõi và báo cáo tình hình tiêu thụ các vật tư bảo dưỡng, sửa chữa</li>
                    <li>Tra cứu mọi thông tin, lịch sử công việc bảo trì, sự cố, kiểm tra, thông tin bảo trì định kỳ, chi phí bảo trì</li>
                    <li>Tra cứu các thông tin về vận hành : chỉ số Meter, thời gian ngừng máy, sử dụng nhiên liệu, MTBF, MTTR…</li>
                    <li>Quản lý và tra cứu yêu cầu bảo trì, thông tin thiết bị, lịch sử bảo dưỡng thông qua</li>
                    <li>QRCode trên di động.</li>
                </ul>
            </div>,
        },
        {
            key: '3',
            label: <div className={`${styles.lable_call} ${activeKey.includes('3') ? styles.active : ''}`}>
                <p>Tăng Năng Suất Lao Động</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Việc quản lý tài sản hiệu quả sẽ giúp cho quá trình sản xuất, kinh doanh tiến hành thuận lợi, tăng năng suất lao động, đem lại lợi nhuận và hiệu quả kinh tế cao nhất. </li>
                </ul>
            </div>,
        },
    ];

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
                                        <img className={styles.img_logo} src="/imgACTech/Logo-41.svg" />
                                        <h1>QUẢN LÝ TÀI SẢN CỐ ĐỊNH DỄ DÀNG</h1>
                                        <div className={styles.div_img_left}>
                                            <p><strong>ACTech AMS</strong> là phần mềm chuyên phục vụ công tác quản lý tài sản cố định và công cụ dành cho doanh nghiệp sở hữu số lượng máy móc, trang thiết bị lớn.</p><br />
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
                                <img src="/imgACTech/web-2-169.svg" />
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
                                                <img src="/imgACTech/Logo-41.svg" />
                                                <h1>LÀ GÌ?​</h1>
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p><strong>AMS</strong> là từ viết tắt của Asset Management System, được xem là phần mềm chuyên phục vụ công tác quản lý tài sản cố định và công cụ dành cho doanh nghiệp sở hữu số lượng máy móc, trang thiết bị lớn. Với ACTech AMS, doanh nghiệp vận hành tốt bộ máy sản xuất và kinh doanh tốt hơn thông qua việc làm giảm thiểu tình trạng hỏng hóc, giảm chi phí bảo trì, nâng cao năng suất và hiệu quả của hoạt động khai thác, vận hành tài sản, thiết bị của doanh nghiệp.</p><br />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_f}>
                                        <img src="/imgACTech/web-2-170.svg" />
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
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/web-2-218.svg" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Việc phân loại tài sản cố định chưa thống nhất với tính chất tham gia của tài sản cố định</p>
                                    </div>
                                </div>
                            </Col>

                            <Col className={styles.col_48}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/web-2-219.svg" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Xác định sai nguyên giá, giá trị hao mòn và khấu hao tài sản cố định</p>
                                    </div>
                                </div>
                            </Col>

                            <Col className={styles.col_48}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/web-2-222.svg" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Phương pháp khấu hao tài sản cố định bất hợp lý</p>
                                    </div>
                                </div>
                            </Col>

                            <Col className={styles.col_48}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/web-2-220.svg" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Tính sai chi phí sửa chữa lớn tài sản cố định</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.col_48}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="/imgACTech/web-2-221.svg" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Thiếu thông tin kết quả kinh doanh trong quá khứ</p>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </div>

                <div className={styles.field3}>
                    <div className={styles.product}>
                        <div className={styles.main_field}>
                            <h1 className={styles.h1_mfie}>
                                TÍNH NĂNG NỔI BẬT
                            </h1>
                            <div className={styles.field_img}>
                                <img src="/imgACTech/Logo-41.svg" />
                            </div>
                            <div className={styles.underlined_red}></div>
                            <Row gutter={12}>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-2-171.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Khai báo/đăng ký

                                                danh mục thiết bị.</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-2-172.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Cập nhật và quản lý nhật ký, nhật trình sử dụng, vận hành của từng thiết bị.</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-2-173.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Cho thuê tài sản, thiết bị.</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-2-174.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Nhắc lịch bảo trì/bảo dưỡng tài sản.</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-2-175.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Thiết lập linh hoạt các thông tin tài sản cần quản lý, quy trình tương tác, phê duyệt.</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-2-176.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Nhân viên dễ dàng tương tác & thông báo tình trạng tài sản như mất, hỏng hóc,…</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/MKT-140.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Trạng thái tài sản: Số lượng, tình trạng, thông số kỹ thuật, quá trình sử dụng.</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-2-177.svg" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Tự động kết nối với các ứng dụng khác trong nền tảng quản trị doanh nghiệp.</h3>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </div>
                </div>

                <div className={styles.field2}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.benefit}>
                                        <h1>
                                            LỢI ÍCH CỦA VIỆC QUẢN LÝ THIẾT BỊ TÀI SẢN
                                        </h1>
                                        <img src='/imgACTech/Logo-41.svg' />
                                        <div className={styles.underlined_key}></div>

                                        <p><strong>AMS</strong> giúp doanh nghiệp quản lý từ thông tin hồ sơ tài sản, kế hoạch bảo dưỡng tài sản, thiết bị, cập nhật và tra cứu nhật trình, nhật ký vận hành của thiết bị,… làm tiết kiệm chi phí, tối ưu hiệu quả sử dụng tài sản, dễ dàng tra cứu trạng thái sử dụng, phân bổ hợp lý.</p>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.benefit_r}>
                                        <Collapse className={styles.collapse} items={items} defaultActiveKey={['1']} onChange={onChange} />
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


                <div className={styles.field4}>
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