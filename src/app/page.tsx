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
import Link from 'next/link';
import Head from 'next/head';
import DefaultLayout from '../components/DefaultLayout/layoutMenu';
import styles from "./page.module.scss";
import { text } from 'stream/consumers';


enum CompanySize {
  small = "small",
  fit = "fit",
  big = "big",
}

enum Area {
  hanoi = "hanoi",
  hochiminh = "hochiminh",
  mienbac = "mienbac",
  mientrung = "mientrung",
  miennam = "miennam"
}

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  company: string;
  scale: CompanySize;
  area: Area;
  content: string;
}

const schema = yup.object({
  name: yup.string().required("Please fill out this field."),
  email: yup.string().email("Invalid email").required("Please fill out this field."),
  phone: yup.string().required("Please fill out this field."),
  company: yup.string().required("Please fill out this field."),
  scale: yup.mixed<CompanySize>().oneOf(Object.values(CompanySize)).required("Please fill out this field."),
  area: yup.mixed<Area>().oneOf(Object.values(Area)).required("Please fill out this field."),
  content: yup.string().required("Please fill out this field."),
}).required();


export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const [textWhy, setTextWhy] = useState('ACTECH SMT là một giải pháp tổng thể giúp doanh nghiệp CÂN BẰNG HỆ THỐNG, hoạch định chiến lược rõ ràng, phát huy hết nguồn lực doanh nghiệp và hiệu quả trong điều hành hệ thống doanh nghiệp, tăng năng lực cạnh tranh trên thị trường.');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEamil, setIsEmail] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);


  const textWhyCkoose = (index: number) => {
    if (index == 1) {
      setTextWhy('ACTECH SMT là một giải pháp tổng thể giúp doanh nghiệp CÂN BẰNG HỆ THỐNG, hoạch định chiến lược rõ ràng, phát huy hết nguồn lực doanh nghiệp và hiệu quả trong điều hành hệ thống doanh nghiệp, tăng năng lực cạnh tranh trên thị trường.')
    }
    if (index == 2) {
      setTextWhy('Tích hợp trên một hệ thống duy nhất. Hệ thống DỄ DÀNG TÍCH HỢP VÀ MỞ RỘNG với các phần mềm hiện tại.')
    }
    if (index == 3) {
      setTextWhy('DOANH NGHIỆP UY TÍN, CHUYÊN NGHIỆP. Dịch vụ tư vấn tận tình, chăm sóc khách hàng chuyên nghiệp, đội ngũ lập trình viên có trình độ cao, hỗ trợ đa kênh, mang lại lợi ích tối đa cho doanh nghiệp.')
    }
    if (index == 4) {
      setTextWhy('Công nghệ quản trị thông minh ACTECH SMT (Smart Management Technology) ra đời với sứ mệnh ĐỒNG HÀNH CÙNG DOANH NGHIỆP GIẢI QUYẾT “BÀI TOÁN QUẢN TRỊ” ĐA NGÀNH NGHỀ VỚI ĐỘ LINH HOẠT CAO và phù hợp với Doanh nghiệp ở nhiều quy mô và lĩnh vực.')
    }
    if (index == 5) {
      setTextWhy('Lấy Khách hàng làm trọng tâm: sản phẩm được xây dựng dựa trên việc QUẢN TRỊ MỤC TIÊU của khách hàng.')
    }
    if (index == 6) {
      setTextWhy('ACTECH SMT là tổng hợp các phân hệ module quản trị: CRM, HRM, OFFICE, MRP, AFM, MARKETING, SSM…SỞ HỮU NHIỀU TÍNH NĂNG NỔI BẬT.')
    }
  }

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    console.log(JSON.stringify(data))
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


  const mapStyles = {
    height: "50vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 20.973179259444585,
    lng: 105.82097698115253
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

  const handleBeforeChange = (_: number, to: number) => {
    setCurrentSlide(to);
  };

  return (
    <DefaultLayout>
      <Carousel arrows={true} autoplay beforeChange={handleBeforeChange} className='caro_home'>
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
                      <h1 className={currentSlide === 0 ? styles.fallDown : ''}>QUẢN TRỊ DOANH NGHIỆP CHỈ TRONG 5 PHÚT</h1>
                      <div className={styles.div_img_left}>
                        <Row gutter={24}>
                          <Col span={8}>
                            <div className={styles.img_car_left}>
                              <img src='/imgACTech/web-2-149-158x169.png' />
                            </div>
                          </Col>
                          <Col span={8}>
                            <div className={styles.img_car_left}>
                              <img src='/imgACTech/web-2-151-158x169.png' />
                            </div>
                          </Col>
                          <Col span={8}>
                            <div className={styles.img_car_left}>
                              <img src='/imgACTech/web-2-147-155x166.png' />
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className={currentSlide === 0 ? styles.div_btn : ''}>
                        <button className={`${styles.btn_advise} ${styles.btn_uppercase}`} onClick={showModal}>Đăng ký tư vấn</button>
                        <button className={`${styles.btn_trial} ${styles.btn_uppercase}`} onClick={showModal}>Dùng thử miễn phí</button>
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
        </div>
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
                      <h1 className={currentSlide === 1 ? styles.fallDown : ''}>BÍ QUYẾT QUẢN LÝ DOANH NGHIỆP HIỆU QUẢ TẠO GIÁ TRỊ BỀN VỮNG</h1>
                      <h2>ACTECH SMT - QUẢN TRỊ DOANH NGHIỆP CHỈ TRONG 5 PHÚT</h2>
                      <div className={currentSlide === 1 ? styles.div_btn : ''}>
                        <button className={`${styles.btn_advise} ${styles.btn_uppercase}`} onClick={showModal}>Đăng ký tư vấn</button>
                        <button className={`${styles.btn_trial} ${styles.btn_uppercase}`} onClick={showModal}>Dùng thử miễn phí</button>
                      </div>
                    </div>

                  </div>
                </div>
              </Col>
              <Col span={24} lg={12}>
                <div className={styles.img_car}>
                  <img src="/imgACTech/web-2-227-725x625.png" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
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
                      <h1 className={currentSlide === 2 ? styles.fallDown : ''}>GIẢI PHÁP QUẢN TRỊ DOANH NGHIỆP</h1>
                      <h2>CRM – OFFICE – HRM – MRP – MARKETING – SSM –  AFM –  MBO –  SSM –  ASM –  PURCHASE –  DMS</h2>
                      <div className={currentSlide === 2 ? styles.div_btn : ''}>
                        <button className={`${styles.btn_advise} ${styles.btn_uppercase}`} onClick={showModal}>Đăng ký tư vấn</button>
                        <button className={`${styles.btn_trial} ${styles.btn_uppercase}`} onClick={showModal}>Dùng thử miễn phí</button>
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
        </div>
      </Carousel>

      <div className={styles.field}>
        <div className={styles.div_field}>
          <div className={styles.main_field}>
            <h1>
              LĨNH VỰC PHÁT TRIỂN<br />
              CÔNG NGHỆ
              <div className={styles.underlined}></div>
            </h1>

            <Row gutter={24}>
              <Col span={12} lg={6}>
                <div className={styles.cart_field}>
                  <div className={styles.img_cart_field}>
                    <img src='/imgACTech/web-2-154.svg' />
                  </div>
                  <div className={styles.text_cart_dield}>
                    <p>Công nghệ quản trị thông minh<br />
                      ACTech SMT</p>
                  </div>
                  <div className={styles.a_cart_fiald}>
                    <Link className={styles.a_cartfi} href="/linh-vuc-hoat-dong/cong-nghe-quan-tri-thong-minh-smt">
                      Xem Thêm <ArrowRightOutlined className={styles.icon_xt} />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col span={12} lg={6}>
                <div className={styles.cart_field}>
                  <div className={styles.img_cart_field}>
                    <img src='/imgACTech/web-1-02.svg' />
                  </div>
                  <div className={styles.text_cart_dield}>
                    <p>Công nghệ quản trị thông minh
                      <br />
                      ACTech SMART SYSTEM</p>
                  </div>
                  <div className={styles.a_cart_fiald}>
                    <Link className={styles.a_cartfi} href="/linh-vuc-hoat-dong/smart-system">
                      Xem Thêm <ArrowRightOutlined className={styles.icon_xt} />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col span={12} lg={6}>
                <div className={styles.cart_field}>
                  <div className={styles.img_cart_field}>
                    <img src='/imgACTech/web-1-01.svg' />
                  </div>
                  <div className={styles.text_cart_dield}>
                    <p>Công nghệ ứng dụng<br />
                      Sản xuất các app dịch vụ,
                      sản phẩm</p>
                  </div>
                  <div className={styles.a_cart_fiald}>
                    <Link className={styles.a_cartfi} href="/linh-vuc-hoat-dong/thiet-ke-mobile-app">
                      Xem Thêm <ArrowRightOutlined className={styles.icon_xt} />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col span={12} lg={6}>
                <div className={styles.cart_field}>
                  <div className={styles.img_cart_field}>
                    <img src='/imgACTech/web-2-153.svg' />
                  </div>
                  <div className={styles.text_cart_dield}>
                    <p>Công nghệ ứng dụng<br />
                      Gia công phần mềm</p>
                  </div>
                  <div className={styles.a_cart_fiald}>
                    <Link className={styles.a_cartfi} href="/linh-vuc-hoat-dong/san-xuat-va-gia-cong-phan-mem">
                      Xem Thêm <ArrowRightOutlined className={styles.icon_xt} />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
            <div className={`${styles.div_btn} ${styles.text_al}`}>
              <button className={styles.btn_advise} onClick={showModal}>Đăng ký tư vấn <ArrowRightOutlined className={styles.icon_xt} /></button>
              <button className={styles.btn_trial} onClick={showModal}>Dùng thử miễn phí <ArrowRightOutlined className={styles.icon_xt} /></button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.product}>
        <div className={styles.main_field}>
          <h1>
            NHỮNG SẢN PHẨM<br />
            CÔNG NGHỆ CỦA ACTECH
            <div className={styles.underlined}></div>
          </h1>
          <Row gutter={12}>
            <Col className={styles.col_48}>
              <div className={styles.cart_prod}>
                <Row gutter={12}>
                  <Col lg={24} span={6}>
                    <div className={styles.icon_cart_prod}>
                      <img src='/imgACTech/web-2-168-01-150x150.png' />
                    </div>
                  </Col>
                  <Col lg={24} span={18}>
                    <div className={styles.logo_cart_prod}>
                      <img src='/imgACTech/BUSINESS.png' />
                    </div>
                  </Col>
                </Row>
                <div className={styles.text_cart_prod}>
                  <p>Quản lý kinh doanh thông minh</p>
                </div>
              </div>
            </Col>
            <Col className={styles.col_48}>
              <div className={styles.cart_prod}>
                <Row gutter={12}>
                  <Col lg={24} span={6}>
                    <div className={styles.icon_cart_prod}>
                      <img src='/imgACTech/web-1-46-1.svg' />
                    </div>
                  </Col>
                  <Col lg={24} span={18}>
                    <div className={styles.logo_cart_prod}>
                      <img src='/imgACTech/CRM.png' />
                    </div>
                  </Col>
                </Row>
                <div className={styles.text_cart_prod}>
                  <p>Kinh doanh và chăm sóc khách hàng</p>
                </div>
              </div>
            </Col>
            <Col className={styles.col_48}>
              <div className={styles.cart_prod}>
                <Row gutter={12}>
                  <Col lg={24} span={6}>
                    <div className={styles.icon_cart_prod}>
                      <img src='/imgACTech/web-1-47-1.svg' />
                    </div>
                  </Col>
                  <Col lg={24} span={18}>
                    <div className={styles.logo_cart_prod}>
                      <img src='/imgACTech/HRM.png' />
                    </div>
                  </Col>
                </Row>
                <div className={styles.text_cart_prod}>
                  <p>Quản lý nguồn nhân lực</p>
                </div>
              </div>
            </Col>
            <Col className={styles.col_48}>
              <div className={styles.cart_prod}>
                <Row gutter={12}>
                  <Col lg={24} span={6}>
                    <div className={styles.icon_cart_prod}>
                      <img src='/imgACTech/web-1-48-1.svg' />
                    </div>
                  </Col>
                  <Col lg={24} span={18}>
                    <div className={styles.logo_cart_prod}>
                      <img src='/imgACTech/MRP.png' />
                    </div>
                  </Col>
                </Row>
                <div className={styles.text_cart_prod}>
                  <p>Quản lý quy trình sản xuất</p>
                </div>
              </div>
            </Col>
            <Col className={styles.col_48}>
              <div className={styles.cart_prod}>
                <Row gutter={12}>
                  <Col lg={24} span={6}>
                    <div className={styles.icon_cart_prod}>
                      <img src='/imgACTech/web-1-49-1.svg' />
                    </div>
                  </Col>
                  <Col lg={24} span={18}>
                    <div className={styles.logo_cart_prod}>
                      <img src='/imgACTech/OFFICE.png' />
                    </div>
                  </Col>
                </Row>
                <div className={styles.text_cart_prod}>
                  <p>Quản lý công việc và nội bộ</p>
                </div>
              </div>
            </Col>

            <Col className={styles.col_48}>
              <div className={styles.cart_prod}>
                <Row gutter={12}>
                  <Col lg={24} span={6}>
                    <div className={styles.icon_cart_prod}>
                      <img src='/imgACTech/web-1-51.svg' />
                    </div>
                  </Col>
                  <Col lg={24} span={18}>
                    <div className={styles.logo_cart_prod}>
                      <img src='/imgACTech/MARKETING.png' />
                    </div>
                  </Col>
                </Row>
                <div className={styles.text_cart_prod}>
                  <p>Tối ưu chi phí – tối đa doanh thu</p>
                </div>
              </div>
            </Col>
            <Col className={styles.col_48}>
              <div className={styles.cart_prod}>
                <Row gutter={12}>
                  <Col lg={24} span={6}>
                    <div className={styles.icon_cart_prod}>
                      <img src='/imgACTech/web-1-52.svg' />
                    </div>
                  </Col>
                  <Col lg={24} span={18}>
                    <div className={styles.logo_cart_prod}>
                      <img src='/imgACTech/SSM.png' />
                    </div>
                  </Col>
                </Row>
                <div className={styles.text_cart_prod}>
                  <p>Quản lý kho sản xuất</p>
                </div>
              </div>
            </Col>
            <Col className={styles.col_48}>
              <div className={styles.cart_prod}>
                <Row gutter={12}>
                  <Col lg={24} span={6}>
                    <div className={styles.icon_cart_prod}>
                      <img src='/imgACTech/web-1-53.svg' />
                    </div>
                  </Col>
                  <Col lg={24} span={18}>
                    <div className={styles.logo_cart_prod}>
                      <img src='/imgACTech/PURCHASE.png' />
                    </div>
                  </Col>
                </Row>
                <div className={styles.text_cart_prod}>
                  <p>Quản lý mua hàng</p>
                </div>
              </div>
            </Col>
            <Col className={styles.col_48}>
              <div className={styles.cart_prod}>
                <Row gutter={12}>
                  <Col lg={24} span={6}>
                    <div className={styles.icon_cart_prod}>
                      <img src='/imgACTech/web-1-54.svg' />
                    </div>
                  </Col>
                  <Col lg={24} span={18}>
                    <div className={styles.logo_cart_prod}>
                      <img src='/imgACTech/DMS.png' />
                    </div>
                  </Col>
                </Row>
                <div className={styles.text_cart_prod}>
                  <p>Quản lý thông tin trên cùng hệ thống</p>
                </div>
              </div>
            </Col>
            <Col className={styles.col_48}>
              <div className={styles.cart_prod}>
                <Row gutter={12}>
                  <Col lg={24} span={6}>
                    <div className={styles.icon_cart_prod}>
                      <img src='/imgACTech/web-1-55.svg' />
                    </div>
                  </Col>
                  <Col lg={24} span={18}>
                    <div className={styles.logo_cart_prod}>
                      <img src='/imgACTech/DAS.png' />
                    </div>
                  </Col>
                </Row>
                <div className={styles.text_cart_prod}>
                  <p>Quản lý giao hàng và vận chuyển</p>
                </div>
              </div>
            </Col>

            <Col className={styles.col_48}>
              <div className={styles.cart_prod}>
              </div>
            </Col>
            <Col className={styles.col_48}>
              <div className={styles.cart_prod}>
                <Row gutter={12}>
                  <Col lg={24} span={6}>
                    <div className={styles.icon_cart_prod}>
                      <img src='/imgACTech/web-1-56.svg' />
                    </div>
                  </Col>
                  <Col lg={24} span={18}>
                    <div className={styles.logo_cart_prod}>
                      <img src='/imgACTech/AMS.png' />
                    </div>
                  </Col>
                </Row>
                <div className={styles.text_cart_prod}>
                  <p>Quản lý thiết bị tài sản</p>
                </div>
              </div>
            </Col>
            <Col className={styles.col_48}>
              <div className={styles.cart_prod}>
                <Row gutter={12}>
                  <Col lg={24} span={6}>
                    <div className={styles.icon_cart_prod}>
                      <img src='/imgACTech/web-1-57.svg' />
                    </div>
                  </Col>
                  <Col lg={24} span={18}>
                    <div className={styles.logo_cart_prod}>
                      <img src='/imgACTech/MBO.png' />
                    </div>
                  </Col>
                </Row>
                <div className={styles.text_cart_prod}>
                  <p>Quản lý theo mục tiêu</p>
                </div>
              </div>
            </Col>
            <Col className={styles.col_48}>
              <div className={styles.cart_prod}>
                <Row gutter={12}>
                  <Col lg={24} span={6}>
                    <div className={styles.icon_cart_prod}>
                      <img src='/imgACTech/web-1-50.svg' />
                    </div>
                  </Col>
                  <Col lg={24} span={18}>
                    <div className={styles.logo_cart_prod}>
                      <img src='/imgACTech/AFM.png' />
                    </div>
                  </Col>
                </Row>
                <div className={styles.text_cart_prod}>
                  <p>Quản lý tài chính & kế toán</p>
                </div>
              </div>
            </Col>
            <Col className={styles.col_48}>
              <div className={styles.cart_prod}>
              </div>
            </Col>
          </Row>
          <div className={`${styles.div_btn_products} ${styles.text_al}`}>
            <button className={styles.btn_advise} onClick={showModal}>Đăng ký tư vấn <ArrowRightOutlined className={styles.icon_xt} /></button>
            <button className={styles.btn_trial} onClick={showModal}>Dùng thử miễn phí <ArrowRightOutlined className={styles.icon_xt} /></button>
          </div>
        </div>
      </div>

      <div className={styles.field}>
        <div className={styles.div_field}>
          <div className={styles.main_field}>
            <h1>
              NHỮNG KHÓ KHĂN THƯỜNG
              <br />
              GẶP CỦA DOANH NGHIỆP
              <div className={styles.underlined}></div>
            </h1>

          </div>
          <div className={styles.div_information}>
            <Row gutter={24}>
              <Col lg={8} span={24}>
                <div className={styles.hard_img}>
                  <img src='/imgACTech/Banner-1-q0ez7m2y7kcr9z4go3uiqya4zx92eoumlguumjqa2g.jpg' />
                </div>
                <div className={styles.text_hard}>
                  <p>1. Chất lượng sản xuất chưa được quy chuẩn đồng nhất.</p>
                  <p>2. Máy móc hay bị hỏng hóc, gây mất năng suất, dừng sản xuất.</p>
                  <p>3. Sản xuất tồn kho nhiều.</p>
                </div>
              </Col>

              <Col lg={8} span={24} className={styles.container}>
                <div className={`${styles.text_hard} ${styles.first}`}>
                  <p>4. Báo cáo chưa thể thiện thực trạng các phòng ban đang mắc phải.</p>
                  <p>5. Nhân sự chưa liên kết với nhau, chỗ thừa chỗ thiếu, hiệu quả làm việc thấp.</p>
                  <p>6. Sử dụng phần mềm rời rạc gây khó khăn trong quản lý.</p>
                  <p>7. Nhìn vào hiệu quả, năng suất quản lý thấp, ban lãnh đạo chưa thể đưa ra chiến lược phát triển doanh nghiệp.</p>
                </div>
                <div className={`${styles.hard_img} ${styles.second}`}>
                  <img src='/imgACTech/Banner-2-q0ezjey00oid1pzbr7hw1z2hi32z1vpavvqbjm8by0.jpg' />
                </div>
              </Col>

              <Col lg={8} span={24}>
                <div className={styles.hard_img}>
                  <img src='/imgACTech/Banner-3-q0ezyaq088vsvgd2un38j7v83pq6xcsaxjl33c5xfc.jpg' />
                </div>
                <div className={styles.text_hard}>
                  <p>8. Doanh thu giảm, mất khách hàng, quên khách hàng.</p>
                  <p>9. Mất nhiều thời gian để tổng hợp dữ liệu, thông tin từ nhiều nguồn khác nhau.</p>
                  <p>10. Không quản lý, đánh giá được hiệu quả làm việc của Sale, Telesale, Marketing</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.text_f_hard}>
            <p>Đó cũng là thực trạng của các công ty hiện nay</p>
            <p>chưa có giải pháp quản lý tối ưu cho hệ thống của họ.</p>
          </div>
        </div>
      </div>

      <div className={styles.product}>
        <div className={`${styles.main_field} ${styles.title_smt}`}>
          <h1>
            TẠI SAO NÊN CHỌN
          </h1>
          <div className={styles.img_smt}>
            <img src='/imgACTech/SMT-145.svg' />
          </div>
          <div className={styles.underlined}></div>
          <img className={styles.img_conter_logo2} src="/imgACTech/web-2-152-453x402.png" />
          <div className={styles.why_choose}>
            <div className={styles.title_why1} onMouseEnter={() => textWhyCkoose(1)}>
              <p>Cân bằng hệ thống</p>
            </div>
            <div className={styles.title_why2} onMouseEnter={() => textWhyCkoose(2)}>
              <p>Dễ dàng tích hợp và mở rộng</p>
            </div>
            <div className={styles.title_why3} onMouseEnter={() => textWhyCkoose(3)}>
              <p>Uy tin chuyên nghiệp</p>
            </div>
            <div className={styles.title_why4} onMouseEnter={() => textWhyCkoose(4)}>
              <p>Bài toán quản trị</p>
            </div>
            <div className={styles.title_why5} onMouseEnter={() => textWhyCkoose(5)}>
              <p>Quản trị mục tiêu</p>
            </div>
            <div className={styles.title_why6} onMouseEnter={() => textWhyCkoose(6)}>
              <p>Sở hữu tính năng đặc biệt</p>
            </div>
            <div className={styles.cornice}>
              <div className={styles.incornice}>
                <p>{textWhy}</p>
              </div>
            </div>
          </div>
          <div className={styles.why_choose_mobi}>
            <Row gutter={12}>
              <Col span={12}>
                <div className={styles.text_why_mobi}>
                  <h4>Cân bằng hệ thống</h4>
                  <p>ACTECH SMT là một giải pháp tổng thể giúp doanh nghiệp CÂN BẰNG HỆ THỐNG, hoạch định chiến lược rõ ràng, phát huy hết nguồn lực doanh nghiệp và hiệu quả trong điều hành hệ thống doanh nghiệp, tăng năng lực cạnh tranh trên thị trường.</p>
                </div>
              </Col>
              <Col span={12}>
                <div className={styles.text_why_mobi}>
                  <h4>Bài toán quản trị</h4>
                  <p>Công nghệ quản trị thông minh ACTECH SMT (Smart Management Technology) ra đời với sứ mệnh ĐỒNG HÀNH CÙNG DOANH NGHIỆP GIẢI QUYẾT “BÀI TOÁN QUẢN TRỊ” ĐA NGÀNH NGHỀ VỚI ĐỘ LINH HOẠT CAO và phù hợp với Doanh nghiệp ở nhiều quy mô và lĩnh vực. </p>
                </div>
              </Col>
              <Col span={12}>
                <div className={styles.text_why_mobi}>
                  <h4>Uy tín chuyên nghiệp</h4>
                  <p>DOANH NGHIỆP UY TÍN, CHUYÊN NGHIỆP. Dịch vụ tư vấn tận tình, chăm sóc khách hàng chuyên nghiệp, đội ngũ lập trình viên có trình độ cao, hỗ trợ đa kênh, mang lại lợi ích tối đa cho doanh nghiệp.</p>
                </div>
              </Col>
              <Col span={12}>
                <div className={styles.text_why_mobi}>
                  <h4>Dễ dàng tích hợp</h4>
                  <p>Tích hợp trên một hệ thống duy nhất. Hệ thống DỄ DÀNG TÍCH HỢP VÀ MỞ RỘNG với các phần mềm hiện tại.</p>
                </div>
              </Col>
              <Col span={12}>
                <div className={styles.text_why_mobi}>
                  <h4>Quản trị mục tiêu</h4>
                  <p>Lấy Khách hàng làm trọng tâm: sản phẩm được xây dựng dựa trên việc QUẢN TRỊ MỤC TIÊU của khách hàng.</p>
                </div>
              </Col>
              <Col span={12}>
                <div className={styles.text_why_mobi}>
                  <h4>Tính năng nổi bật</h4>
                  <p>ACTECH SMT là tổng hợp các phân hệ module quản trị: CRM, HRM, OFFICE, MRP, AFM, MARKETING, SSM…SỞ HỮU NHIỀU TÍNH NĂNG NỔI BẬT.</p>
                </div>
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

      {/* <div>
        <LoadScript
          googleMapsApiKey="AIzaSyAsumaJDjNyKxMxnuOAemOgaNa4rtM6y2Y" // Thay YOUR_API_KEY bằng khóa API của bạn
        >
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          >
          </GoogleMap>
        </LoadScript>
      </div> */}

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
    </DefaultLayout>
  );
}


