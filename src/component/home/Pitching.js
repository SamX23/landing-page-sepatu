const Pitching = () => {
  return (
    <>
      <div
        className="container-fluid mt-5"
        // style="background-color: #4D69D1;"
      >
        <div className="p-2"></div>
        <h2 className="text-center pt-5 pb-5">Kelebihan Bakulsepatu</h2>
        <div className="p-5"></div>
        <div className="p-4"></div>
      </div>

      <div className="container value-product">
        <div className="row">
          <div className="col-sm-4 box-value">
            <div className=" shadow-lg p-4 bg-white">
              <h3>Produk Original</h3>
              <p className="mt-3">
                produk yang kami tawarkan dijamin orinya! jadi pembeli gak perlu
                khawatir tentang produk yang kami punya
              </p>
            </div>
          </div>
          <div className="col-sm-4 box-value">
            <div className=" shadow-lg p-4 bg-white">
              <h3>Ringan & Solid</h3>
              <p className="mt-3">
                {" "}
                Dengan bahan yang bekualitas sepatu kami didesain sempurna
                sehingga memiliki fitur istimewa yaitu ringan namun tetap solid
              </p>
            </div>
          </div>
          <div className="col-sm-4 box-value">
            <div className=" shadow-lg p-4 bg-white">
              <h3>Bahan Awet</h3>
              <p className="mt-3">
                Karena bahannya yang mantap, sepatu kami memiliki ketahanan yang
                cukup tinggi untuk dipakai segala kegiatan.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pitching;
