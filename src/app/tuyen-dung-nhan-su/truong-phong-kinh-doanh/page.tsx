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
    YoutubeOutlined
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

interface IFormInput2 {
    name: string
    email: string
    phone: string
    content: string
    locations: string
    file: FileList
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

const schema2 = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone is required"),
    content: yup.string().required("Content is required"),
    locations: yup.string().required("Locations is required"),
    file: yup.mixed<FileList>().required("File is required")
}).required();

export default function Home() {
    const { register: register1, handleSubmit: handleSubmit1, formState: { errors: errors1 } } = useForm({
        resolver: yupResolver(schema)
      });
    const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm<IFormInput2>({
        resolver: yupResolver(schema2),
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEamil, setIsEmail] = useState('');
    const [isEamilSigning, setIsEmailSigning] = useState('');



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

    const onSubmitSigning: SubmitHandler<IFormInput2> = async data => {
        console.log(data)
        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('phone', data.phone);
            formData.append('content', data.content);
            formData.append('locations', data.locations);
            if (data.file.length > 0) {
                formData.append('file', data.file[0]);
            }

            const res = await fetch('http://127.0.0.1:8000/cms/nghiencuu/email_recruitment', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                setIsEmailSigning('Chúng tôi đã nhận được yêu cầu của bạn')
            } else {
                setIsEmailSigning('Đã có lỗi, xin hay gửi lại cho chúng tôi')
            }
        } catch (error) {
            setIsEmailSigning('Đã có lỗi, xin hay gửi lại cho chúng tôi')
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <DefaultLayout>
            <div className={styles.form_cmt}>
                <h1>TRƯỞNG PHÒNG KINH DOANH</h1>
                <h1>Trả lời</h1>
                <p>Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</p>
            </div>
        </DefaultLayout>
    )
}