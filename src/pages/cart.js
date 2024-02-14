import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";
import axios from "axios";
import { deleteCart } from "../../redux/cart.slice";
import styles from "../styles/CartPage.module.css";
import PaymentForm from "../../components/Cart/PaymentForm/PaymentForm";
import { MdOutlineClose } from "react-icons/md";
import { getCookie, clearCookie } from "../../lib/useCookies";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { BsClipboardPlus, BsClipboardCheck } from "react-icons/bs";
import Toast from "../../components/Toast/Toast";
import { MdDeleteForever } from "react-icons/md";
import getConfig from "next/config";

const CartPage = ({ isConnected }) => {
  const { publicRuntimeConfig } = getConfig();
  const instance = axios.create({
    baseURL: publicRuntimeConfig.backendUrl,
  });
  const [showPopuP, setShowPopuP] = useState(false);
  const [promo, setPromo] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [payment, setPayments] = useState(false);
  const couponDataCartRef = useRef();
  const [redirectSeconds, setRedirectSeconds] = useState(15);
  const [loading, setLoading] = useState(false);
  const [payLoading, setPayLoading] = useState(false);
  const [copy, setCopy] = useState({ copy1: false, copy2: false });
  let couponDataCode = "";

  const [successHandel, setSuccessHandel] = useState(false);
  const [showPayDetails, setShowPayDetails] = useState({
    paymentId: "",
    orderId: "",
    msg: "",
  });

  // const cart = useSelector((state) => state.cart);
  const cart = getCookie("CARD");
  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    couponCode: "",
    dateTime: new Date(),
  });
  const [checkout, setCheckout] = useState(false);
  const [pdfNames, setPdfNames] = useState("");
  const [discount, setDiscount] = useState(0);
  const [discountMsg, setDiscountMsg] = useState("");
  const [showCancelCode, setShowCancelCode] = useState(false);

  const cancelInputCode = async () => {
    setDiscount("");
    setDiscountMsg("");
    couponDataCartRef.current.value = "";

    setShowCancelCode(false);
  };

  useEffect(() => {
    setMounted(true);
  });
  // useEffect(() => {
  //   if (payment) {
  //     const interval = setInterval(() => {
  //       console.log(redirectSeconds);
  //       if (redirectSeconds > 0) {
  //         setRedirectSeconds(redirectSeconds - 1);
  //       } else {
  //         clearInterval(interval);
  //         router.push("/");
  //       }
  //     }, 1000);
  //   }
  // }, [payment]);

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) =>
        parseFloat(accumulator + item.quantity * item.price).toLocaleString(
          "en-US"
        ),
      0
    );
  };
  const getDiscountPrice = () => {
    return cart.reduce(
      (accumulator, item) =>
        parseFloat(
          accumulator +
            item.quantity * item.price -
            (discount / 100) * (accumulator + item.quantity * item.price)
        ).toLocaleString("en-US"),
      0
    );
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API

    const data = await fetch("/api/payment/razorpay", {
      method: "POST",
      body: JSON.stringify({ prop: cart, discount: discount }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((t) => t.json());
    console.log(data.amount, "amount for razor pay");
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Skillslash Pvt Ltd",
      currency: data.currency,
      amount: data.amount * 100,
      order_id: data.id,
      description: `Thank you for Enrolling in our ${data.name}`,
      image:
        "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/logo.ico",
      handler: async function (response) {
        setSuccessHandel(true);
        setPayLoading(true);
        const paymentData = {
          orderCreationId: data.id,
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          signature: response.razorpay_signature,
          TotalPrice: data.amount,
          GST: data.GST,
          coursePrice: data.coursePrice,
          name: details.name,
          email: details.email,
          phone: details.phone,
          courseName: data.name,
          time: new Date(),
          pdfName: pdfNames,
        };

        // Validate payment at server - using webhooks is a better idea.
        const result = await axios.post("/api/payment/success", paymentData);

        //Show user that payment is successful

        // console.log(result, "verifyData");
        // console.log(
        //   response.razorpay_payment_id + "id",
        //   "/n",
        //   response.razorpay_order_id + "orderid",
        //   "/n",
        //   response.razorpay_signature + "signature"
        // );
        let id = Math.floor(1000 + Math.random() * 9000);
        const invoiceData = {
          customerName: details.name,
          customerEmail: details.email,
          invoiceId: id,
          invoiceDate: new Date(),
          paymentDate: new Date(),
          courseName: data.name,
          GST: data.GST,
          customerPhone: details.phone,
          coursePrice: cart[0].price,
          DiscountPrice: (discount / 100) * cart[0].price,
          TotalPrice: data.amount,
        };

        try {
          const data = await axios.post(
            `/api/payment/generateInvoice`,
            invoiceData
          );
          // convert the response into an array Buffer
          if (data.status === 200) {
            const pdfName = data.json();
            // console.log(pdfName);
            setPdfNames(pdfName);
          }
        } catch (error) {}

        //sending data to db//
        const dbSend = await axios.post(
          "/api/payment/databaseAuth",
          paymentData
        );
        const formData = new FormData();
        Object.entries(paymentData).forEach(([key, value]) => {
          formData.append(key, value);
        });

        fetch("https://getform.io/f/fb4af2dc-0f8f-4518-8963-28058e9fa205", {
          method: "POST",
          body: formData,
        });

        console.log(dbSend, "database payment data");
        setPayLoading(false);
        setShowPayDetails({
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          msg: "payment Successful",
        });

        // console.log(dbSend, "database data");

        try {
          const response = await fetch("/api/Database/getCoupon", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              couponCodeNameData: couponDataCartRef.current.value,
            }),
          });
          if (response.status === 200) {
            const { couponNameData, msg } = await response.json();
            console.log(msg);
          }
          if (response.status === 404) {
            const { msg } = await response.json();
            console.log(msg);
          }
        } catch (error) {}
        setPayments(true);
      },
      prefill: {
        name: details.name,
        email: details.email,
        contact: details.phone,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  async function submitHandler(event) {
    event.preventDefault();
    setShowCancelCode(true);
    // console.log("handler");
    couponDataCode = couponDataCartRef.current.value;
    setDetails({ ...details, couponCode: couponDataCode });

    if (couponDataCode === "") {
      setDiscountMsg("Enter coupon code");
      return;
    } else {
      setLoading(true);
      try {
        const response = await fetch("/api/Database/getCoupon", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            couponCode: couponDataCode,
          }),
        });
        if (response.status === 200) {
          const { couponName, msg } = await response.json();
          // console.log(typeof parseInt(couponName.discountPercent), "FrontEnd");
          setDiscount(parseInt(couponName.discountPercent));
          setDiscountMsg(msg);
        } else if (response.status === 404) {
          setDiscountMsg("Coupon Not Valid");
        }
      } catch (err) {
        console.error(
          "You have an error in your code or there are network issues.",
          err
        );
      }
      setLoading(false);
    }
  }

  function calculateGST(price, gstRate) {
    if (typeof price !== "number" || typeof gstRate !== "number") {
      throw new Error("Price and GST rate must be numbers");
    }

    if (price < 0 || gstRate < 0) {
      throw new Error("Price and GST rate cannot be negative");
    }

    const gstAmount = (price * gstRate) / 100;
    const totalPrice = price + gstAmount;

    return gstAmount;
  }

  // const generateInvoice = (name) => {
  //   console.log("generatePDF");
  //   // send a post request with the name to our API endpoint
  //   const fetchData = async () => {
  //     const data = await fetch("/api/generateInvoice", {
  //       method: "POST",
  //       body: { name },
  //     });
  //     // convert the response into an array Buffer
  //     if (data.response === 200) {
  //       const pdfName = data.json();
  //       setPdfNames(pdfName);
  //     }
  //   };
  //   console.log(fetchData);
  //   // convert the buffer into an object URL
  //   // const saveAsPDF = async () => {
  //   //   const buffer = await fetchData();
  //   //   const blob = new Blob([buffer]);
  //   //   const link = document.createElement("a");
  //   //   link.href = URL.createObjectURL(blob);
  //   //   link.download = "invoice.pdf";
  //   //   link.click();
  //   // };

  //   // saveAsPDF();
  // };

  return mounted ? (
    <div className={styles.container}>
      <Head>
        <title>cart-Learnbay</title>
      </Head>
      <>
        <div className={styles.heading}>
          <h3>Cart({cart.length})</h3>
        </div>
        <div className={styles.cartWrap}>
          <div>
            {cart.map((item, i) => {
              return (
                <div className={styles.ItemBody} key={item.title}>
                  <div className={styles.leftItem}>
                    <div className={styles.image}>
                      <Image
                        src={item.img}
                        height="120"
                        width="205"
                        alt="hello"
                      />
                    </div>
                    <div>
                      <p className={styles.ItemName}>{item.name}</p>
                      <p className={styles.tag}>Live Class</p>
                    </div>
                  </div>
                  <div className={styles.rightItem}>
                    {/* <p>₹ {item.price.toLocaleString("en-US")}</p> */}

                    <div className={styles.buttons}>
                      <p>{item.quantity}</p>

                      <MdDeleteForever
                        style={{ color: "red" }}
                        onClick={() => {
                          clearCookie();
                        }}
                      />
                    </div>
                    <p className={styles.ItemPrice}>
                      ₹{" "}
                      {parseFloat(item.quantity * item.price).toLocaleString(
                        "en-US"
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.summery}>
            <p className={styles.details}>
              <span style={{ fontWeight: 600 }}>
                X {cart.length} {cart[0].name}
              </span>
              <span>
                INR{" "}
                {(
                  cart[0].price - calculateGST(cart[0].price, 18)
                ).toLocaleString("en-IN")}
              </span>
            </p>
            <p className={styles.details}>
              <span style={{ fontWeight: 600 }}>+ GST</span>
              <span>
                INR {calculateGST(cart[0].price, 18).toLocaleString("en-IN")}
              </span>
            </p>
            <p className={styles.promo} onClick={() => setPromo(!promo)}>
              <span style={{ color: "#f29c1d", fontWeight: 600 }}>
                I have a promo code
              </span>
              {promo ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </p>
            {promo && (
              <div className={styles.promo}>
                <p style={{ fontSize: "14px", color: "#646464", margin: 0 }}>
                  Apply Coupon
                </p>
                <form onSubmit={submitHandler} className={styles.couponForm}>
                  <div className={styles.formInputWrap}>
                    <input
                      type="text"
                      id="percent"
                      required
                      ref={couponDataCartRef}
                      placeholder="Enter Promo code"
                    />
                    {showCancelCode ? (
                      <button
                        onClick={() => {
                          cancelInputCode();
                        }}
                      >
                        X
                      </button>
                    ) : (
                      ""
                    )}

                    {discountMsg === "" ? "" : <p>{discountMsg}</p>}
                  </div>
                  <div>
                    {loading ? (
                      <div className="center">
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                      </div>
                    ) : (
                      <button type="submit">Apply Coupon</button>
                    )}
                  </div>
                </form>
              </div>
            )}

            <p className={styles.promo}>
              <span style={{ fontWeight: 600 }}>Grand Total:</span>
              <span>
                INR {discount === "" ? getTotalPrice() : getDiscountPrice()}
              </span>
            </p>
            <button
              className={styles.button}
              onClick={() => setShowPopuP(true)}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
        {showPopuP && (
          <div className={styles.popup}>
            <div className={styles.popupWrap}>
              <MdOutlineClose
                className={styles.close}
                onClick={() => setShowPopuP(false)}
              />
              <h3>Fill the Details</h3>
              <PaymentForm setDetails={setDetails} setCheckout={setCheckout} />
              {checkout && (
                <button
                  className={styles.button}
                  onClick={() => {
                    makePayment();
                    dispatch(deleteCart);
                  }}
                >
                  CheckOut
                </button>
              )}
            </div>
          </div>
        )}

        {successHandel ? (
          <div className={styles.paymentShow}>
            <div className={styles.innerPayment}>
              <AiOutlineCloseCircle
                className={styles.cross}
                onClick={() => setSuccessHandel(false)}
              />
              {payLoading ? (
                <>
                  <div className="center">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                  </div>
                  verifying your payment please wait...
                </>
              ) : (
                <div className={styles.paymentContent}>
                  <Image
                    src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/79952-successful.gif"
                    width="120"
                    height="120"
                    layout="intrinsic"
                    alt="animation"
                  />

                  <p>
                    OrderId: {showPayDetails.orderId}
                    {copy.copy1 ? (
                      <BsClipboardCheck />
                    ) : (
                      <BsClipboardPlus
                        onClick={() => {
                          navigator.clipboard.writeText(
                            ` OrderId: {showPayDetails.orderId}`
                          );

                          setCopy({ ...copy, copy1: true });
                        }}
                      />
                    )}
                  </p>
                  <p>
                    PaymentId: {showPayDetails.paymentId}
                    {copy.copy2 ? (
                      <BsClipboardCheck />
                    ) : (
                      <BsClipboardPlus
                        onClick={() => {
                          navigator.clipboard.writeText(
                            ` PaymentId: ${showPayDetails.paymentId}`
                          );
                          setCopy({ ...copy, copy2: true });
                        }}
                      />
                    )}
                  </p>
                  <p>{showPayDetails.msg}</p>
                  <p className={styles.redirect}>
                    redirecting you in {redirectSeconds} seconds....
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
        {copy.copy1 || copy.copy2 ? (
          <Toast content="successfully copied" />
        ) : (
          ""
        )}
      </>
    </div>
  ) : (
    ""
  );
};

export default CartPage;
// CartPage.getInitialProps = async (ctx) => {
//   // const { token, USER } = nextCookie(ctx);
//   // return {
//   //   initialName: USER,
//   //   token: token,
//   // };
// };
