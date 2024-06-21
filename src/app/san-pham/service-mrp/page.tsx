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
                                        <img className={styles.img_logo} src='/imgACTech/Logo-34.svg' />
                                        <h1>QUẢN LÝ QUY TRÌNH SẢN XUẤT</h1>
                                        <div className={styles.div_img_left}>
                                            <p><strong>ACTech MRP</strong> giúp nhà quản trị nắm bắt toàn diện tình hình sản xuất một cách chính xác và nhanh chóng từ khâu tiếp nhận đơn hàng, lập kế hoạch sản xuất đến khâu giao hàng, tận dụng được tối đa nguyên vật liệu đầu vào, kiểm soát hiệu quả sản xuất, tránh thất thoát, theo dõi hoạt động sản xuất ở mọi nơi, vào mọi thời điểm.</p><br />
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
                                <img src="/imgACTech/MRP-123.svg" />
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={styles.field}>
                    <div className={styles.div_field}>
                        <div className={styles.main_field}>
                            <Row gutter={24}>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_r}>
                                        <div className={styles.img_secrmr}>
                                            <img src='/imgACTech/Logo-34.svg' />
                                            <h1>LÀ GÌ?​</h1>
                                        </div>
                                        <div className={styles.underlined_key}></div>
                                        <br />
                                        <div className={styles.text_secr}>
                                            <p><strong>ACTech MRP</strong> giúp nhà quản trị nắm bắt toàn diện tình hình sản xuất một cách chính xác và nhanh chóng từ khâu tiếp nhận đơn hàng, lập kế hoạch sản xuất đến khâu giao hàng, tận dụng được tối đa nguyên vật liệu đầu vào, kiểm soát hiệu quả sản xuất, tránh thất thoát, theo dõi hoạt động sản xuất ở mọi nơi, vào mọi thời điểm. Nhờ đó, nhà quản trị có thể đưa ra những quyết định, kế hoạch kịp thời nhằm kiểm soát rủi ro, nâng cao hiệu quả, tối ưu chi phí sản xuất và thúc đẩy doanh số.</p><br />
                                        </div>

                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_f}>
                                        <img src="https://actechsmt.com/wp-content/uploads/2023/02/9859-01.svg" />
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
                            <Col span={12} lg={6}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="https://actechsmt.com/wp-content/uploads/2023/01/web-2-214.svg" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Sếp ôm hết việc, nhân viên ngồi chơi</p>
                                    </div>
                                </div>
                            </Col>

                            <Col span={12} lg={6}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="https://actechsmt.com/wp-content/uploads/2023/01/web-2-215.svg" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Không có hệ thống kiểm tra, giám sát</p>
                                    </div>
                                </div>
                            </Col>

                            <Col span={12} lg={6}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="https://actechsmt.com/wp-content/uploads/2023/01/web-2-216.svg" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Quy trình doanh nghiệp chưa mạch lạc còn chồng chéo quá nhiều</p>
                                    </div>
                                </div>
                            </Col>

                            <Col span={12} lg={6}>
                                <div className={styles.cart_problem}>
                                    <div className={styles.img_ca_pro}>
                                        <img src="https://actechsmt.com/wp-content/uploads/2023/01/web-2-217.svg" />
                                    </div>
                                    <div className={styles.text_ca_pro}>
                                        <p>Doanh nghiệp lãng phí quá nhiều chi phí cho việc mua phần mềm</p>
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
                                    TẦM QUAN TRỌNG CỦA
                                </h1>
                                <img className={styles.img_logo_tn} src="/imgACTech/Logo-34.svg" />
                                <div className={styles.underlined_red}></div>
                            </div>
                            <Row gutter={24}>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-1-125-1-150x150.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Tạo lập & Quản lý các yêu cầu sản xuất</h3>
                                            <p>Lệnh sản xuất chứa các thông tin về sản phẩm, nguyên vật liệu, định mức nguyên vật liệu, nhân sự sản xuất, số lượng sản phẩm, ngày hoàn thành dự kiến, kho nguyên liệu thô, kho thành phẩm.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-1-126-1-150x150.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Quản lý nguyên vật liệu sản xuất</h3>
                                            <p>Quản lý nguyên vật liệu giúp doanh nghiệp kiểm soát chặt chẽ về nguyên vật liệu đưa vào kế hoạch sản xuất. Việc quản lý chặt chẽ, doanh nghiệp có thể hạn chế tối đa thất thoát, đo lường chính xác lượng nguyên vật liệu nhập về để sản xuất.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-1-127-1-150x150.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Giám sát kế hoạch và tiến độ sản xuất</h3>
                                            <p>Giám sát kế hoạch và tiến độ sản xuất là tính năng quan trọng của phần mềm quản lý sản xuất, đem nhiều lợi ích trong quá trình ứng dụng phần mềm quản lý tiến độ sản xuất.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} lg={6}>
                                    <div className={styles.cart_outstanding}>
                                        <div className={styles.cart_out}>
                                            <div className={styles.img_outstanding}>
                                                <img src="/imgACTech/web-1-128-1-150x150.png" />
                                            </div>
                                        </div>
                                        <div className={styles.text_outstanding}>
                                            <h3>Thiết lập cấu hình sản xuất</h3>
                                            <p>Thiết lập cấu hình là một trong những khâu sử dụng phần mềm quản trị sản xuất. Mỗi doanh nghiệp có tính đặc thù khác nhau sẽ cần thiết lập cấu hình sản xuất thích ứng với doanh nghiệp đó.</p>
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
                            <h1>
                                QUẢN LÝ THEO QUY TRÌNH
                            </h1>
                            <img className={styles.img_logo_tn} src="/imgACTech/Logo-34.svg" />
                            <div className={styles.underlined_red}></div>
                        </div>
                        <Row gutter={24}>
                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/AFM-129.svg" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý kho</h3>
                                        <ul>
                                            <li>Quản lý nhập-xuất-tồn chi tiết theo lô, từng kho và từng vị trí và số đơn hàng</li>
                                            <li>Quản lý đồng thời nhiều loại hàng hoá; Thiết lập cơ cấu theo địa điểm hoặc đặc tính của vật tư.</li>
                                            <li>Quản lý theo mã vạch, barcode, giành hàng (SO); Quản lý phiếu, chứng từ và liên kết dữ liệu liên phòng ban.</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/AFM-130.svg" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý nguyên vật liệu</h3>
                                        <ul>
                                            <li>Đảm bảo nguyên vật liệu đầy đủ, đồng bộ, cung cấp kịp thời</li>
                                            <li>Đảm bảo sử dụng nguyên vật liệu hợp lý, tiết kiệm</li>
                                            <li>Đảm bảo công tác quản lý khác đạt hiệu quả cao</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/AFM-131.svg" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý máy móc, thiết bị</h3>
                                        <ul>
                                            <li>Quản lý tập trung hồ sơ thiết bị, máy móc: thông tin chung, lịch sử vòng đời, nhân viên phụ trách, bảo hành & bảo hiểm,…</li>
                                            <li>Giảm thời gian ngừng máy bằng kế hoạch bảo trì phòng ngừa và quy trình bảo trì khắc phục</li>
                                            <li>Theo dõi và cập nhật trạng thái công việc bảo trì xuyên suốt trên phần mềm</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/AFM-132.svg" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý kế hoạch, sản xuất</h3>
                                        <ul>
                                            <li>Cập nhật tiến độ sản xuất trên từng công đoạn sản xuất theo thời gian thực</li>
                                            <li>Cập nhật trạng thái đơn hàng</li>
                                            <li>Quản lý đơn hàng trễ, đơn hàng sắp đến hạn giao</li>
                                            <li>Tính toán tổng năng lực sản xuất, tổng thời gian theo thời gian thực</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/AFM-133.svg" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Quản lý chất lượng</h3>
                                        <ul>
                                            <li>Quản lý chất lượng sản phẩm chi tiết theo từng công đoạn</li>
                                            <li>Kiểm soát chất lượng NVL đầu vào, chất lượng bán thành phẩm tại mỗi công đoạn;</li>
                                            <li>Chất lượng sản phẩm cuối Thống kê, đánh giá các chỉ số hỏng, huỷ, tiêu hao, xác định nguyên nhân để khắc phục</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col span={24} lg={8} className={styles.col_mb2}>
                                <div className={styles.cart_feature}>
                                    <div className={styles.img_fea}>
                                        <img src="/imgACTech/AFM-134.svg" />
                                    </div>
                                    <div className={styles.text_fea}>
                                        <h3>Kiểm soát sản xuất</h3>
                                        <ul>
                                            <li>Lập lịch sản xuất</li>
                                            <li>Quản lý lệnh sản xuất</li>
                                            <li>Phân tích hiệu suất sản xuất Quản lý các công đoạn sản xuất</li>
                                            <li>Hoạch định quy trình sản xuất</li>
                                            <li>Theo dõi, giám sát sản xuất theo thời gian thực Quản lý khu sản xuất</li>
                                        </ul>
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
                                    <div className={styles.service_crm_r}>
                                        <div className={styles.img_secrmr}>
                                            <h1>LỢI ÍCH VIỆC QUẢN LÝ QUY TRÌNH SẢN XUẤT</h1>
                                            <img src='/imgACTech/Logo-34.svg' />
                                            <div className={styles.underlined_key}></div>
                                        </div>
                                        <br />
                                        <div className={styles.text_secr}>
                                            <ul>
                                                <li><p>Bảo mật thông tin</p></li>
                                                <li><p>Tối ưu hóa sản xuất</p></li>
                                                <li><p>Giảm chi phí sản xuất</p></li>
                                                <li><p>Tăng năng lực cạnh tranh</p></li>
                                                <li><p>Cho phép nhà quản lý đưa ra quyết định chính xác</p></li>
                                                <li><p>Chủ động bảo trì trang thiết bị</p></li>
                                                <li><p>Kiểm soát tốt chất lượng hàng hóa</p></li>

                                            </ul>
                                        </div>

                                    </div>
                                </Col>
                                <Col span={24} lg={12}>
                                    <div className={styles.service_crm_f}>
                                        <img src="/imgACTech/MRP-135.svg" />
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