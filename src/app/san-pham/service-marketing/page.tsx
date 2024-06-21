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
                <p>Social Media</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Truyền thông xã hội (Social Media) là một trong những yếu tố quan trọng của Marketing Online,  giúp doanh nghiệp tương tác với khách hàng qua các nền tảng social của bên thứ ba như: Facebook, Instagram, Youtube, Forum, Twitter,… </li>
                    <li>ACTech Marketing sẽ kết nối, tích hợp các kênh social để doanh nghiệp có thể vận dụng tối đa lợi thế của social media trong kết nối và xây dựng mối quan hệ với khách hàng mục tiêu.</li>
                </ul>
            </div>,
        },
        {
            key: '2',
            label: <div className={`${styles.lable_call} ${activeKey.includes('2') ? styles.active : ''}`}>
                <p>Email Marketing</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Là một công cụ trong digital marketing, email marketing giúp xây dựng thương hiệu, lòng tin và mối quan hệ với khách hàng với chi phí hợp lý. Với ACTech Marketing, các chiến dịch email marketing có thể đo lường, đánh giá hiệu quả để có sự điều chỉnh một cách phù hợp.</li>
                </ul>
            </div>,
        },
        {
            key: '3',
            label: <div className={`${styles.lable_call} ${activeKey.includes('3') ? styles.active : ''}`}>
                <p>SMS BrandName Marketing</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>SMS Brandname Marketing là công cụ tiếp thị bằng tin nhắn, cho phép doanh nghiệp cung cấp thông tin quảng bá sản phẩm, dịch vụ và thông tin doanh nghiệp thông qua kênh thông tin di động. Nội dung của SMS Marketing thường bao gồm: thông tin giới thiệu sản phẩm, dịch vụ, thông tin khuyến mại, chăm sóc khách hàng,… ACTech Marketing cung cấp dịch vụ SMS Marketing đánh đúng đối tượng khách hàng mục tiêu.</li>
                </ul>
            </div>,
        },
        {
            key: '4',
            label: <div className={`${styles.lable_call} ${activeKey.includes('4') ? styles.active : ''}`}>
                <p>AutoCall</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Sử dụng giải pháp call marketing tại ACTech, doanh nghiệp có thể tiết kiệm nguồn chi phí kinh doanh đáng kể. Ngoài ra, dịch vụ này mang đến nhiều ưu điểm nổi trội như: tiếp cận được nhiều khách hàng, gia tăng tần số liên lạc, chăm sóc khách hàng theo kịch bản có sẵn, tối ưu nguồn nhân lực.</li>
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
                                        <img className={styles.img_logo} src="/imgACTech/web-1-83.png" />
                                        <h1>TỐI ĐA CHI PHÍ, TỐI ĐA DOANH THU</h1>
                                        <div className={styles.div_img_left}>
                                            <p><strong>Marketing</strong> được xem là giải pháp giúp mọi doanh nghiệp tối ưu khả năng tiếp cận giữa thương hiệu, sản phẩm với khách hàng mục tiêu.</p><br />
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
                                <img src="/imgACTech/MKT-136.svg" />
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
                                                <img src="/imgACTech/web-1-83.png" />
                                                <h1>LÀ GÌ?​</h1>
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p><strong>Marketing</strong> được xem là giải pháp giúp mọi doanh nghiệp tối ưu khả năng tiếp cận giữa thương hiệu, sản phẩm với khách hàng mục tiêu. Một giải pháp marketing hoàn hảo sẽ được cân nhắc và lựa chọn giữa các kênh marketing online (hiện đại) và marketing offline (marketing truyền thống) nhằm tăng tương tác với khách hàng tiềm năng. Giúp họ nhận thức được sản phẩm/dịch vụ mà doanh nghiệp đang cung cấp. Từ đó thúc đẩy sự chuyển đổi, mang lại nguồn lợi nhuận tốt nhất cho đơn vị bán hàng.</p><br />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_f}>
                                        <img src="/imgACTech/web-1-137-1024x827.png" />
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
                                    <div className={styles.service_crm_f}>
                                        <img src="/imgACTech/web-1-128.png" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_r}>
                                            <div className={styles.img_secrmr}>
                                                <h1>TẠI SAO CẦN TRIỂN KHAI MARKETING TỔNG THỂ?​</h1>
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p>Nếu chỉ sử dụng một vài kênh riêng lẻ hoặc chỉ triển khai “nửa vời” kế hoạch marketing sẽ khiến doanh nghiệp tốn kém chi phí, nhân sự nhưng thường không đưa đến kết quả như mong đợi. Ở một số thời điểm, việc triển khai marketing riêng lẻ là cần thiết, tuy nhiên nó cần được nằm trong lộ trình của một chiến lược marketing tổng thể, được xây dựng đúng và đủ từ thực tế của thị trường, tiềm lực doanh nghiệp.</p><br />
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </div>
                </div>

                <div className={styles.field2}>
                    <div className={styles.product}>
                        <div className={styles.main_field}>
                            <h1>
                                MARKETING OFFLINE BAO GỒM
                                <div className={styles.underlined_red}></div>
                            </h1>
                            <Row gutter={12}>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/MKT-138.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Thi công và thiết kế các biển quảng cáo ngoài trời, treo băng rôn, cờ phướn.</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/MKT-139.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Dán quảng cáo trên phương tiện giao thông: quảng cáo xe bus, taxi, xe cá nhân, xe ô tô điện,…</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/MKT-140.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Quảng cáo trên các kênh radio (VOV, VOV1,…), truyền hình (VTV, HTV,..)</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/MKT-141.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Quảng cáo trên báo giấy, tạp chí, phát tờ rơi…</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/MKT-142.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Gửi thư trực tiếp.</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/MKT-143.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Tặng quà miễn phí.</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/MKT-144.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Tổ chức sự sự: Hội nghị chăm sóc khách hàng, giới thiệu sản phẩm,…</h3>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

                {/* <div className={styles.field}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_f}>
                                        <img src="/imgACTech/AFM-109.png" />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_r}>
                                            <div className={styles.img_secrmr}>
                                                <h1>TẠI SAO DOANH NGHIỆP CỦA BẠN CẦN</h1>
                                                <img src="/imgACTech/Logo-36.png" />
                                            </div>
                                            <br />
                                            <div className={styles.text_secr}>
                                                <p>Công nghệ quản trị tài chính kế toán ACTech AFM giúp giảm tối đa chi phí quản lý, kết xuất báo cáo theo thời gian. Với mục tiêu tối ưu hóa cho người dùng ACTech AFM đem đến những tính năng thiết thực nhất, hỗ trợ tối đa cho người dùng, sử dụng thời gian làm việc triệt để.</p><br />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div> */}

                <div className={styles.product}>
                    <div className={styles.main_field}>
                        <div className={styles.div_img_logo}>
                            <h1>
                                MARKETING ONLINE BAO GỒM
                                <div className={styles.underlined_red}></div>
                            </h1>
                        </div>
                        <Row gutter={24}>
                            <Col span={12} lg={6} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-2-204.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Affiliate Marketing (Tiếp Thị Liên Kết)</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={6} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-2-205.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>PR: Đăng tải các bài viết có định hướng trên báo chí</h3>
                                    </div>
                                </div>
                            </Col>

                            <Col span={12} lg={6} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-2-206.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Influencer Marketing: Sử dụng người có sức ảnh hưởng để truyền thông điệp</h3>
                                    </div>
                                </div>
                            </Col>


                            <Col span={12} lg={6} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-2-207.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Email Marketing</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={6} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-2-208.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Paid Advertising</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={6} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-2-209.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Social Media</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} lg={6} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/web-2-210.png" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Search Engine Optimization</h3>
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
                                    <div className={styles.dip_f}>
                                        <div className={styles.service_crm_f}>
                                            <div className={styles.img_secrmr}>
                                                <h1>LỢI ÍCH TỪ GIẢI PHÁP MARKETING TỔNG THỂ​</h1>
                                                <img src="/imgACTech/web-1-83.png" />
                                                <div className={styles.underlined_key}></div>
                                            </div>
                                            <div className={styles.text_secr}>
                                                <ul>
                                                    <li><p>Tiếp cận khách hàng hiệu quả hơn</p></li>
                                                    <li><p>Tăng hiệu quả truyền thông và doanh thu</p></li>
                                                    <li><p>Tiết kiệm chi phí </p></li>
                                                    <li><p>Nâng cao hình ảnh sản phẩm/ thương hiệu</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_r}>
                                        <img src="/imgACTech/web-2-211.png" />
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
                                    <div className={styles.dip_f}>
                                        <div className={styles.text_key}>
                                            <img className={styles.img_text} src="/imgACTech/web-1-83.png" />
                                            <h1 className={styles.h1_text}>GIÚP GÌ CHO DOANH NGHIỆP CỦA BẠN</h1><br />
                                            <div className={styles.underlined_key}></div>
                                            <div className={styles.p_text_key}>
                                                <p><strong>ACTech Marketing</strong> dựa trên những kinh nghiệm được tích lũy trong nhiều năm về hành vi khách hàng, nhằm mang đến một chiến lược Marketing tối ưu cho doanh nghiệp. Hiện nay, với ACTech Marketing, quý khách hàng có thể sử dụng các dịch vụ marketing online và offline với đầy đủ các kênh được cung cấp. Trong đó, tiêu biểu có thể kể đến:</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <Collapse className={styles.collapse} items={items} defaultActiveKey={['1']} onChange={onChange} />
                                </Col>
                            </Row>
                            <div className={`${styles.div_btn} ${styles.text_al}`}>
                                <button className={styles.btn_advise} onClick={showModal}>Đăng ký tư vấn <ArrowRightOutlined /></button>
                                <button className={styles.btn_trial} onClick={showModal}>Dùng thử miễn phí <ArrowRightOutlined /></button>
                            </div>
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