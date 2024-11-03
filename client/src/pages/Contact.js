import React from "react";
import Layout from "./../components/Layout/Layout";
import {BiBeenHere, BiMailSend, BiPhoneCall, BiSupport} from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us - Ecommerce app"}>
     <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpg"
            alt="contactus"
            style={{width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">LIÊN HỆ </h1>
          <p className="text-justify mt-2">
          Mọi thắc mắc và thông tin về sản phẩm, vui lòng gọi bất cứ lúc nào chúng tôi sẵn sàng 24/7
          </p>
          <p className="mt-3">
            <BiBeenHere /> : Số 1 Đ. Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@commerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012 345 6789 
          </p>
          <p className="mt-3">
            <BiSupport/> : 1800-0000
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
