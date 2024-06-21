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
                <p>Lợi Ích Đối Với Doanh Nghiệp</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Phân loại khách hàng</li>
                    <li>Bảo mật data khách hàng</li>
                    <li>Chăm sóc khách hàng tốt hơn, nâng cao sự hài lòng</li>
                    <li>Tối ưu quy trình bán hàng</li>
                    <li>Giảm chi phí, tăng lợi nhuận</li>
                </ul>
            </div>,
        },
        {
            key: '2',
            label: <div className={`${styles.lable_call} ${activeKey.includes('2') ? styles.active : ''}`}>
                <p>Lợi Ích Đối Với Nhà Quản Lý</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Theo dõi & Quản lý đội ngũ bán hàng tốt hơn</li>
                    <li>Nâng cao hiệu suất đội ngũ của quản lý cấp trung</li>
                </ul>
            </div>,
        },
        {
            key: '3',
            label: <div className={`${styles.lable_call} ${activeKey.includes('3') ? styles.active : ''}`}>
                <p>Lợi Ích Đối Với Nhân Viên</p>
            </div>,
            children: <div className={styles.ul_coll}>
                <ul>
                    <li>Tối ưu quy trình bán hàng, chăm sóc khách hàng cho nhân viên qua các công cụ bán hàng, CSKH.</li>
                    <li>Quản lý toàn bộ thông tin khách hàng tập trung, lưu trữ thông tin khách hàng đầy đủ giúp doanh nghiệp có thể theo dõi, phân tích và tìm ra cơ hội kinh doanh một cách kịp thời.</li>
                    <li>Phân quyền truy cập một cách chi tiết nhất: người dùng nào được truy cập xem thông tin, báo cáo. Tránh được những vấn đề sai sót hay trùng lặp trong theo dõi, chăm sóc khách hàng.</li>
                    <li>Tích hợp đa kênh nhằm kết nối với khách hàng qua email – mạng xã hội – website, tối ưu hoạt động bán hàng và gia tăng doanh số hiệu quả.</li>
                    <li>Kiểm soát được công việc của nhân viên, đồng thời lưu trữ lại quá trình làm việc các bước trong quá trình làm việc với khách hàng, giúp lãnh đạo dễ theo sát, hỗ trợ và quản lý.</li>
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
                                        <img className={styles.img_logo} src='/imgACTech/Business-1-1024x206.png' />
                                        <h1>PHẦN MỀM QUẢN LÝ KINH DOANH THÔNG MINH</h1>
                                        <div className={styles.div_img_left}>
                                            <p>Giải pháp Kinh doanh và chăm sóc khách hàng là hệ thống ERP thu nhỏ của khối kinh doanh xuyên suốt từ khâu lên kế hoạch – marketing – chăm sóc khách hàng – bán hàng – báo cáo, giúp doanh nghiệp phát triển mối quan hệ tốt đẹp với khách hàng.</p><br />
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
                                <img src="https://actechsmt.com/wp-content/uploads/2023/05/Banner.png" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.field}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <div className={styles.business2}>
                                <img src="/imgACTech/Business-1-1024x206.png" />
                                <div className={styles.underlined}></div>
                                <p>Phần mềm quản lý kinh doanh thông minh giúp Doanh nghiệp</p>
                            </div>
                            <Row gutter={24}>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_field}>
                                        <div className={styles.img_cart_field}>
                                            <img src='/imgACTech/Noi-dung-1.png' />
                                        </div>
                                        <div className={styles.text_cart_dield}>
                                            <p>Lập kế hoạch mục tiêu kinh doanh, kiểm soát cân bằng, thúc đẩy mục tiêu kinh doanh để tăng tính cạnh tranh, mở rộng thị trường, tăng trưởng doanh số bán hàng.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_field}>
                                        <div className={styles.img_cart_field}>
                                            <img src='/imgACTech/Noi-dung-2.png' />
                                        </div>
                                        <div className={styles.text_cart_dield}>
                                            <p>Quản lý quy trình chăm sóc khách hàng Real time và kiểm soát quy trình bán hàng hiệu quả giúp Doanh nghiệp xây dựng mối quan hệ , duy trì lòng trung thành của khách hàng để bứt phá doanh số.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={24} lg={8}>
                                    <div className={styles.cart_field}>
                                        <div className={styles.img_cart_field}>
                                            <img src='/imgACTech/Noi-dung-3.png' />
                                        </div>
                                        <div className={styles.text_cart_dield}>
                                            <p>Kiểm soát ngân sách Marketing và đánh giá toàn bộ chiến dịch Marketing giúp Doanh nghiệp phân bổ chi phí hợp lý, phù hợp cho từng chiến dịch để tránh lãng phí và gia tăng khách hàng tiềm năng.</p>
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
                            <h1>
                                DOANH NGHIỆP CỦA BẠN<br />
                                ĐANG GẶP PHẢI VẤN ĐỀ
                                v
                            </h1>
                            <Row gutter={24}>
                                <Col span={8} lg={4}>
                                    <div className={styles.cart_field2}>
                                        <div className={styles.img_cart_field2}>
                                            <img src='/imgACTech/Van-de-1.png' />
                                        </div>
                                        <div className={styles.text_cart_dield2}>
                                            <p>Thông tin khách hàng rời rạc, không đồng bộ, khó theo dõi vì “mắc kẹt” trong quản lý và điều hành kinh doanh theo cách thủ công.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8} lg={4}>
                                    <div className={styles.cart_field2}>
                                        <div className={styles.img_cart_field2}>
                                            <img src='/imgACTech/Van-de-2.png' />
                                        </div>
                                        <div className={styles.text_cart_dield2}>
                                            <p>Không kiểm soát, đánh giá được chất lượng làm Sales, Telesale, Marketing.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8} lg={4}>
                                    <div className={styles.cart_field2}>
                                        <div className={styles.img_cart_field2}>
                                            <img src='/imgACTech/Van-de-3.png' />
                                        </div>
                                        <div className={styles.text_cart_dield2}>
                                            <p>Thất thoát data khách hàng do nhân viên nghỉ việc.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8} lg={4}>
                                    <div className={styles.cart_field2}>
                                        <div className={styles.img_cart_field2}>
                                            <img src='/imgACTech/Van-de-4.png' />
                                        </div>
                                        <div className={styles.text_cart_dield2}>
                                            <p>Không biết kênh quảng cáo nào, chiến dịch Marketing nào đang đem lại hiệu quả trong việc tìm kiếm khách hàng tiềm năng hay lãng phí tiền.</p>
                                        </div>
                                    </div>
                                </Col>

                                <Col span={8} lg={4}>
                                    <div className={styles.cart_field2}>
                                        <div className={styles.img_cart_field2}>
                                            <img src='/imgACTech/Van-de-5.png' />
                                        </div>
                                        <div className={styles.text_cart_dield2}>
                                            <p>Không tối ưu được quá trình chăm sóc khách hàng: bỏ quên khách hàng, đánh mất khách hàng, chăm sóc khách hàng chậm dẫn đến doanh thu giảm.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8} lg={4}>
                                    <div className={styles.cart_field2}>
                                        <div className={styles.img_cart_field2}>
                                            <img src='/imgACTech/Van-de-6.png' />
                                        </div>
                                        <div className={styles.text_cart_dield2}>
                                            <p>Báo cáo lên Ban lãnh đạo chưa thể hiện hết được thực trạng của các nhân viên, phòng ban đang mắc phải. Tốn nhiều giờ để làm báo cáo thống kê nhưng không chính xác, khoa học.</p>
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

                <div className={styles.field}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <h1 className={styles.h1_business3}>
                                TÍNH NĂNG NỔI BẬT CỦA
                            </h1>
                            <div className={styles.business2}>
                                <img src="/imgACTech/Business-1-1024x206.png" />
                            </div>
                            <div className={styles.underlined_red}></div>
                            <Row gutter={24}>
                                <Col span={12} lg={8} className={styles.col_busi}>
                                    <div className={styles.cart_field4}>
                                        <div className={styles.img_cart_field3}>
                                            <img src='/imgACTech/Quan-ly-muc-tieu-1024x1019.png' />
                                        </div>
                                        <h2>Quản lý mục tiêu</h2>
                                        <div className={styles.text_cart_dield3}>
                                            <ul>
                                                <li><p>Mục tiêu phòng ban</p></li>
                                                <li><p>Mục tiêu đội nhóm</p></li>
                                                <li><p>Mục tiêu nhân viên</p></li>
                                                <li><p>Cây kế hoạch</p></li>

                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8} className={styles.col_busi}>
                                    <div className={styles.cart_field4}>
                                        <div className={styles.img_cart_field3}>
                                            <img src='/imgACTech/Quan-ly-marketing-1024x1019.png' />
                                        </div>
                                        <h2>Quản lý Marketing</h2>
                                        <div className={styles.text_cart_dield3}>
                                            <ul>
                                                <li><p>Quản lý mục tiêu</p></li>
                                                <li><p>Quản lý ngân sách và các yêu cầu thay đổi ngân sách</p></li>
                                                <li><p>Quản lý chi phí MKT</p></li>
                                                <li><p>Quản lý hoàn ứng, tạm ứng</p></li>
                                                <li><p>Tích hợp công cụ Marketing Automation (SMS, Email, Call)</p></li>
                                                <li><p>Theo dõi, quản lý doanh thu tương ứng với nguồn MKT, nhân viên MKT</p></li>
                                                <li><p>Thống kê, báo cáo tổng hợp</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8} className={styles.col_busi}>
                                    <div className={styles.cart_field4}>
                                        <div className={styles.img_cart_field3}>
                                            <img src='/imgACTech/Quan-ly-khach-hang-1024x1019.png' />
                                        </div>
                                        <h2>Quản lý khách hàng</h2>
                                        <div className={styles.text_cart_dield3}>
                                            <ul>
                                                <li><p>Quản lý thông tin khách hàng</p></li>
                                                <li><p>Quản lý nguồn khách hàng</p></li>
                                                <li><p>Phân bố data khách hàng tiềm năng đến sales chăm sóc</p></li>
                                                <li><p>Quản lý trạng thái khách hàng</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8} className={styles.col_busi}>
                                    <div className={styles.cart_field4}>
                                        <div className={styles.img_cart_field3}>
                                            <img src='/imgACTech/Quan-ly-CSKH-1024x1019.png' />
                                        </div>
                                        <h2>Quản lý chu trình CSKH</h2>
                                        <div className={styles.text_cart_dield3}>
                                            <ul>
                                                <li><p>Tự động phân chia khách hàng cho sales từ nguồn marketing đổ về.</p></li>
                                                <li><p>Quản lý , giám sát hoạt động của sales và được lưu trữ đầy đủ, cụ thể.</p></li>
                                                <li><p>Tự động nhắc nhở nhân viên lịch chăm sóc, làm việc với khách hàng.</p></li>
                                                <li><p>Lưu trữ và phân loại chính xác data khách hàng theo mọi nguồn.</p></li>
                                                <li><p>Cải thiện giá trị vòng đời khách hàng.</p></li>

                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8} className={styles.col_busi}>
                                    <div className={styles.cart_field4}>
                                        <div className={styles.img_cart_field3}>
                                            <img src='/imgACTech/Quan-ly-mua-hang-1024x1019.png' />
                                        </div>
                                        <h2>Quản lý bán hàng</h2>
                                        <div className={styles.text_cart_dield3}>
                                            <ul>
                                                <li><p>Quản lý nhóm bán hàng</p></li>
                                                <li><p>Quản lý bán hàng, hợp đồng</p></li>
                                                <li><p>Quản lý kênh bán hàng, kênh phân phối</p></li>
                                                <li><p>Quản lý danh mục, danh sách sản phẩm</p></li>
                                                <li><p>Báo cáo tổng hợp bán hàng</p></li>

                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={8} className={styles.col_busi}>
                                    <div className={styles.cart_field4}>
                                        <div className={styles.img_cart_field3}>
                                            <img src='/imgACTech/Thong-ke-bao-cao-tong-hop-1024x1019.png' />
                                        </div>
                                        <h2>Thống kê, báo cáo, tổng hợp</h2>
                                        <div className={styles.text_cart_dield3}>
                                            <ul>
                                                <li><p>Báo cáo KPI</p></li>
                                                <li><p>Báo cáo bán hàng theo khách hàng và hàng hóa</p></li>
                                                <li><p>Phân tích tình hình chuyển giao giai đoạn cơ hội</p></li>
                                                <li><p>Báo cáo bán hàng theo nhân viên kinh doanh và hàng hóa</p></li>
                                                <li><p>Thống kê chi tiết bán hàng</p></li>
                                                <li><p>Mục tiêu doanh số theo lô hàng hóa</p></li>
                                                <li><p>Doanh số đơn hàng chi tiết theo hàng hóa</p></li>
                                                <li><p>Phân tích cơ hội thắng thua</p></li>
                                            </ul>
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
                                            LỢI ÍCH KHI QUẢN LÝ BẰNG
                                        </h1>
                                        <img src='/imgACTech/Business-1-1024x206.png' />
                                        <div className={styles.underlined_key}></div>

                                        <Collapse className={styles.collapse} items={items} defaultActiveKey={['1']} onChange={onChange} />
                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.benefit_r}>
                                        <img src='/imgACTech/2260610-1024x700.png' />
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