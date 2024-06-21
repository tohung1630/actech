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
                <p>Công Nghệ Quản Trị Tích Hợp AI</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Trợ lý công nghệ Anka hỗ trợ điều hành công việc quản lý doanh nghiệp bằng giọng nói, kiểm soát công việc, kiểm soát lỗi, tự động cân bằng tiến độ các phòng ban và nhân viên, báo cáo tự động trên nền tảng quản trị hệ thống SMT kinh doanh – sản xuất – tài chính – nhân sự.</li>
                </ul>
            </div>,
        },
        {
            key: '2',
            label: <div className={`${styles.lable_call} ${activeKey.includes('2') ? styles.active : ''}`}>
                <p>Công Nghệ Camera AI</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Bước đột phá về quản lý hình ảnh ứng dụng trong doanh nghiệp , nhà máy, nhà trường, giao thông, gia đình và xã hội…; Nhận diện khuôn mặt: quản lý nhân sự, chấm công; Quản lý gửi xe, nhận diện phương tiện – xe máy, oto, xe bus, xe tải; Camera an ninh – kiểm soát an ninh, cảnh báo nguy cơ.</li>
                </ul>
            </div>,
        },
        {
            key: '3',
            label: <div className={`${styles.lable_call} ${activeKey.includes('3') ? styles.active : ''}`}>
                <p>Công Nghệ Giáo Dục Bằng AI - Anka</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Học ngoại ngữ, chương trình học phổ thông, tìm hiểu thế giới, giáo dục thể chất, kho sách, giải trí cho trẻ em… giúp trẻ nâng cao trí tuệ và thể chất toàn diện.</li>
                </ul>
            </div>,
        },
        {
            key: '4',
            label: <div className={`${styles.lable_call} ${activeKey.includes('4') ? styles.active : ''}`}>
                <p>Công Nghệ Giải Trí Tích Hợp AI - Anka</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Khám phá thế giới, nghe nhạc, xem phim, du lịch, sách nói, thể thao, mạng xã hội, điện thoại, nói chuyện với Anka…</li>
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
                                        <img className={styles.img_logo} src='/imgACTech/ANKA-LOGO.png' />
                                        <h1>TRỢ LÝ CÔNG NGHỆ TOÀN DIỆN</h1>
                                        <div className={styles.div_img_left}>
                                            <p><strong>Anka</strong> là công nghệ trí tuệ nhân tạo tiên phong tại Việt Nam, được phát triển bởi công ty công nghệ ACTech, giúp người dùng thực hiện nhiều tác vụ dễ dàng thông qua giao tiếp giữa con người với máy, là bước đột phá công nghệ ứng dụng cho công việc, giáo dục, giải trí, và hướng tới cuộc sống có chất lượng cao hơn.</p><br />
                                        </div>
                                        <div className={styles.div_btn}>
                                            <button className={styles.btn_advise} onClick={showModal}>Đăng ký tư vấn <ArrowRightOutlined /></button>
                                            <button className={styles.btn_trial}>Video giới thiệu <ArrowRightOutlined /></button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col span={24} lg={12}>
                            <div className={styles.img_car}>
                                <img src="/imgACTech/DAU-TRANG.webp" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.field}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <div className={styles.business2}>
                                <h1>KIẾN THỨC ĐA LĨNH VỰC</h1>
                                <div className={styles.underlined_red}></div>
                            </div>
                            <Row gutter={24}>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_field}>
                                        <Row gutter={24}>
                                            <Col span={12}>
                                                <img className={styles.img_cart_fi} src="/imgACTech/Tim-dia-diem-1.png" />
                                            </Col>
                                            <Col span={12}>
                                                <div className={styles.text_cart_fi}>
                                                    <h4>Tìm địa điểm</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_field}>
                                        <Row gutter={24}>
                                            <Col span={12}>
                                                <img className={styles.img_cart_fi} src="/imgACTech/Giao-thong-1.png" />
                                            </Col>
                                            <Col span={12}>
                                                <div className={styles.text_cart_fi}>
                                                    <h4>Giao thông</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_field}>
                                        <Row gutter={24}>
                                            <Col span={12}>
                                                <img className={styles.img_cart_fi} src="/imgACTech/Sach-noi-1.png" />
                                            </Col>
                                            <Col span={12}>
                                                <div className={styles.text_cart_fi}>
                                                    <h4>Sách nói</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_field}>
                                        <Row gutter={24}>
                                            <Col span={12}>
                                                <img className={styles.img_cart_fi} src="/imgACTech/Du-lich-1.png" />
                                            </Col>
                                            <Col span={12}>
                                                <div className={styles.text_cart_fi}>
                                                    <h4>Du lịch</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_field}>
                                        <Row gutter={24}>
                                            <Col span={12}>
                                                <img className={styles.img_cart_fi} src="/imgACTech/Tin-tuc-1.png" />
                                            </Col>
                                            <Col span={12}>
                                                <div className={styles.text_cart_fi}>
                                                    <h4>Tin tức</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_field}>
                                        <Row gutter={24}>
                                            <Col span={12}>
                                                <img className={styles.img_cart_fi} src="/imgACTech/Quan-tri-he-thong.png" />
                                            </Col>
                                            <Col span={12}>
                                                <div className={styles.text_cart_fi}>
                                                    <h4>Quản trị hệ thống</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_field}>
                                        <Row gutter={24}>
                                            <Col span={12}>
                                                <img className={styles.img_cart_fi} src="/imgACTech/Thoi-tiet-1.png" />
                                            </Col>
                                            <Col span={12}>
                                                <div className={styles.text_cart_fi}>
                                                    <h4>Thời tiết</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_field}>
                                        <Row gutter={24}>
                                            <Col span={12}>
                                                <img className={styles.img_cart_fi} src="/imgACTech/The-thao-1.png" />
                                            </Col>
                                            <Col span={12}>
                                                <div className={styles.text_cart_fi}>
                                                    <h4>Thể thao</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_field}>
                                        <Row gutter={24}>
                                            <Col span={12}>
                                                <img className={styles.img_cart_fi} src="/imgACTech/Tim-hieu-the-gioi-1.png" />
                                            </Col>
                                            <Col span={12}>
                                                <div className={styles.text_cart_fi}>
                                                    <h4>Tìm hiểu thế giới</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_field}>
                                        <Row gutter={24}>
                                            <Col span={12}>
                                                <img className={styles.img_cart_fi} src="/imgACTech/Am-nhac-1.png" />
                                            </Col>
                                            <Col span={12}>
                                                <div className={styles.text_cart_fi}>
                                                    <h4>
                                                        Âm nhạc</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_field}>
                                        <Row gutter={24}>
                                            <Col span={12}>
                                                <img className={styles.img_cart_fi} src="/imgACTech/Giao-duc-1.png" />
                                            </Col>
                                            <Col span={12}>
                                                <div className={styles.text_cart_fi}>
                                                    <h4>Giáo dục</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_field}>
                                        <Row gutter={24}>
                                            <Col span={12}>
                                                <img className={styles.img_cart_fi} src="/imgACTech/Ngoai-ngu-1.png" />
                                            </Col>
                                            <Col span={12}>
                                                <div className={styles.text_cart_fi}>
                                                    <h4>
                                                        Ngoại ngữ</h4>
                                                </div>
                                            </Col>
                                        </Row>
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
                                            TIỆN ÍCH KHI SỬ DỤNG
                                        </h1>
                                        <img src='/imgACTech/ANKA-LOGO-1024x303.webp' />
                                        <div className={styles.underlined_key}></div>

                                        <Collapse className={styles.collapse} items={items} defaultActiveKey={['1']} onChange={onChange} />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.benefit_r}>
                                        <img src='/imgACTech/Robot-ACT-1-scaled.webp' />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className={styles.field3}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.div_img_key}>
                                        <img src="/imgACTech/Robot-ACT-1-scaled.webp" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.text_key}>
                                        <h1>
                                        TẠI SAO BẠN CẦN</h1>
                                        <img src='/imgACTech/ANKA-LOGO-1024x303.webp' />
                                        <div className={styles.underlined_key}></div>
                                        <div className={styles.p_text_key}>
                                            <p>Với thông điệp: “Sáng tạo không giới hạn, AI thay đổi thế giới’’, <b>ACTech</b> đặt trọn niềm tin <b>Anka</b> trở thành trợ lý công nghệ điều hành thông minh toàn diện chuẩn hoá hệ thống quản lý công việc, nâng cao chất lượng cuộc sống của con người. Từ đó đóng góp vào sự phát triển bền vững của xã hội.</p><br />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
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