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
    const [activeKey, setActiveKey] = useState<string | string[]>(['1']);
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

    const onChange = (key: string | string[]) => {
        setActiveKey(key);
        console.log(key);
    };

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <div className={`${styles.lable_call} ${activeKey.includes('1') ? styles.active : ''}`}>
                <p>Nâng Cấp Các Tính Năng Theo Thời Gian</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Các tính năng sẽ được nâng cấp nhằm tối ưu hóa khả năng xử lý các yêu cầu của doanh nghiệp và hạn chế tối đa các rủi ro trong quá trình sử dụng.</li>
                    <li>Dễ dàng phát triển mở rộng hệ thống</li>
                </ul>
            </div>,
        },
        {
            key: '2',
            label: <div className={`${styles.lable_call} ${activeKey.includes('2') ? styles.active : ''}`}>
                <p>Đọc Số Liệu, Kết Xuất Số Liệu Và Kết Nối Với Thiết Bị</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Kết nối để lấy số liệu từ máy chấm công, máy đo trọng lượng,…</li>
                    <li>Đọc số liệu từ các tệp SQL, Excel,…</li>
                    <li>Xuất số liệu ra các tệp Word, Excel,…</li>
                    <li>Tạo email với tệp đính kèm và nội dung có sẵn.</li>
                </ul>
            </div>,
        },
        {
            key: '3',
            label: <div className={`${styles.lable_call} ${activeKey.includes('3') ? styles.active : ''}`}>
                <p>Thêm Các Tính Năng Đa Dạng Theo Yêu Cầu</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Có thể customize các tính năng theo nhu cầu của khách hàng</li>
                </ul>
            </div>,
        },
        {
            key: '4',
            label: <div className={`${styles.lable_call} ${activeKey.includes('4') ? styles.active : ''}`}>
                <p>Tinh Chỉnh, Tối Ưu</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Giao diện trực quan, hiện đại</li>
                    <li>Tự động hóa quy trình làm việc và quản lý theo luồng, tối giản.</li>
                    <li>Tối ưu cho chạy đa nền tảng.</li>
                </ul>
            </div>,
        },
        {
            key: '5',
            label: <div className={`${styles.lable_call} ${activeKey.includes('5') ? styles.active : ''}`}>
                <p>Bảo Mật An Toàn</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Thông tin được bảo mật tuyệt đối</li>
                    <li>Cam kết bảo toàn dữ liệu người dùng</li>
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
                                        <img className={styles.img_logo} src='/imgACTech/SMT-145-1.svg' />
                                        <h1>CÔNG NGHỆ QUẢN TRỊ THÔNG MINH</h1>
                                        <div className={styles.div_img_left}>
                                            <p>Để tháo gỡ những “nút thắt” của doanh nghiệp, thay vì sử dụng những phần mềm quản lý rời rạc, việc chuyển sang giải pháp công nghệ quản trị tổng thể SMT chính là “CHÌA KHÓA CÔNG NGHỆ” giúp doang nghiệp quản trị toàn diện hệ thống hoạt động các phòng ban.</p>
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
                                <img src="/imgACTech/So-do-cum-SP-SMT-730x703.png" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.field}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.div_img_key}>
                                        <img src="/imgACTech/Lovepik_com-401419197-technology-wind-key-1024x1024.png" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.text_key}>
                                        <h1>CHÌA KHÓA CÔNG NGHỆ​</h1>
                                        <img src='/imgACTech/SMT-145-1.svg' />
                                        <div className={styles.underlined_key}></div>
                                        <div className={styles.p_text_key}>
                                            <p><strong>Công nghệ quản trị thông minh SMT</strong> giúp doanh nghiệp quản trị toàn diện hệ thống hoạt động các phòng ban.</p><br />
                                            <p>
                                                Các tính năng BSC cân bằng hệ thống, lên kế hoạch chỉ tiêu KPI, phân tích đánh giá hiệu quả, tự động tìm nguyên nhân mắc lỗi, đưa ra giải pháp tối ưu cho công việc.</p><br />
                                            <p>Tự động kiểm soát, phân tích, đánh giá, cân bằng hệ thống các phòng ban, báo cáo, phê duyệt online.</p><br />
                                            <p>Các phòng ban được nâng cao hiệu suất khi phối hợp làm việc.</p><br />
                                            <p>Hiệu quả trong điều hành hệ thống doanh nghiệp là tăng năng lực cạnh tranh trên thị trường.</p>
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
                        </h1>
                        <Row gutter={12}>
                            <Col span={12} lg={4}>
                                <div className={styles.cart_prod}>
                                    <div className={styles.icon_cart_prod}>
                                        <img src='/imgACTech/Icon-web-110.svg' />
                                    </div>
                                    <div className={styles.text_cart_prod}>
                                        <p>Dữ liệu lớn</p>
                                    </div>
                                    <div className={styles.text_p}>
                                        <p>Lưu trữ mọi thông tin trên một hệ thống duy nhất.</p><br />
                                        <p>Dữ liệu lưu trữ cực lớn (Big Data).</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={4}>
                                <div className={styles.cart_prod}>
                                    <div className={styles.icon_cart_prod}>
                                        <img src='/imgACTech/Icon-web-111.svg' />
                                    </div>
                                    <div className={styles.text_cart_prod}>
                                        <p>Tiện lợi</p>
                                    </div>
                                    <div className={styles.text_p}>
                                        <p>Dễ dàng cài đặt.</p><br />
                                        <p>Vận hành online mọi lúc, mọi nơi vô cùng thuận tiện.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={4}>
                                <div className={styles.cart_prod}>
                                    <div className={styles.icon_cart_prod}>
                                        <img src='/imgACTech/Icon-web-112.svg' />
                                    </div>
                                    <div className={styles.text_cart_prod}>
                                        <p>Giao diện phẳng</p>
                                    </div>
                                    <div className={styles.text_p}>
                                        <p>Giao diện phẳng, tối giản.</p><br />
                                        <p>Tối ưu cho chạy đa nền tảng.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={4}>
                                <div className={styles.cart_prod}>
                                    <div className={styles.icon_cart_prod}>
                                        <img src='/imgACTech/Icon-web-113.svg' />
                                    </div>
                                    <div className={styles.text_cart_prod}>
                                        <p>Thiết kế linh hoạt</p>
                                    </div>
                                    <div className={styles.text_p}>
                                        <p>Thiết kế chuyên nghiệp, linh hoạt, tùy chỉnh dễ dàng.</p><br />
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={4}>
                                <div className={styles.cart_prod}>
                                    <div className={styles.icon_cart_prod}>
                                        <img src='/imgACTech/Icon-web-114.svg' />
                                    </div>
                                    <div className={styles.text_cart_prod}>
                                        <p>Phân quyền chi tiết</p>
                                    </div>
                                    <div className={styles.text_p}>
                                        <p>Kiểm soát hệ thống theo người dùng.</p><br />
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={4}>
                                <div className={styles.cart_prod}>
                                    <div className={styles.icon_cart_prod}>
                                        <img src='/imgACTech/Icon-web-115.svg' />
                                    </div>
                                    <div className={styles.text_cart_prod}>
                                        <p>Công nghệ hiện đại</p>
                                    </div>
                                    <div className={styles.text_p}>
                                        <p>Công nghệ lập trình hiện đại, tiên tiến nhất.</p><br />
                                    </div>
                                </div>
                            </Col>

                            <Col span={12} lg={4}>
                                <div className={styles.cart_prod}>
                                    <div className={styles.icon_cart_prod}>
                                        <img src='/imgACTech/Icon-web-116.svg' />
                                    </div>
                                    <div className={styles.text_cart_prod}>
                                        <p>Tính bảo mật cao</p>
                                    </div>
                                    <div className={styles.text_p}>
                                        <p>Bảo mật dữ liệu tối ưu trên nền tảng đám mây.</p><br />
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={4}>
                                <div className={styles.cart_prod}>
                                    <div className={styles.icon_cart_prod}>
                                        <img src='/imgACTech/Icon-web-117.svg' />
                                    </div>
                                    <div className={styles.text_cart_prod}>
                                        <p>Tự động và minh bạch</p>
                                    </div>
                                    <div className={styles.text_p}>
                                        <p>Xử lí thông tin tự động, thông mình và minh bạch.</p><br />
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={4}>
                                <div className={styles.cart_prod}>
                                    <div className={styles.icon_cart_prod}>
                                        <img src='/imgACTech/Icon-web-118.svg' />
                                    </div>
                                    <div className={styles.text_cart_prod}>
                                        <p>Dễ thao tác</p>
                                    </div>
                                    <div className={styles.text_p}>
                                        <p>Giao diện đơn giản, hiện đại, dễ thao tác.</p><br />
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={4}>
                                <div className={styles.cart_prod}>
                                    <div className={styles.icon_cart_prod}>
                                        <img src='/imgACTech/Icon-web-119.svg' />
                                    </div>
                                    <div className={styles.text_cart_prod}>
                                        <p>Tự động hóa quy trình</p>
                                    </div>
                                    <div className={styles.text_p}>
                                        <p>Tự động hóa quy trình làm việc và quản lý theo luồng.</p><br />
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={4}>
                                <div className={styles.cart_prod}>
                                    <div className={styles.icon_cart_prod}>
                                        <img src='/imgACTech/Icon-web-120.svg' />
                                    </div>
                                    <div className={styles.text_cart_prod}>
                                        <p>Hướng tới khách hàng</p>
                                    </div>
                                    <div className={styles.text_p}>
                                        <p>Thiết kế dựa trên mục tiêu, chiến lược của doanh nghiệp.</p><br />
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={4}>
                                <div className={styles.cart_prod}>
                                    <div className={styles.icon_cart_prod}>
                                        <img src='/imgACTech/Icon-web-121.svg' />
                                    </div>
                                    <div className={styles.text_cart_prod}>
                                        <p>Đa dạng sản phẩm</p>
                                    </div>
                                    <div className={styles.text_p}>
                                        <p>Sản phẩm phòng phú phù hợp với quy mô lớn – nhỏ của các doanh nghiệp, tổ chức.</p><br />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className={`${styles.div_btn_products} ${styles.text_al}`}>
                            <button className={styles.btn_advise} onClick={showModal}>Đăng ký tư vấn <ArrowRightOutlined className={styles.icon_xt} /></button>
                            <button className={styles.btn_trial} onClick={showModal}>Dùng thử miễn phí <ArrowRightOutlined className={styles.icon_xt} /></button>
                        </div>
                    </div>
                </div>

                <div className={styles.field2}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.text_key}>
                                        <h1 className={styles.h1_text}>TÍNH NĂNG MỞ CỦA​</h1>
                                        <img className={styles.img_text} src='/imgACTech/SMT-145-1.svg' />
                                        <div className={styles.underlined_key}></div>
                                        <div className={styles.p_text_key}>
                                            <img src="/imgACTech/AFM-111.svg" />
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <Collapse className={styles.collapse} items={items} defaultActiveKey={['1']} onChange={onChange} />
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