import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy - Ecommerce app"}>
      <div className="row policy">
        <div className="col-md-6">
          <img
            src="/images/policy.jpg"
            alt="privacy policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <p className="text-justify mt-2">
            Chúng tôi cam kết bảo vệ quyền riêng tư của bạn và đảm bảo rằng dữ liệu
            cá nhân của bạn được bảo mật và chỉ được sử dụng theo cách mà bạn mong đợi. 
            Chính sách bảo mật này cung cấp chi tiết về cách chúng tôi thu thập, sử dụng, 
            và bảo vệ thông tin cá nhân của bạn khi sử dụng nền tảng thương mại điện tử của chúng tôi.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;